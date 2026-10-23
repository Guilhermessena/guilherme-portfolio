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
      <a className="skip-link" href="#main-content">
        {copy.ui.skipToContent}
      </a>
      <SiteHeader copy={copy} locale={locale} />
      <main id="main-content">
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
        <a href="#top">{copy.footer.backToTop}</a>
      </footer>
    </>
  );
}