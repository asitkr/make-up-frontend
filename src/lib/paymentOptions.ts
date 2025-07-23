import UPI from "../assets/order/upi.svg";
import Cash from "../assets/order/moneys.svg";

import { CreditCardIcon } from "@heroicons/react/24/outline";

export const PaymentTitle = "Payment Method:";

export const PaymentOptionsData = [
    {
        label: "UPI",
        image: UPI
    },
    {
        label: "Cards",
        image: CreditCardIcon
    },
    {
        label: "Cash",
        image: Cash
    },
];

export const UpiStatus = {
  NONE: "none",
  VERIFIED: "verified",
  NOT_VERIFIED: "not-verified",
} as const;

export type UpiStatus = (typeof UpiStatus)[keyof typeof UpiStatus];