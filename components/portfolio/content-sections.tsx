import type { PortfolioCopy } from "../../app/[lang]/dictionaries";
import { CaseStudyDialog } from "./interactive-elements";

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export function AboutSection({ copy }: { copy: PortfolioCopy["about"] }) {
  return (
    <section className="content-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-grid page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="section-content about-content">
          <h2 id="about-title">{copy.title}</h2>
          <p className="section-lead">{copy.paragraph}</p>
          <div className="principles-block">
            <h3>{copy.principlesTitle}</h3>
            <ul>
              {copy.principles.map((principle, index) => (
                <li key={principle}><span>0{index + 1}</span>{principle}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection({ copy }: { copy: PortfolioCopy["experience"] }) {
  return (
    <section className="content-section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-grid page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="section-content">
          <h2 id="experience-title">{copy.title}</h2>
          <details className="experience-entry">
            <summary className="entry-toggle">
              <span className="entry-heading-copy">
                <span className="entry-role" role="heading" aria-level={3}>{copy.role}</span>
                <span className="entry-company">
                  <svg aria-hidden="true" className="xp-company-mark" focusable="false" viewBox="0 0 152 168">
                    <path d="m150.1 166.4-49.1-85.1 47.1-81.5h-51l-21.6 37.4-21.6-37.4h-49l46.1 79.8-50.1 86.8h51l24.6-42.6 24.6 42.6z" />
                  </svg>
                  {copy.company}
                </span>
              </span>
              <span className="entry-type">{copy.specialtyLabel}</span>
              <span className="entry-toggle-icon" aria-hidden="true" />
            </summary>
            <div className="entry-marker" aria-hidden="true"><span /></div>
            <div className="experience-details">
              <div className="experience-details-inner">
                <p className="entry-summary">{copy.summary}</p>
                <ul className="responsibility-list">
                  {copy.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export function WorkSection({ copy }: { copy: PortfolioCopy["work"] }) {
  return (
    <section className="content-section work-section" id="work" aria-labelledby="work-title">
      <div className="section-grid page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="section-content">
          <div className="work-heading">
            <h2 id="work-title">{copy.title}</h2>
            <p className="section-lead">{copy.intro}</p>
          </div>
          <div className="case-list">
            {copy.cases.map((caseStudy, index) => (
              <article className="case-study" key={caseStudy.title}>
                <div className="case-index">0{index + 1}</div>
                <div className="case-copy">
                  <p className="case-type">{copy.professionalLabel}</p>
                  <h3>{caseStudy.title}</h3>
                  <div className="case-detail">
                    <h4>{copy.contextLabel}</h4>
                    <p>{caseStudy.summary}</p>
                  </div>
                  <div className="case-detail case-contribution">
                    <h4>{copy.contributionLabel}</h4>
                    <p>{caseStudy.contribution}</p>
                  </div>
                  <CaseStudyDialog copy={copy} caseStudy={caseStudy} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StackSection({ copy }: { copy: PortfolioCopy["stack"] }) {
  return (
    <section className="content-section stack-section" id="stack" aria-labelledby="stack-title">
      <div className="section-grid page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="section-content">
          <h2 id="stack-title">{copy.title}</h2>
          <div className="stack-grid">
            {copy.groups.map((group, index) => (
              <article className="stack-group" key={group.title}>
                <div className="stack-group-heading">
                  <span>0{index + 1}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationSection({ copy }: { copy: PortfolioCopy["education"] }) {
  return (
    <section className="content-section education-section" id="education" aria-labelledby="education-title">
      <div className="section-grid page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="section-content">
          <h2 id="education-title">{copy.title}</h2>
          <div className="education-list">
            {copy.entries.map((entry, index) => (
              <article className="education-entry" key={entry.institution}>
                <span className="education-index">0{index + 1}</span>
                <h3>{entry.qualification}</h3>
                <p>{entry.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const CONTACT_ICON_PATHS = {
  email:
    "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z",
  linkedin:
    "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
  github:
    "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
} as const;

function ContactIcon({ name }: { name: keyof typeof CONTACT_ICON_PATHS }) {
  return (
    <svg aria-hidden="true" className="contact-icon" focusable="false" viewBox="0 0 16 16">
      <path d={CONTACT_ICON_PATHS[name]} />
    </svg>
  );
}

export function ContactSection({ copy }: { copy: PortfolioCopy["contact"] }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="contact-copy">
          <h2 id="contact-title">{copy.title}</h2>
          <p>{copy.summary}</p>
          <div className="contact-actions">
            <a className="contact-email-button" href="mailto:guilhermedvsena@gmail.com">
              <ContactIcon name="email" />
              {copy.links.email}<span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email-address" href="mailto:guilhermedvsena@gmail.com">
              guilhermedvsena@gmail.com
            </a>
          </div>
          <div className="contact-links" aria-label={copy.linksLabel}>
            {CONTACT_LINKS.map((link) => (
              <a key={link.type} href={link.href} target="_blank" rel="noopener noreferrer">
                <ContactIcon name={link.type} />
                {copy.links[link.type]}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
        <span className="contact-ornament" aria-hidden="true">G.</span>
      </div>
    </section>
  );
}

const CONTACT_LINKS: { type: "linkedin" | "github"; href: string }[] = [
  { type: "linkedin", href: "https://www.linkedin.com/in/guilhermessena/" },
  { type: "github", href: "https://github.com/Guilhermessena" },
];