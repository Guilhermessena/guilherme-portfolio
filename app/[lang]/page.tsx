import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioPage } from "../../components/portfolio/portfolio-page";
import { getDictionary } from "./dictionaries";
import { isLocale } from "../../i18n/locales";

type LocalePageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = getDictionary(lang);

  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
  };
}

export default async function HomePage({ params }: LocalePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const copy = getDictionary(lang);
  return <PortfolioPage copy={copy} locale={lang} currentYear={await getCurrentYear()} />;
}

async function getCurrentYear() {
  "use cache";

  return new Date().getFullYear();
}
