import { lazy } from "react";
import { useForm } from "react-hook-form";

import type { PaymentFormValues } from "../../types/payment.ts";
import { PaymentOptionsData, PaymentTitle } from "../../lib/paymentOptions.ts";

const RadioComponent = lazy(() => import("../RadioComponent.tsx"));
const Button = lazy(() => import("../dynamicComponents/Button.tsx"));

const PaymentOptions: React.FC = () => {
    const {
        register,
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<PaymentFormValues>({
        defaultValues: {
            method: "",
            upiId: "",
            cardName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
        },
    });

    const selectedMethod = watch("method");

    const onSubmit = (data: PaymentFormValues) => {
        console.log("Submitted:", data);
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e);
    };

    return (
        <form onSubmit={handleFormSubmit} className="w-full lg:p-6">
            <p className="text-base lg:text-2xl font-bold text-textBlack200">Checkout</p>

            <div className="w-full py-4">
                <p className="font-semibold text-lg text-primary pt-4">Book Your Slot</p>

                <div className="w-full flex pt-6 gap-6">
                    <Button name="Today" className="bg-transparent !text-primary border border-primary rounded-xl p-3 text-xl" />
                    <Button name="Tomorrow" className="bg-transparent !text-primary border border-primary rounded-xl p-3 text-xl" />
                    <Button name="Day After Tomorrow" className="bg-transparent !text-primary border border-primary rounded-xl p-3 text-xl" />
                </div>
            </div>

            <RadioComponent
                PaymentTitle={PaymentTitle}
                PaymentOptionsData={PaymentOptionsData}
                register={register}
                errors={errors}
                selectedMethod={selectedMethod}
                control={control}
            />

            {
                selectedMethod && (
                    <div className="w-full py-6 lg:pt-9 lg:pb-0">
                        <Button name="Pay Now" className="w-full flex justify-center py-[10px] rounded text-base leading-6" />
                    </div>
                )
            }
        </form>
    )
}

export default PaymentOptions;