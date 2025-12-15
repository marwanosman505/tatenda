import React, { useEffect, useMemo, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import SparkMusicAudio from "./SparkMusicAudio";
import { sparkData_v2 } from "../sparkData_v2";

function Gallery({ images, className = "" }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    images.forEach((img) => {
      const im = new Image();
      im.src = img.src;
    });
  }, [images]);

  const prev = () => setIdx((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setIdx((p) => (p === images.length - 1 ? 0 : p + 1));
  const current = images[idx];

  return (
    <div className={`relative w-full overflow-hidden rrounded-2xl shadow-sm ${className}`}>
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
        <img
          src={current?.src}
          alt={current?.alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {images.length > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white/95 text-4xl hover:scale-110 transition-transform"
              onClick={prev}
              aria-label="Previous image"
              type="button"
            >
              <FaArrowCircleLeft />
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white/95 text-4xl hover:scale-110 transition-transform"
              onClick={next}
              aria-label="Next image"
              type="button"
            >
              <FaArrowCircleRight />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-10 rrounded-full bg-black/45 px-3 py-1 text-xs text-white">
            {idx + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
}

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="relative w-full max-w-3xl bg-white rrounded-2xl shadow-2xl overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <h3 className="text-lg sm:text-2xl font-semibold leading-tight">{title}</h3>
          <button
            onClick={onClose}
            className="h-10 w-10 grid place-items-center rrounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/20"
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto text-[16px] sm:text-[18px] leading-relaxed text-gray-800">
          {children}
        </div>

        <div className="p-4 sm:p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rrounded-xl text-[24px] bg-[#F7AF5D] text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-black/20"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, images, intro, onLearnMore }) {
  return (
    <article className="bg-white rrounded-2xl shadow-xl overflow-hidden">
      <div className="p-4 sm:p-6 h-full flex flex-col">
        <h3 className="italic text-[24px] sm:text-[30px] tracking-tight mb-4">
          {title}
        </h3>

        <div className="relative">
          <Gallery images={images} />
        </div>

        <div className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-gray-800 flex-1">
          {intro}
        </div>

        <div className="mt-5">
          <button
            onClick={onLearnMore}
            className="w-full rrounded-xl bg-[#F7AF5D] px-5 py-3 text-white font-semibold
                       shadow-sm hover:brightness-95 active:brightness-90 transition
                       focus:outline-none focus:ring-2 focus:ring-black/20 text-[24px] sm:text-[26px]"
            type="button"
          >
            Learn more
          </button>
        </div>
      </div>
    </article>
  );
}

export default function SparkMusic(props) {
  const sparkAudioProps = useMemo(
    () => ({
      onPlayRequest: props.onPlayRequest,
      trackId: props.trackId,
      isActive: props.isActive,
    }),
    [props.onPlayRequest, props.trackId, props.isActive]
  );

  const spark = sparkData_v2.find((x) => x.id === "spark");
  const smallWonders = sparkData_v2.find((x) => x.id === "small-wonders");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <section className="w-full bg-[#F9D593] text-gray-900 shadow-2xl">
      {/* Unified header with centered audio */}
      <header className="px-4 sm:px-8 pt-8 pb-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-700 mb-2">
            Early years programme
          </p>
          <h1 className="text-[34px] sm:text-[56px] leading-[1.05] font-extrabold tracking-tight">
            EARLY YEARS (0–4 year olds)
          </h1>
          <p className="mt-3 text-sm sm:text-[16px] text-gray-800 max-w-3xl mx-auto">
            Creative music, sensory play and storytelling experiences for young children and their
            families — including <span className="font-semibold italic">Spark Music Champions</span> and{" "}
            <span className="font-semibold italic">Small Wonders</span>.
          </p>
        </div>

        {/* Audio, aligned with header content */}
        <div className="max-w-xl mx-auto mt-4">
          {/* <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 mb-2 text-left sm:text-center">
            Listen · Audio story created through this project
          </p> */}
          <SparkMusicAudio {...sparkAudioProps} />
        </div>
      </header>

      {/* Two main examples (Spark + Small Wonders) */}
      <div className="px-4 sm:px-8 pb-10 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <Panel
            title={spark?.title}
            images={spark?.images || []}
            intro={spark?.intro}
            onLearnMore={() => openModal(spark.title, spark.full)}
          />

          <Panel
            title={smallWonders?.title}
            images={smallWonders?.images || []}
            intro={smallWonders?.intro}
            onLearnMore={() => openModal(smallWonders.title, smallWonders.full)}
          />
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle}>
        {modalContent}
      </Modal>
    </section>
  );
}
