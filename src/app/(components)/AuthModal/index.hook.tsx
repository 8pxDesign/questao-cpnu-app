"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalContextType = {
  isOpen: boolean;
  openModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ isOpen, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useAuthModal must be used within ModalProvider");
  return context;
};
