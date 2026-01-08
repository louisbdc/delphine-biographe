"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export type TimelineItem = {
  title: string;
  tag?: string;
  headline?: string;
  body?: string;
  reverse?: boolean;
  image?: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const checkpointRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [progressPx, setProgressPx] = useState(0);
  const [activeMap, setActiveMap] = useState<Record<number, boolean>>({});

  const itemIndices = useMemo(() => items.map((_, i) => i), [items]);

  useEffect(() => {
    let rafId = 0;
    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const containerTopPage = window.scrollY + rect.top;
        const containerHeight = rect.height;
        const centerPageY = window.scrollY + viewportCenter;

        // Progress is the distance from container top to the viewport center
        let nextProgress = centerPageY - containerTopPage;
        if (Number.isNaN(nextProgress)) nextProgress = 0;
        nextProgress = Math.max(0, Math.min(containerHeight, nextProgress));
        setProgressPx(nextProgress);

        // Determine which checkpoints are above the viewport center
        const nextActiveMap: Record<number, boolean> = {};
        checkpointRefs.current.forEach((el, index) => {
          if (!el) return;
          const cpRect = el.getBoundingClientRect();
          const cpCenterPageY = window.scrollY + cpRect.top + cpRect.height / 2;
          nextActiveMap[index] = cpCenterPageY <= centerPageY;
        });
        setActiveMap(nextActiveMap);
      });
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-10 w-full">
      {/* Static track */}
      <div className="pointer-events-none absolute left-[1.25rem] top-0 h-full w-px bg-navy/20 md:left-1/2 md:-translate-x-1/2" />

      {/* Progress fill tied to viewport center */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[1.25rem] top-0 z-10 w-[2px] rounded md:left-1/2 md:-translate-x-1/2"
        style={{
          height: `${progressPx}px`,
          background:
            "linear-gradient(to bottom, rgba(197,160,89,1), rgba(197,160,89,0))",
        }}
      />

      <div className="space-y-10 md:space-y-16">
        {itemIndices.map((index) => {
          const step = items[index];
          const isActive = !!activeMap[index];
          const isReversed = step.reverse;
          return (
            <div
              key={`${step.title}-${index}`}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-4 gap-y-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-16"
            >
              {/* Title - Left by default, Right when reversed */}
              <div className={`col-start-2 text-left md:pl-0 md:row-start-1 ${
                isReversed 
                  ? "md:col-start-3 md:text-left" 
                  : "md:col-start-1 md:text-right"
              }`}>
                <h4
                  className={`text-lg md:text-xl font-serif font-semibold uppercase tracking-[0.18em] ${
                    isActive ? "text-gold" : "text-navy-light"
                  }`}
                >
                  {step.title}
                </h4>
                {step.image ? (
                  <div className="mt-6">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={1200}
                      height={900}
                      className="w-full rounded-2xl shadow-lg object-cover"
                      unoptimized
                    />
                  </div>
                ) : null}
              </div>

              {/* Center checkpoint - aligned with title */}
              <div className="col-start-1 row-span-2 flex h-full items-center justify-center md:col-start-2 md:row-start-1 md:items-start md:justify-center">
                <span
                  ref={(el) => {
                    checkpointRefs.current[index] = el;
                  }}
                  className={`relative inline-flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    isActive
                      ? "border-gold bg-cream"
                      : "border-navy/40 bg-cream-dark"
                  }`}
                >
                  <span
                    className={`block h-2 w-2 rounded-full ${
                      isActive ? "bg-gold" : "bg-navy/40"
                    }`}
                  />
                </span>
              </div>

              {/* Content - Right by default, Left when reversed */}
              <div className={`col-start-2 row-start-2 md:row-start-1 ${
                isReversed 
                  ? "md:col-start-1 md:text-right" 
                  : "md:col-start-3"
              }`}>
                <div className="rounded-3xl border border-navy/20 bg-cream p-6 shadow-lg backdrop-blur">
                  {step.tag ? (
                    <div
                      className={`text-sm md:text-base uppercase tracking-[0.2em] ${
                        isActive ? "text-gold" : "text-navy-light"
                      }`}
                    >
                      {step.tag}
                    </div>
                  ) : null}
                  {step.headline ? (
                    <h5 className="mt-2 text-lg md:text-xl font-serif font-semibold text-navy">
                      {step.headline}
                    </h5>
                  ) : null}
                  {step.body ? (
                    <p className="mt-3 text-base md:text-lg text-navy-light leading-relaxed">{step.body}</p>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

