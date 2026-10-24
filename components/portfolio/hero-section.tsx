import type { PortfolioCopy } from "../../app/[lang]/dictionaries";
import { ArchitectureMap, SectionJumpButton } from "./interactive-elements";

export function HeroSection({
  copy,
}: {
  copy: Pick<PortfolioCopy, "hero" | "ui">;
}) {
  return (
    <section className="hero-section page-width" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-mark" />{copy.hero.eyebrow}</p>
        <h1 id="hero-title" className="hero-name">{copy.hero.title}</h1>
        <p className="hero-positioning">{copy.hero.name}</p>
        <p className="hero-summary">{copy.hero.summary}</p>
        <div className="hero-actions">
          <SectionJumpButton className="button button-primary" targetId="work">
            {copy.hero.primaryAction}<span aria-hidden="true">↓</span>
          </SectionJumpButton>
          <SectionJumpButton className="text-link" targetId="about">
            {copy.hero.secondaryAction}<span aria-hidden="true">↓</span>
          </SectionJumpButton>
          <SectionJumpButton className="text-link hero-contact-link" targetId="contact">
            {copy.hero.contactAction}<span aria-hidden="true">↗</span>
          </SectionJumpButton>
        </div>
        <div className="experience-stats" aria-label={copy.ui.professionalExperience}>
          <div>
            <strong>~4</strong>
            <span>{copy.hero.experienceLabel}</span>
          </div>
          <div>
            <strong>2+</strong>
            <span>{copy.hero.mobileLabel}</span>
          </div>
        </div>
      </div>

      <ArchitectureMap copy={copy.hero} />
      <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
    </section>
  );
}