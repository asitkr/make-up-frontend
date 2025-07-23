import { lazy, useState } from "react";
import { useWatch, type FieldErrors, type UseFormRegister, type UseFormReturn } from "react-hook-form";

import type { PaymentFormValues } from "../../types/payment.ts";
import { UpiStatus, type UpiStatus as UpiStatusType } from "../../lib/paymentOptions.ts";

const Button = lazy(() => import("../dynamicComponents/Button.tsx"));
const InputField = lazy(() => import("../dynamicComponents/InputField.tsx"));

interface UPIFormProps {
    register: UseFormRegister<PaymentFormValues>;
    errors: FieldErrors<PaymentFormValues>;
    control: UseFormReturn<PaymentFormValues>["control"];
}

const UPIForm: React.FC<UPIFormProps> = ({ register, errors, control }) => {
    const upiId = useWatch({ control, name: "upiId" });
    const [upiStatus, setUpiStatus] = useState<UpiStatusType>(UpiStatus?.NONE);

    const handleVerify = () => {
    if (!upiId) {
      setUpiStatus(UpiStatus.NONE);
      return;
    }

    const isValid = upiId === "99998888777@upi";
    setUpiStatus(isValid ? UpiStatus.VERIFIED : UpiStatus.NOT_VERIFIED);
  };

  const getButtonLabel = () => ({
    [UpiStatus.VERIFIED]: "Verified",
    [UpiStatus.NOT_VERIFIED]: "Not Verified",
    [UpiStatus.NONE]: "Verify",
  }[upiStatus]);

  const getBorderStyle = () => ({
    [UpiStatus.VERIFIED]: "border border-green-500 text-green-700",
    [UpiStatus.NOT_VERIFIED]: "border border-red-500 text-red-700",
    [UpiStatus.NONE]: "border border-gray-300",
  }[upiStatus]);

    return (
        <div className="w-full">
            <div className="w-full flex gap-4">
                <InputField
                    label="Enter UPI ID"
                    type="text"
                    placeholder="example@upi"
                    className={`border p-2 rounded w-full ${getBorderStyle()}`}
                    register={register("upiId", {
                        required: "UPI ID is required",
                        pattern: {
                            value: /^[\w.-]+@[\w.-]+$/,
                            message: "Invalid UPI ID",
                        },
                    })}
                />
                <div className="pt-8 flex-shrink-0">
                    <Button
                        name={getButtonLabel()}
                        className="bg-gray600 px-20 py-2 rounded-lg text-base"
                        onClick={handleVerify}
                    />
                </div>
            </div>

            <div className="w-full pt-4">
                <InputField
                    type="checkbox"
                    label="Save details for future"
                    parentClassName="flex-row items-center gap-2"
                    labelClassName="text-sm font-normal text-black"
                    className={`w-4 h-4 checked:accent-radioSelected`}
                />
            </div>
            {errors.upiId && (
                <p className="text-red-500 text-sm mt-1">{errors.upiId.message?.toString()}</p>
            )}
        </div>
    )
}

export default UPIForm;