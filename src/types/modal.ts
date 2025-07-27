import type { modalCardMap } from "../lib/modalCardMap.ts";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  parentClassName?: string;
}

interface CardDetails {
  title: string;
  key: keyof typeof modalCardMap;
}

export interface ModalCardProps {
  cardDetails: CardDetails;
  onClose: () => void;
}

export interface LogoutModalProps {
    onClick: () => void;
}