import type { PortfolioCopy } from "../../app/[lang]/dictionaries";
import type { Locale } from "../../i18n/locales";
import { LanguageSwitcher } from "../navigation/language-switcher";
import { ActiveSectionNavigation, SectionJumpButton } from "./interactive-elements";

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
        <SectionJumpButton className="wordmark" targetId="top" label={copy.ui.brandHome}>
          <span className="wordmark-mark" aria-hidden="true">G.</span>
          <span>Guilherme S.</span>
        </SectionJumpButton>
        <ActiveSectionNavigation copy={copy.navigation} label={copy.ui.primaryNavigation} />
        <LanguageSwitcher currentLocale={locale} label={copy.navigation.language} />
      </div>
    </header>
  );
}