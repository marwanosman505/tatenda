// components/ModalHost.js
import React, { useEffect } from "react";
import { useModal } from "../context/ModalContext";

export default function ModalHost() {
  const { modal, closeModal } = useModal();

  useEffect(() => {
    if (!modal.open) return;

    const onKeyDown = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modal.open, closeModal]);

  if (!modal.open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={modal.title}
      onMouseDown={closeModal}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <h3 className="text-xl sm:text-2xl font-semibold">{modal.title}</h3>
          <button
            onClick={closeModal}
            className="px-3 py-2 rounded-lg hover:bg-gray-100"
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto text-[18px] leading-relaxed text-gray-800">
          {modal.body}
        </div>

        <div className="p-4 sm:p-6 border-t flex justify-end">
          <button
            onClick={closeModal}
            className="px-5 py-2 rounded-lg bg-gray-900 text-white hover:opacity-90"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
