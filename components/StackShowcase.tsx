"use client";

import { useState } from "react";
import { skills, type SkillCategory } from "@/lib/data";

type SkillName = (typeof skills)[number]["skills"][number];

const categoryNotes: Record<SkillCategory, string> = {
  "Systems & Infrastructure": "Reliable foundations, repeatable operations.",
  "Web Development": "Useful interfaces, clean application architecture.",
  "Network & Security": "Clear boundaries, resilient connections.",
  Virtualization: "Flexible environments, isolated workloads.",
};

const skillDetails: Record<SkillName, string> = {
  "Linux administration": "Configure, maintain, and troubleshoot Linux hosts and services.",
  "Infrastructure as code": "Manage infrastructure through versioned, repeatable configuration.",
  Docker: "Package and run applications in reproducible containers.",
  "CI/CD": "Automate checks and delivery so changes ship reliably.",
  TypeScript: "Model application data and behavior with static types.",
  "Next.js": "Build React applications with routing, rendering, and static export.",
  React: "Create composable interfaces from reusable components.",
  "Tailwind CSS": "Build responsive interfaces with utility-first styling.",
  "REST APIs": "Design and integrate resource-oriented HTTP services.",
  "TCP/IP": "Understand and troubleshoot the protocols that connect systems.",
  DNS: "Configure and diagnose domain names and service discovery.",
  VLANs: "Segment network traffic into isolated logical networks.",
  Firewalls: "Apply traffic rules that protect services and network boundaries.",
  VPNs: "Connect remote systems through encrypted network tunnels.",
  "Proxmox VE": "Manage virtual machines, storage, and clusters on Proxmox VE.",
  KVM: "Run hardware-assisted virtual machines on Linux hosts.",
  "Virtual machines": "Provision isolated environments for services and testing.",
  "Storage planning": "Choose storage layouts with capacity, redundancy, and recovery in mind.",
};

export function StackShowcase() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(skills[0].category);
  const activeGroup = skills.find((group) => group.category === activeCategory) ?? skills[0];
  const activeIndex = skills.findIndex((group) => group.category === activeCategory);
  const tabId = `stack-tab-${activeIndex}`;

  return (
    <div className="stack-showcase">
      <div className="stack-controls">
        <p className="stack-prompt">SELECT A LAYER <span aria-hidden="true">↓</span></p>
        <div className="stack-tabs" role="tablist" aria-label="Engineering skill categories">
          {skills.map((group, index) => {
            const selected = group.category === activeCategory;
            return (
              <button
                aria-controls="stack-panel"
                aria-selected={selected}
                className={`stack-tab${selected ? " is-active" : ""}`}
                id={`stack-tab-${index}`}
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                role="tab"
                type="button"
              >
                <span className="stack-tab-index">0{index + 1}</span>
                {group.category}
                <span className="stack-tab-arrow" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
      </div>

      <div aria-labelledby={tabId} className="stack-panel" id="stack-panel" role="tabpanel">
        <div className="stack-panel-topline">
          <span>CAPABILITY / 0{activeIndex + 1}</span>
          <span>ACTIVE LAYER <i /></span>
        </div>
        <h3>{activeGroup.category}</h3>
        <p className="stack-note">{categoryNotes[activeGroup.category]}</p>
        <ul className="skill-list">
          {activeGroup.skills.map((skill, index) => (
            <li key={skill}>
              <details className="skill-disclosure">
                <summary>
                  <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{skill}</span>
                  <span className="skill-check" aria-hidden="true">+</span>
                </summary>
                <p className="skill-detail">{skillDetails[skill]}</p>
              </details>
            </li>
          ))}
        </ul>
        <div className="stack-panel-foot"><span>COMPOSABLE BY DEFAULT</span><span>{activeGroup.skills.length} SKILLS INDEXED</span></div>
      </div>
    </div>
  );
}