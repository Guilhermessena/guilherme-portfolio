"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "../../i18n/locales";
import { locales } from "../../i18n/locales";

type ScrollSnapshot = {
  pathname: string;
  sectionId: string;
  progress: number;
};

let pendingScrollSnapshot: ScrollSnapshot | null = null;

const languageNames: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  de: "DE",
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: {
  currentLocale: Locale;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const snapshot = pendingScrollSnapshot;

    if (!snapshot) {
      return;
    }

    pendingScrollSnapshot = null;

    if (snapshot.pathname !== pathname) {
      return;
    }

    const section = document.getElementById(snapshot.sectionId);

    if (!section) {
      return;
    }

    const referenceY = window.innerHeight * 0.3;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
    const scrollY = sectionTop + section.offsetHeight * snapshot.progress - referenceY;

    window.scrollTo({
      top: Math.max(0, Math.min(maxScrollY, scrollY)),
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <nav className="language-switcher" aria-label={label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          scroll={false}
          aria-current={locale === currentLocale ? "page" : undefined}
          onClick={(event) => {
            const isPlainClick =
              event.button === 0 &&
              !event.altKey &&
              !event.ctrlKey &&
              !event.metaKey &&
              !event.shiftKey;

            if (!isPlainClick || event.defaultPrevented) {
              return;
            }

            pendingScrollSnapshot =
              locale === currentLocale ? null : captureScrollSnapshot(`/${locale}`);

            if (window.location.hash) {
              event.preventDefault();
              router.push(`/${locale}${window.location.hash}`, { scroll: false });
            }
          }}
        >
          {languageNames[locale]}
        </Link>
      ))}
    </nav>
  );
}

function captureScrollSnapshot(pathname: string): ScrollSnapshot | null {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main > section[id]"),
  );

  if (sections.length === 0) {
    return null;
  }

  const referenceY = window.innerHeight * 0.3;
  const section = sections.reduce((nearest, candidate) => {
    const nearestRect = nearest.getBoundingClientRect();
    const candidateRect = candidate.getBoundingClientRect();
    const nearestDistance = Math.max(nearestRect.top - referenceY, referenceY - nearestRect.bottom, 0);
    const candidateDistance = Math.max(
      candidateRect.top - referenceY,
      referenceY - candidateRect.bottom,
      0,
    );

    return candidateDistance < nearestDistance ? candidate : nearest;
  });
  const rect = section.getBoundingClientRect();

  return {
    pathname,
    sectionId: section.id,
    progress: Math.max(0, Math.min(1, (referenceY - rect.top) / rect.height)),
  };
}