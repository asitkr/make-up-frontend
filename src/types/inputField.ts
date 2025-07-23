import type { UseFormRegisterReturn } from "react-hook-form";

export interface InputFieldProps {
    label?: string;
    type?: string;
    placeholder?: string;
    defaultValue?: string;
    className?: string;
    register?: UseFormRegisterReturn;
    required?: boolean;
    labelClassName?: string;
    parentClassName?: string;
    maxLength?: number;
}