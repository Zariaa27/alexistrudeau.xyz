"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

const contactEmail = "hello@alexistrudeau.xyz";
const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xzeedbkb";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { locale } = useLanguage();
  const copy = messages[locale].contact;
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
      setFeedback(copy.trimValidation);
      return;
    }

    if (!formId) {
      setState("error");
      setFeedback(copy.missingConfiguration);
      return;
    }

    setState("submitting");
    setFeedback(copy.sendingFeedback);

    try {
      const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(copy.submissionError);
      }

      form.reset();
      setState("success");
      setFeedback(copy.success);
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : copy.genericError,
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>{copy.formHeading}</span><span>{copy.required}</span></div>
      <label htmlFor="contact-name">{copy.nameLabel}</label>
      <input autoComplete="name" id="contact-name" maxLength={100} name="name" placeholder={copy.namePlaceholder} required />

      <label htmlFor="contact-email">{copy.emailLabel}</label>
      <input autoComplete="email" id="contact-email" maxLength={254} name="email" placeholder={copy.emailPlaceholder} required type="email" />

      <label htmlFor="contact-message">{copy.messageLabel}</label>
      <textarea id="contact-message" maxLength={5000} name="message" placeholder={copy.messagePlaceholder} required rows={4} />

      <div className="form-submit-row">
        <button className="button button-primary" disabled={state === "submitting"} type="submit">
          {state === "submitting" ? copy.sending : copy.submit}
          <span aria-hidden="true">{state === "submitting" ? "···" : "↗"}</span>
        </button>
        <span>{copy.formNote}</span>
      </div>
      <p
        aria-live={state === "error" ? "assertive" : "polite"}
        className={`form-status${state === "idle" ? "" : ` is-${state}`}`}
        role={state === "error" ? "alert" : "status"}
      >
        {feedback}
        {state === "error" && (
          <>
            {" "}<a href={`mailto:${contactEmail}`}>{copy.directEmail}</a>
          </>
        )}
      </p>
    </form>
  );
}