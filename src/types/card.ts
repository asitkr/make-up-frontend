import type { UseFormRegister } from "react-hook-form";
import type { PaymentFormValues } from "./payment.ts";

export interface CardProps {
  pic: string;
  text: string;
  className: string;
  onClick: () => void;
}

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  areas?: string;
  onBook?: () => void;
  id?: string | number;
}

export interface ContentCardProps {
  title: string;
  description: string;
  titleStyle?: string;
  titleContentStyle?: string;
  contentStyle?: string;
  divStyle?: string
}

export interface HorizontalCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  buttonText: string;
  id: string | number;
}

export interface CartItem {
  category: string;
  service: string;
  image: string;
  price: number;
  quantity: number;
  subTotal: number;
}

export interface OrderComponentProps {
  cartItems: CartItem[];
}

export interface CardFormProps {
  register: UseFormRegister<PaymentFormValues>;
}