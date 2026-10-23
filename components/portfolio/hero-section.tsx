import type { PortfolioCopy } from "../../app/[lang]/dictionaries";

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
          <a className="button button-primary" href="#work">
            {copy.hero.primaryAction}<span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#about">
            {copy.hero.secondaryAction}<span aria-hidden="true">↓</span>
          </a>
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

      <div className="hero-visual" role="img" aria-label={copy.hero.diagram.alternativeText}>
        <div className="visual-topline">
          <span>{copy.hero.diagram.panelTitle}</span>
          <span className="visual-status"><i /> {copy.hero.diagram.status}</span>
        </div>
        <div className="architecture-map">
          <span className="map-line map-line-horizontal" />
          <span className="map-line map-line-vertical" />
          <span className="map-line map-line-diagonal" />
          <div className="map-node node-core">
            <span className="node-index">{copy.hero.diagram.core}</span>
            <strong>Flutter</strong>
            <span>Dart · Mobile</span>
          </div>
          <div className="map-node node-architecture">
            <span className="node-index">{copy.hero.diagram.structure}</span>
            <strong>BLoC / Cubit</strong>
          </div>
          <div className="map-node node-quality">
            <span className="node-index">{copy.hero.diagram.quality}</span>
            <strong>{copy.hero.diagram.qualityValue}</strong>
          </div>
          <div className="map-node node-delivery">
            <span className="node-index">{copy.hero.diagram.delivery}</span>
            <strong>{copy.hero.diagram.deliveryValue}</strong>
          </div>
          <span className="map-coordinate coordinate-one">{copy.hero.diagram.coordinate}</span>
          <span className="map-coordinate coordinate-two">{copy.hero.diagram.flow}</span>
        </div>
        <div className="visual-caption">
          <span>{copy.hero.focusLabel}</span>
          <strong>{copy.hero.focusValue}</strong>
          <span className="caption-index">02 — 04</span>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
    </section>
  );
}