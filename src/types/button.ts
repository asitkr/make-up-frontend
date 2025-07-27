export interface ButtonProps {
    name?: string;
    link?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    icon?: React.ReactNode;
    disabled?: boolean;
}