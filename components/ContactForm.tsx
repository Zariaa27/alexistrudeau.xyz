"use client";

import { useState, type FormEvent } from "react";

const contactEmail = "hello@alexistrudeau.xyz";
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !message) {
      setState("error");
      setFeedback("Please enter your name and a message before sending.");
      return;
    }

    if (!formId) {
      setState("error");
      setFeedback("The contact form is not configured yet. Please email me directly.");
      return;
    }

    setState("submitting");
    setFeedback("Sending your message…");

    try {
      const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Formspree could not accept your message. Please try again.");
      }

      form.reset();
      setState("success");
      setFeedback("Message sent. Thanks for reaching out; I’ll get back to you soon.");
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email me directly.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>WRITE A NOTE</span><span>ALL FIELDS REQUIRED</span></div>
      <label htmlFor="contact-name">Your name</label>
      <input autoComplete="name" id="contact-name" maxLength={100} name="name" placeholder="Name" required />

      <label htmlFor="contact-email">Email address</label>
      <input autoComplete="email" id="contact-email" maxLength={254} name="email" placeholder="you@example.com" required type="email" />

      <label htmlFor="contact-message">What are you working on?</label>
      <textarea id="contact-message" maxLength={5000} name="message" placeholder="A little context goes a long way..." required rows={4} />

      <div className="form-submit-row">
        <button className="button button-primary" disabled={state === "submitting"} type="submit">
          {state === "submitting" ? "Sending…" : "Send message"}
          <span aria-hidden="true">{state === "submitting" ? "···" : "↗"}</span>
        </button>
        <span>SERVERLESS FORM · FREE TIER</span>
      </div>
      <p
        aria-live={state === "error" ? "assertive" : "polite"}
        className={`form-status${state === "idle" ? "" : ` is-${state}`}`}
        role={state === "error" ? "alert" : "status"}
      >
        {feedback}
        {state === "error" && (
          <>
            {" "}<a href={`mailto:${contactEmail}`}>Email me directly.</a>
          </>
        )}
      </p>
    </form>
  );
}