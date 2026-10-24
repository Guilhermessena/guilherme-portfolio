"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { PortfolioCopy } from "../../app/[lang]/dictionaries";

type HeroCopy = PortfolioCopy["hero"];

const NAVIGATION_IDS = ["about", "experience", "work", "stack", "education", "contact"];

export function scrollToSection(targetId: string, focusTarget = false) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  if (focusTarget) {
    target.focus({ preventScroll: true });
  }

  const scrollPaddingTop = Number.parseFloat(
    window.getComputedStyle(document.documentElement).scrollPaddingTop,
  ) || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - scrollPaddingTop;
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth";

  window.scrollTo({ top: Math.max(0, top), behavior });
}

export function SectionJumpButton({
  targetId,
  className,
  label,
  focusTarget = false,
  children,
}: {
  targetId: string;
  className?: string;
  label?: string;
  focusTarget?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      className={className}
      type="button"
      aria-label={label}
      aria-controls={targetId}
      onClick={() => scrollToSection(targetId, focusTarget)}
    >
      {children}
    </button>
  );
}

export function ArchitectureMap({ copy }: { copy: HeroCopy }) {
  const [activeNode, setActiveNode] = useState<"core" | "structure" | "quality" | "delivery">("core");
  const { diagram } = copy;
  const nodes = [
    {
      id: "core" as const,
      index: diagram.core,
      title: "Flutter",
      subtitle: "Dart · Mobile",
      detail: diagram.coreDetail,
      className: "node-core",
    },
    {
      id: "structure" as const,
      index: diagram.structure,
      title: "BLoC / Cubit",
      subtitle: "",
      detail: diagram.structureDetail,
      className: "node-architecture",
    },
    {
      id: "quality" as const,
      index: diagram.quality,
      title: diagram.qualityValue,
      subtitle: "",
      detail: diagram.qualityDetail,
      className: "node-quality",
    },
    {
      id: "delivery" as const,
      index: diagram.delivery,
      title: diagram.deliveryValue,
      subtitle: "",
      detail: diagram.deliveryDetail,
      className: "node-delivery",
    },
  ];
  const selectedNode = nodes.find((node) => node.id === activeNode) ?? nodes[0];

  return (
    <div className="hero-visual" role="group" aria-label={diagram.alternativeText}>
      <div className="visual-topline">
        <span>{diagram.panelTitle}</span>
        <span className="visual-status"><i /> {diagram.status}</span>
      </div>
      <div className="architecture-map">
        <span className="map-line map-line-horizontal" />
        <span className="map-line map-line-vertical" />
        <span className="map-line map-line-diagonal" />
        {nodes.map((node) => (
          <button
            key={node.id}
            className={`map-node ${node.className}`}
            type="button"
            aria-pressed={activeNode === node.id}
            onClick={() => setActiveNode(node.id)}
          >
            <span className="node-index">{node.index}</span>
            <strong>{node.title}</strong>
            {node.subtitle && <span>{node.subtitle}</span>}
          </button>
        ))}
        <span className="map-coordinate coordinate-one">{diagram.coordinate}</span>
        <span className="map-coordinate coordinate-two">{diagram.flow}</span>
      </div>
      <div className="visual-caption" aria-live="polite" aria-atomic="true">
        <span>{copy.focusLabel}</span>
        <strong>{selectedNode.title}</strong>
        <p className="visual-caption-detail">{selectedNode.detail}</p>
        <span className="caption-index">02 — 04</span>
      </div>
    </div>
  );
}

export function CaseStudyDialog({
  copy,
  caseStudy,
}: {
  copy: PortfolioCopy["work"];
  caseStudy: PortfolioCopy["work"]["cases"][number];
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const triggerScrollYRef = useRef(0);
  const bodyStyleRef = useRef<string | null>(null);
  const titleId = useId();
  const summaryId = useId();

  const closeDialog = () => {
    const dialog = dialogRef.current;

    if (!dialog?.open) {
      return;
    }

    dialog.close();
    const body = document.body;

    if (bodyStyleRef.current === null) {
      body.removeAttribute("style");
    } else {
      body.setAttribute("style", bodyStyleRef.current);
    }

    bodyStyleRef.current = null;
    triggerRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: triggerScrollYRef.current, behavior: "instant" });
  };

  return (
    <>
      <button
        className="case-open-button"
        type="button"
        aria-haspopup="dialog"
        onClick={(event) => {
          triggerRef.current = event.currentTarget;
          triggerScrollYRef.current = window.scrollY;
          bodyStyleRef.current = document.body.getAttribute("style");
          document.body.style.position = "fixed";
          document.body.style.top = `-${triggerScrollYRef.current}px`;
          document.body.style.left = "0";
          document.body.style.width = "100%";
          dialogRef.current?.showModal();
        }}
      >
        {copy.openDetailsLabel}<span aria-hidden="true">↗</span>
      </button>
      <dialog
        className="case-dialog"
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={summaryId}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            closeDialog();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
      >
        <div className="case-dialog-inner">
          <div className="case-dialog-heading">
            <p className="case-type">{copy.professionalLabel}</p>
            <button
              className="case-dialog-close"
              type="button"
              aria-label={copy.closeDialogLabel}
              onClick={closeDialog}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <h2 id={titleId}>{caseStudy.title}</h2>
          <p className="case-dialog-summary" id={summaryId}>{caseStudy.summary}</p>
          <div className="case-dialog-details">
            <section>
              <h3>{copy.problemLabel}</h3>
              <p>{caseStudy.problem}</p>
            </section>
            <section>
              <h3>{copy.approachLabel}</h3>
              <p>{caseStudy.approach}</p>
            </section>
            <section>
              <h3>{copy.architectureLabel}</h3>
              <p>{caseStudy.architecture}</p>
            </section>
            <section>
              <h3>{copy.contributionLabel}</h3>
              <p>{caseStudy.contribution}</p>
            </section>
            <section>
              <h3>{copy.technologyLabel}</h3>
              {caseStudy.technologies.length > 0 ? (
                <ul>
                  {caseStudy.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              ) : (
                <p>{copy.technologyFallback}</p>
              )}
            </section>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function ActiveSectionNavigation({
  copy,
  label,
}: {
  copy: PortfolioCopy["navigation"];
  label: string;
}) {
  const [activeSection, setActiveSection] = useState("");
  const links: [string, string][] = [
    [NAVIGATION_IDS[0], copy.about],
    [NAVIGATION_IDS[1], copy.experience],
    [NAVIGATION_IDS[2], copy.work],
    [NAVIGATION_IDS[3], copy.stack],
    [NAVIGATION_IDS[4], copy.education],
    [NAVIGATION_IDS[5], copy.contact],
  ];

  useEffect(() => {
    const sections = NAVIGATION_IDS
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let observer: IntersectionObserver | null = null;
    const updateObserver = () => {
      observer?.disconnect();
      const markerY = Math.min(150, Math.round(window.innerHeight * 0.3));
      const bandHeight = Math.min(120, window.innerHeight - markerY);
      const bottomInset = Math.max(0, window.innerHeight - markerY - bandHeight);

      observer = new IntersectionObserver(() => {
        const current = sections
          .filter((section) => section.getBoundingClientRect().top <= markerY)
          .at(-1);
        setActiveSection(current?.id ?? "");
      }, {
        rootMargin: `-${markerY}px 0px -${bottomInset}px 0px`,
        threshold: 0,
      });

      sections.forEach((section) => observer?.observe(section));
    };

    updateObserver();
    window.addEventListener("resize", updateObserver);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateObserver);
    };
  }, []);

  return (
    <nav className="primary-navigation" aria-label={label}>
      {links.map(([id, text]) => (
        <button
          key={id}
          type="button"
          aria-controls={id}
          aria-current={activeSection === id ? "location" : undefined}
          onClick={() => scrollToSection(id)}
        >
          {text}
        </button>
      ))}
    </nav>
  );
}

export function BackToTopButton({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setVisible(window.scrollY > window.innerHeight * 0.7));
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      className="back-to-top-button"
      type="button"
      aria-label={label}
      onClick={() => {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
        window.scrollTo({ top: 0, behavior });
      }}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
