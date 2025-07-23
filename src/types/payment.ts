export interface PaymentFormValues {
    method: string;
    upiId?: string;
    cardName?: string;
    cardNumber?: string;
    expiry?: string;
    cvv?: string;
}

export interface Option {
    label: string;
    image: string | React.ElementType;
}
