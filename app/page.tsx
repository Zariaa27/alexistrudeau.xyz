"use client";

import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { ContactForm } from "@/components/ContactForm";
import { StackShowcase } from "@/components/StackShowcase";
import { projects, services } from "@/lib/data";
import { messages } from "@/lib/i18n";

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  const { locale } = useLanguage();
  const copy = messages[locale];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={copy.footer.home}>
          AT<span>.</span>
        </a>
        <nav aria-label={copy.navigation.label} className="site-nav">
          <a href="#stack">{copy.navigation.toolkit}</a>
          <a href="#work">{copy.navigation.projects}</a>
          <a href="#contact">{copy.navigation.contact}</a>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <a className="header-availability" href="#contact">
            <span className="status-dot" />
            {copy.navigation.availability}
          </a>
        </div>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> {copy.hero.eyebrow}</p>
          <h1>Alexis<br />Trudeau<span className="hero-period">.</span></h1>
          <p className="hero-intro">{copy.hero.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {copy.hero.projectsLink} <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">{copy.hero.contactLink} <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note"><span>{copy.hero.availabilityLabel}</span> {copy.hero.availability}</p>
        </div>

        <div className="infra-visual" aria-label={copy.infrastructure.label}>
          <div className="infra-topline">
            <span>{copy.infrastructure.label}</span>
            <span className="infra-live"><span className="status-dot" /> {copy.infrastructure.online}</span>
          </div>
          <div className="infra-map">
            <div className="infra-node infra-node-edge">
              <span className="node-index">{copy.infrastructure.edge}</span>
              <span className="node-name">{copy.infrastructure.traffic}</span>
              <span className="node-indicator">TLS · DNS</span>
            </div>
            <div className="infra-connector" aria-hidden="true"><span /></div>
            <div className="infra-node infra-node-core">
              <span className="node-index">{copy.infrastructure.core}</span>
              <span className="node-name">{copy.infrastructure.application}</span>
              <span className="node-indicator">CONTAINERS · CI/CD</span>
            </div>
            <div className="infra-branches" aria-hidden="true"><span /><span /><span /></div>
            <div className="infra-leaves">
              <div className="infra-leaf"><span className="leaf-mark leaf-mark-mint" />{copy.infrastructure.data}</div>
              <div className="infra-leaf"><span className="leaf-mark leaf-mark-amber" />{copy.infrastructure.network}</div>
              <div className="infra-leaf"><span className="leaf-mark leaf-mark-lime" />{copy.infrastructure.observe}</div>
            </div>
          </div>
          <div className="infra-bottomline">
            <span>{copy.infrastructure.design}</span>
            <span>{copy.infrastructure.build} <span aria-hidden="true">↗</span></span>
          </div>
          <span className="infra-watermark" aria-hidden="true">AT / SYS</span>
        </div>

        <a className="hero-scroll" href="#stack"><span /> {copy.hero.scroll}</a>
      </section>

      <section className="stack-section section-shell" id="stack">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> {copy.toolkit.eyebrow}</p>
          <h2>{copy.toolkit.title}<br /><span>{copy.toolkit.titleEmphasis}</span></h2>
        </div>
        <StackShowcase />
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span>03</span> {copy.work.eyebrow}</p>
            <h2>{copy.work.title}<br /><span>{copy.work.titleEmphasis}</span></h2>
          </div>
          <p className="section-aside">{copy.work.introduction}</p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.id}>
              <div className="project-art" aria-hidden="true">
                <div className="project-art-caption"><span>{copy.work.caseStudy} 0{index + 1}</span><span>{copy.work.studio}</span></div>
                {index === 0 && (
                  <div className="automation-art">
                    <span className="automation-line automation-line-one" />
                    <span className="automation-line automation-line-two" />
                    <span className="automation-line automation-line-three" />
                    <span className="automation-node automation-node-one">01</span>
                    <span className="automation-node automation-node-two">02</span>
                    <span className="automation-node automation-node-three">03</span>
                    <span className="automation-label">{copy.work.automation}</span>
                  </div>
                )}
                {index === 1 && (
                  <div className="virtual-art">
                    <div className="virtual-rack"><span /><span /><span /></div>
                    <div className="virtual-links"><i /><i /><i /></div>
                    <div className="virtual-vms"><span>VM / 01</span><span>VM / 02</span><span>VM / 03</span></div>
                    <span className="virtual-caption">{copy.work.virtualization}</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="dashboard-art">
                    <div className="dashboard-kicker"><span>{copy.work.dashboard}</span><span className="dashboard-live">{copy.work.dashboardLive}</span></div>
                    <div className="dashboard-metric"><span>{copy.work.dashboardMetric}</span><strong>99.98<span>%</span></strong></div>
                    <div className="dashboard-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="dashboard-footer"><span>{copy.work.serviceHealth} <b>{copy.work.healthy}</b></span><span>{copy.work.lastDeploy} <b>{copy.work.twoMinutesAgo}</b></span></div>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{copy.projects[project.id].title}</h3>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <p>{copy.projects[project.id].description}</p>
                <div className="project-footer">
                  <ul className="tech-list" aria-label={copy.work.technologies}>
                    {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {project.githubUrl || project.liveUrl ? (
                    <div className="project-links">
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">{copy.work.source} ↗</a>}
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{copy.work.live} ↗</a>}
                    </div>
                  ) : <span className="project-links-muted">{copy.work.progress}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section section-shell">
        <div className="services-heading">
          <p className="eyebrow"><span>04</span> {copy.services.eyebrow}</p>
          <h2>{copy.services.title}<br /><span>{copy.services.titleEmphasis}</span></h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.id}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-main">
                <h3>{copy.services.offerings[service.id].title}</h3>
                <p>{copy.services.offerings[service.id].description}</p>
              </div>
              <ul>
                {copy.services.offerings[service.id].capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy">
          <p className="eyebrow"><span>05</span> {copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <p className="contact-intro">{copy.contact.introduction}</p>
          <a className="contact-email" href="mailto:hello@alexistrudeau.xyz">
            {copy.contact.email}: hello@alexistrudeau.xyz <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ContactForm />
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#top" aria-label={copy.footer.home}>AT<span>.</span></a>
        <p>{copy.footer.description}</p>
        <a href="#top">{copy.footer.backToTop} <span aria-hidden="true">↑</span></a>
        <span className="footer-year">© {new Date().getFullYear()} ALEXIS TRUDEAU</span>
      </footer>
    </main>
  );
}
