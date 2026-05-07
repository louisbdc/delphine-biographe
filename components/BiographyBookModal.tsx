"use client";

import { forwardRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
});

type Excerpt = {
  title: string;
  paragraphs: string[];
};

type Props = {
  excerpt: Excerpt;
  onClose: () => void;
};

type PageProps = {
  children: React.ReactNode;
  variant?: "cover" | "back-cover" | "content";
  pageNumber?: number;
};

type Layout = {
  width: number;
  height: number;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
};

const MOBILE_LAYOUT: Layout = {
  width: 380,
  height: 640,
  minWidth: 280,
  maxWidth: 480,
  minHeight: 460,
  maxHeight: 760,
};

const DESKTOP_LAYOUT: Layout = {
  width: 580,
  height: 820,
  minWidth: 320,
  maxWidth: 600,
  minHeight: 480,
  maxHeight: 880,
};

function getLayout(): Layout {
  if (typeof window === "undefined") return DESKTOP_LAYOUT;
  return window.innerWidth < 768 ? MOBILE_LAYOUT : DESKTOP_LAYOUT;
}

const BookPage = forwardRef<HTMLDivElement, PageProps>(function BookPage(
  { children, variant = "content", pageNumber },
  ref,
) {
  const isCover = variant === "cover" || variant === "back-cover";
  return (
    <div
      ref={ref}
      className={
        isCover
          ? "h-full w-full bg-cream-dark border border-gold/30 flex items-center justify-center p-8 md:p-10"
          : "h-full w-full bg-cream border border-gold/20 relative overflow-hidden"
      }
    >
      {isCover ? (
        children
      ) : (
        <>
          <div className="h-full overflow-y-auto p-6 md:p-12 pb-14 md:pb-20">
            {children}
          </div>
          {pageNumber !== undefined && (
            <div className="absolute bottom-5 md:bottom-7 left-6 md:left-12 right-6 md:right-12 flex items-center gap-3">
              <span className="flex-1 h-px bg-navy-light/30"></span>
              <span className="text-xs font-serif text-navy-light/60 tabular-nums">
                {pageNumber}
              </span>
              <span className="flex-1 h-px bg-navy-light/30"></span>
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default function BiographyBookModal({ excerpt, onClose }: Props) {
  const [layout, setLayout] = useState<Layout>(() => getLayout());

  useEffect(() => {
    const onResize = () => setLayout(getLayout());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-navy/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={excerpt.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[210] h-12 w-12 rounded-full bg-white text-navy shadow-lg hover:bg-cream flex items-center justify-center transition-colors"
        aria-label="Fermer l'extrait"
      >
        <span className="material-symbols-outlined">close</span>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[min(94vw,1200px)] h-[min(86vh,880px)] flex items-center justify-center"
      >
        <HTMLFlipBook
          key={`${layout.width}-${layout.height}`}
          width={layout.width}
          height={layout.height}
          size="stretch"
          minWidth={layout.minWidth}
          maxWidth={layout.maxWidth}
          minHeight={layout.minHeight}
          maxHeight={layout.maxHeight}
          showCover={true}
          mobileScrollSupport={true}
          maxShadowOpacity={0.5}
          drawShadow={true}
          flippingTime={800}
          usePortrait={true}
          startPage={0}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          showPageCorners={true}
          disableFlipByClick={false}
          swipeDistance={30}
          className="biography-book shadow-2xl"
          style={{}}
        >
          <BookPage variant="cover">
            <div className="text-center">
              <span className="material-symbols-outlined text-gold text-5xl mb-4 block">
                menu_book
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-navy-light mb-4">
                Extrait de biographie
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-navy mb-6 leading-tight">
                {excerpt.title}
              </h2>
              <div className="w-16 h-0.5 bg-gold/50 mx-auto mb-6"></div>
              <p className="text-sm italic text-navy-light">
                Tournez la page →
              </p>
            </div>
          </BookPage>

          {excerpt.paragraphs.map((paragraph, index) => (
            <BookPage key={index} pageNumber={index + 1}>
              <p className="font-serif text-navy text-lg md:text-xl leading-[1.7]">
                {paragraph}
              </p>
            </BookPage>
          ))}

          <BookPage variant="back-cover">
            <div className="text-center">
              <span className="material-symbols-outlined text-gold text-5xl mb-4 block">
                edit_note
              </span>
              <p className="text-lg font-serif italic text-navy mb-6">
                Fin de l&apos;extrait.
              </p>
              <div className="w-12 h-0.5 bg-gold/50 mx-auto mb-6"></div>
              <p className="text-sm text-navy-light leading-relaxed">
                Chaque biographie est unique,
                <br />
                comme les vies qu&apos;elles racontent.
              </p>
            </div>
          </BookPage>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
