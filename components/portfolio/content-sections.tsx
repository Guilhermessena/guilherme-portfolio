import type { PortfolioCopy } from "../../app/[lang]/dictionaries";

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
          <article className="experience-entry">
            <div className="entry-marker" aria-hidden="true"><span /></div>
            <div className="entry-heading">
              <div>
                <h3>{copy.role}</h3>
                <p>{copy.company}</p>
              </div>
              <span className="entry-type">{copy.specialtyLabel}</span>
            </div>
            <p className="entry-summary">{copy.summary}</p>
            <ul className="responsibility-list">
              {copy.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
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

export function ContactSection({ copy }: { copy: PortfolioCopy["contact"] }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner page-width">
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <div className="contact-copy">
          <h2 id="contact-title">{copy.title}</h2>
          <p>{copy.summary}</p>
          {CONTACT_LINKS.some((link) => link.href) && (
            <div className="contact-links" aria-label={copy.linksLabel}>
              {CONTACT_LINKS.map((link) => link.href && (
                <a key={link.type} href={link.href} target="_blank" rel="noreferrer">
                  {copy.links[link.type]}<span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <span className="contact-ornament" aria-hidden="true">G.</span>
      </div>
    </section>
  );
}

const CONTACT_LINKS: { type: "linkedin" | "github" | "email"; href: string | null }[] = [
  { type: "linkedin", href: null },
  { type: "github", href: null },
  { type: "email", href: null },
];