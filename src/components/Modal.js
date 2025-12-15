import React, { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

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
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto text-[18px] leading-relaxed text-gray-800">
          {children}
        </div>

        <div className="p-4 sm:p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#F7AF5D] text-white hover:opacity-90"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
