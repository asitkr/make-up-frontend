import { lazy } from "react";

import type { CardFormProps } from "../../types/card.ts";

const InputField = lazy(() => import("../dynamicComponents/InputField.tsx"));

const CardForm: React.FC<CardFormProps> = ({ register }) => {
    return (
        <div className="w-full">
            <div className="w-full">
                <InputField
                    label="Name On Card"
                    placeholder="Enter name on card"
                    labelClassName="text-gray200 font-semibold"
                    className="border border-gray600 rounded py-[10px] px-5"
                    register={register("cardName", { required: "Card Name required" })}
                />
            </div>

            <div className="w-full pt-6">
                <InputField
                    label="Card Number"
                    placeholder="Enter name on card"
                    labelClassName="text-gray200 font-semibold"
                    className="border border-gray600 rounded py-[10px] px-5"
                    register={register("cardNumber", {
                        required: "Card number required",
                        minLength: 16,
                        maxLength: 16,
                    })}
                />
            </div>

            <div className="w-full flex flex-col lg:flex-row items-center justify-between pt-6">
                <div className="w-full lg:w-[50%]">
                    <InputField
                        label="Expiration Date"
                        placeholder="Enter expiration date"
                        labelClassName="text-gray200 font-semibold"
                        className="border border-gray600 rounded py-[10px] px-5 font-semibold"
                        register={register("expiry", { required: "Expiry date required" })}
                    />
                </div>

                <div className="w-full lg:w-[20%] pt-6 lg:pt-0">
                    <InputField
                        label="CVV"
                        placeholder="Enter CVV"
                        labelClassName="text-gray200 font-semibold"
                        className="border border-gray600 rounded py-[10px] px-3 font-semibold"
                        register={register("cvv", {
                            required: "CVV is required",
                            minLength: {
                                value: 3,
                                message: "CVV must be 3 digits",
                            },
                            maxLength: {
                                value: 3,
                                message: "CVV must be 3 digits",
                            },
                        })}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardForm;