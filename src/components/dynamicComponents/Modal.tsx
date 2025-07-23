import { useEffect } from "react";
import type { ModalProps } from "../../types/modal.ts";

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    className = "",
    parentClassName = "",
}) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${parentClassName}`}
            onClick={onClose}
        >
            <div
                className={`bg-white rounded-lg p-6 w-full max-w-md relative ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
