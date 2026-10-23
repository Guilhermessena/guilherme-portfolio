import type { PortfolioCopy } from "../../app/[lang]/dictionaries";
import type { Locale } from "../../i18n/locales";
import { LanguageSwitcher } from "../navigation/language-switcher";

export function SiteHeader({
  copy,
  locale,
}: {
  copy: Pick<PortfolioCopy, "navigation" | "ui">;
  locale: Locale;
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label={copy.ui.brandHome}>
          <span className="wordmark-mark" aria-hidden="true">G.</span>
          <span>Guilherme S.</span>
        </a>
        <nav className="primary-navigation" aria-label={copy.ui.primaryNavigation}>
          <a href="#about">{copy.navigation.about}</a>
          <a href="#experience">{copy.navigation.experience}</a>
          <a href="#work">{copy.navigation.work}</a>
          <a href="#stack">{copy.navigation.stack}</a>
          <a href="#education">{copy.navigation.education}</a>
          <a href="#contact">{copy.navigation.contact}</a>
        </nav>
        <LanguageSwitcher currentLocale={locale} label={copy.navigation.language} />
      </div>
    </header>
  );
}