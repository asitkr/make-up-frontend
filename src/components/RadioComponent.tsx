import { lazy } from "react";
import { type Control, type FieldErrors, type UseFormRegister } from "react-hook-form";

import type { Option, PaymentFormValues } from "../types/payment.ts";

const CardForm = lazy(() => import("./order/CardForm"));
const UPIForm = lazy(() => import("./order/UPIForm"));

interface RadioComponentProps {
    PaymentTitle: string;
    PaymentOptionsData: Option[];
    register: UseFormRegister<PaymentFormValues>;
    errors: FieldErrors<PaymentFormValues>;
    selectedMethod: string;
    control: Control<PaymentFormValues>;
}

const RadioComponent: React.FC<RadioComponentProps> = ({
    PaymentTitle,
    PaymentOptionsData,
    register,
    errors,
    selectedMethod,
    control
}) => {

    return (
        <div className="w-full py-4 lg:py-6">
            <p className="text-sm leading-6 font-semibold">{PaymentTitle}</p>

            <div className="w-full pt-[18px] flex items-center justify-between">
                {
                    PaymentOptionsData && PaymentOptionsData?.map((opt) => {
                        const IconComponent = opt.image;
                        const isImage = typeof IconComponent === "string";

                        return (
                            <label
                                key={opt.label}
                                htmlFor={opt.label}
                                className="flex items-center gap-2"
                            >
                                <input
                                    {...register("method", { required: "Please select a method" })}
                                    type="radio"
                                    value={opt.label}
                                    id={opt.label}
                                    className={`w-6 h-6 cursor-pointer ${selectedMethod === opt.label && "accent-radioSelected"}`}
                                />

                                <div className="flex items-center justify-center">
                                    {isImage ? (
                                        <img
                                            src={IconComponent as string}
                                            alt={opt.label}
                                            className={
                                                opt.label === "UPI"
                                                    ? "w-12"
                                                    : "w-6 h-6 object-contain"
                                            }
                                        />
                                    ) : (
                                        <IconComponent className="w-6 h-6" />
                                    )}
                                </div>

                                <span className="text-sm font-medium">{opt.label}</span>
                            </label>
                        )
                    })
                }
            </div>

            <div className="w-full pt-6 lg:pt-[75px]">
                {selectedMethod === "Cards" && (
                    <CardForm register={register} />
                )}

                {selectedMethod === "UPI" && (
                    <UPIForm register={register} errors={errors} control={control} />
                )}


                {selectedMethod === "Cash" && (
                    <p className="text-sm text-gray600">
                        You have selected cash. Please keep the amount ready at the time of service.
                    </p>
                )}
            </div>
        </div>
    )
}

export default RadioComponent;