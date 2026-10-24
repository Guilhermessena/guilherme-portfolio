import type { PortfolioCopy } from "../../app/[lang]/dictionaries";
import type { Locale } from "../../i18n/locales";
import { HeroSection } from "./hero-section";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  StackSection,
  WorkSection,
} from "./content-sections";
import { SiteHeader } from "./site-header";
import { BackToTopButton, SectionJumpButton } from "./interactive-elements";

export function PortfolioPage({
  copy,
  locale,
  currentYear,
}: {
  copy: PortfolioCopy;
  locale: Locale;
  currentYear: number;
}) {
  return (
    <>
      <SectionJumpButton className="skip-link" targetId="main-content" focusTarget>
        {copy.ui.skipToContent}
      </SectionJumpButton>
      <SiteHeader copy={copy} locale={locale} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection copy={copy} />
        <AboutSection copy={copy.about} />
        <ExperienceSection copy={copy.experience} />
        <WorkSection copy={copy.work} />
        <StackSection copy={copy.stack} />
        <EducationSection copy={copy.education} />
        <ContactSection copy={copy.contact} />
      </main>
      <footer className="site-footer page-width">
        <span>{copy.footer.note}</span>
        <span>© {currentYear} Guilherme S.</span>
        <SectionJumpButton targetId="top">{copy.footer.backToTop}</SectionJumpButton>
      </footer>
      <BackToTopButton label={copy.footer.backToTop} />
    </>
  );
}