import { ContactForm } from "@/components/ContactForm";
import { StackShowcase } from "@/components/StackShowcase";
import { projects, services } from "@/lib/data";

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Alexis Trudeau home">
          AT<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="site-nav">
          <a href="#stack">Stack</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-availability" href="#contact">
          <span className="status-dot" />
          Let&apos;s talk
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> SYSTEMS / WEB ENGINEERING</p>
          <h1>Alexis<br />Trudeau<span className="hero-period">.</span></h1>
          <p className="hero-intro">
            I build the infrastructure behind reliable products, and the
            thoughtful interfaces people use every day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note"><span>BASED IN</span> Independent · Remote-friendly</p>
        </div>

        <div className="infra-visual" aria-label="Illustration of a connected application infrastructure">
          <div className="infra-topline">
            <span>FIELD NOTES / 001</span>
            <span className="infra-live"><span className="status-dot" /> SYSTEMS ONLINE</span>
          </div>
          <div className="infra-map">
            <div className="infra-node infra-node-edge">
              <span className="node-index">EDGE / 01</span>
              <span className="node-name">Traffic in</span>
              <span className="node-indicator">TLS · DNS</span>
            </div>
            <div className="infra-connector" aria-hidden="true"><span /></div>
            <div className="infra-node infra-node-core">
              <span className="node-index">CORE / 02</span>
              <span className="node-name">Application layer</span>
              <span className="node-indicator">CONTAINERS · CI/CD</span>
            </div>
            <div className="infra-branches" aria-hidden="true"><span /><span /><span /></div>
            <div className="infra-leaves">
              <div className="infra-leaf"><span className="leaf-mark leaf-mark-mint" />DATA</div>
              <div className="infra-leaf"><span className="leaf-mark leaf-mark-amber" />NETWORK</div>
              <div className="infra-leaf"><span className="leaf-mark leaf-mark-lime" />OBSERVE</div>
            </div>
          </div>
          <div className="infra-bottomline">
            <span>DESIGN FOR FAILURE</span>
            <span>BUILD FOR CHANGE <span aria-hidden="true">↗</span></span>
          </div>
          <span className="infra-watermark" aria-hidden="true">AT / SYS</span>
        </div>

        <a className="hero-scroll" href="#stack"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="stack-section section-shell" id="stack">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> THE TOOLKIT</p>
          <h2>Curious by nature.<br /><span>Practical by design.</span></h2>
        </div>
        <StackShowcase />
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow"><span>03</span> SELECTED WORK</p>
            <h2>Built to work.<br /><span>Made to last.</span></h2>
          </div>
          <p className="section-aside">
            A few directions I enjoy working in, from the systems layer to the
            interface people see.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.id}>
              <div className="project-art" aria-hidden="true">
                <div className="project-art-caption"><span>CASE / 0{index + 1}</span><span>AT—LAB</span></div>
                {index === 0 && (
                  <div className="automation-art">
                    <span className="automation-line automation-line-one" />
                    <span className="automation-line automation-line-two" />
                    <span className="automation-line automation-line-three" />
                    <span className="automation-node automation-node-one">01</span>
                    <span className="automation-node automation-node-two">02</span>
                    <span className="automation-node automation-node-three">03</span>
                    <span className="automation-label">PLAN → APPLY → VERIFY</span>
                  </div>
                )}
                {index === 1 && (
                  <div className="virtual-art">
                    <div className="virtual-rack"><span /><span /><span /></div>
                    <div className="virtual-links"><i /><i /><i /></div>
                    <div className="virtual-vms"><span>VM / 01</span><span>VM / 02</span><span>VM / 03</span></div>
                    <span className="virtual-caption">ISOLATE · SNAPSHOT · RESTORE</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="dashboard-art">
                    <div className="dashboard-kicker"><span>OPS / OVERVIEW</span><span className="dashboard-live">LIVE</span></div>
                    <div className="dashboard-metric"><span>UPTIME</span><strong>99.98<span>%</span></strong></div>
                    <div className="dashboard-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <div className="dashboard-footer"><span>API STATUS <b>HEALTHY</b></span><span>LAST DEPLOY <b>2M AGO</b></span></div>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <ul className="tech-list" aria-label="Technologies">
                    {project.techStack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {project.githubUrl || project.liveUrl ? (
                    <div className="project-links">
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source ↗</a>}
                      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
                    </div>
                  ) : <span className="project-links-muted">CASE STUDY IN PROGRESS</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section section-shell">
        <div className="services-heading">
          <p className="eyebrow"><span>04</span> HOW I CAN HELP</p>
          <h2>Good systems make<br /><span>everything possible.</span></h2>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.id}>
              <span className="service-number">0{index + 1}</span>
              <div className="service-main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ul>
                {service.capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy">
          <p className="eyebrow"><span>05</span> START A CONVERSATION</p>
          <h2>Have a good<br />problem<span>?</span></h2>
          <p className="contact-intro">
            Tell me what you&apos;re building, untangling, or trying to make more
            reliable. I&apos;d like to hear about it.
          </p>
          <a className="contact-email" href="mailto:hello@alexistrudeau.xyz">
            hello@alexistrudeau.xyz <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ContactForm />
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#top" aria-label="Back to top">AT<span>.</span></a>
        <p>Systems thinking. Human-scale software.</p>
        <a href="#top">BACK TO TOP <span aria-hidden="true">↑</span></a>
        <span className="footer-year">© {new Date().getFullYear()} ALEXIS TRUDEAU</span>
      </footer>
    </main>
  );
}
