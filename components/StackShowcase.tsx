"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { skills, type SkillCategory } from "@/lib/data";
import { messages } from "@/lib/i18n";

export function StackShowcase() {
  const { locale } = useLanguage();
  const copy = messages[locale].toolkit;
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(skills[0].category);
  const activeGroup = skills.find((group) => group.category === activeCategory) ?? skills[0];
  const activeIndex = skills.findIndex((group) => group.category === activeCategory);
  const tabId = `stack-tab-${activeIndex}`;

  return (
    <div className="stack-showcase">
      <div className="stack-controls">
        <p className="stack-prompt">{copy.prompt} <span aria-hidden="true">↓</span></p>
        <div className="stack-tabs" role="tablist" aria-label={copy.prompt}>
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
                {copy.categories[group.category]}
                <span className="stack-tab-arrow" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>
      </div>

      <div aria-labelledby={tabId} className="stack-panel" id="stack-panel" role="tabpanel">
        <div className="stack-panel-topline">
          <span>{copy.capability} / 0{activeIndex + 1}</span>
          <span>{copy.activeLayer} <i /></span>
        </div>
        <h3>{copy.categories[activeGroup.category]}</h3>
        <p className="stack-note">{copy.notes[activeGroup.category]}</p>
        <ul className="skill-list">
          {activeGroup.skills.map((skill, index) => (
            <li key={skill}>
              <details className="skill-disclosure">
                <summary>
                  <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{skill}</span>
                  <span className="skill-check" aria-hidden="true">+</span>
                </summary>
                <p className="skill-detail">{copy.details[skill]}</p>
              </details>
            </li>
          ))}
        </ul>
        <div className="stack-panel-foot"><span>{copy.footer}</span><span>{activeGroup.skills.length} {copy.skillsIndexed}</span></div>
      </div>
    </div>
  );
}