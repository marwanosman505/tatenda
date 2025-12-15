// context/ModalContext.js
import React, { createContext, useContext, useMemo, useState } from "react";

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    body: null,
  });

  const api = useMemo(
    () => ({
      openModal: ({ title, body }) =>
        setModal({ open: true, title, body }),
      closeModal: () =>
        setModal((m) => ({ ...m, open: false })),
      modal,
    }),
    [modal]
  );

  return (
    <ModalContext.Provider value={api}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider>");
  return ctx;
}
