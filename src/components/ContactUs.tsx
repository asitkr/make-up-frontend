import { lazy } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

const InputField = lazy(() => import("./dynamicComponents/InputField.tsx"));
const RollingText = lazy(() => import("./RollingText.tsx"));
const Button = lazy(() => import("./dynamicComponents/Button.tsx"));

interface ContactUsInput {
    fullName: string
    email: string
    phone: string
}

const ContactUs: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactUsInput>({
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit: SubmitHandler<ContactUsInput> = (data) => {
        console.log("Submitted data:", data);
    };

    return (
        <div id="contact" className="w-full scroll-mt-14 lg:scroll-mt-20 px-0 lg:px-20 py-6 lg:py-20 bg-bgColorPrimary lg:bg-gradient-to-b from-white to-[#fdf2f6]">
            <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 px-4 lg:px-0">
                    <p className="font-medium text-sm lg:text-xl leading-8 text-primary">connect</p>
                    <p className="pt-4 text-base lg:text-[54px] lg:leading-[72px] font-normal">Your <RollingText /> <br /> makeover is just a message away</p>
                </div>
                <div className="w-full lg:w-1/3 ml-0 lg:ml-5 px-0 pt-6 lg:pt-0">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full bg-white p-10 px-4 rounded-lg border border-borderColor shadow-lg"
                    >
                        <div className="w-full">
                            <InputField
                                label="Full Name"
                                placeholder="Your Full Name"
                                className={` border rounded-md py-3 px-2 
                                    ${errors.fullName ? "border-red-800" : "border-secondary"}`}
                                register={register("fullName", {
                                    required: "Full name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Name must be at least 3 characters",
                                    },
                                })}
                            />
                            {errors.fullName && (
                                <p className="text-red-800 text-xs mt-1">
                                    {errors.fullName.message}
                                </p>
                            )}
                        </div>

                        <div className="w-full pt-5">
                            <InputField
                                label="Email"
                                placeholder="Your Email"
                                className={`border rounded-md py-3 px-2
                                    ${errors.email ? "border-red-800" : "border-secondary"}`}
                                register={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                                type="email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="w-full pt-5">
                            <InputField
                                label="Phone Number"
                                type="number"
                                placeholder="Your Phone Number"
                                className={`border rounded-md py-3 px-2 ${errors.phone ? "border-red-800" : "border-secondary"}`}
                                register={register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[6-9]\d{9}$/,
                                        message:
                                            "Enter a valid 10-digit mobile number (starts with 6-9)",
                                    },
                                })}
                            />
                            {errors.phone && (
                                <p className="text-red-800 text-xs mt-1">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <div className="w-full pt-14">
                            <Button
                                type="submit"
                                name="Submit"
                                className="bg-primary block w-full py-3 text-center rounded text-sm leading-6"
                            />
                        </div>

                        <p className="pt-4 block lg:hidden text-secondary font-normal text-xs">By submitting this form, you consent to receiving informational, advertising, or telemarketing messages via text (SMS/MMS) and email from Makeover. You agree to our <Link to={"/terms-of-service"} className="underline">Terms of Service</Link>&nbsp;and&nbsp;<Link to={"/privacy-policy"} className="underline">Privacy Policy</Link>. We respect your privacy and do not sell your data.</p>
                    </form>

                    <p className="pt-4 hidden lg:block text-secondary font-normal text-xs">By submitting this form, you consent to receiving informational, advertising, or telemarketing messages via text (SMS/MMS) and email from Makeover. You agree to our <Link to={"/terms-of-service"} className="underline">Terms of Service</Link>&nbsp;and&nbsp;<Link to={"/privacy-policy"} className="underline">Privacy Policy</Link>. We respect your privacy and do not sell your data.</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;