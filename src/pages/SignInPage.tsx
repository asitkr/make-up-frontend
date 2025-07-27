import toast from "react-hot-toast";
import { lazy, useState } from "react";
import type { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

import { currentYear } from "../utils.ts";
import Google from "../assets/Google.png";
import SignInBanner from "../assets/signin1.webp";
import type { SignInInput } from "../types/Sign.ts";
import { useAuth } from "../hooks/auth.ts";

const InputField = lazy(() => import("../components/dynamicComponents/InputField.tsx"));
const Button = lazy(() => import("../components/dynamicComponents/Button.tsx"));

const SignInPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInput>({
        mode: "onChange",
        defaultValues: {
            email_phone: "",
            password: "",
        },
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const onSubmit: SubmitHandler<SignInInput> = async (data) => {
        setIsSubmitting(true);

        try {
        await login(data);

        // Dismiss existing toasts and show success
        toast.dismiss();
        toast.success("Login successful!", { duration: 3000 });

        // Redirect to home or dashboard
        navigate("/");
    } catch (err) {
        const axiosError = err as AxiosError<{ message?: string }>;
        const serverMessage = axiosError.response?.data?.message;

        toast.dismiss();
        toast.error(
            <div className="text-xs sm:text-sm text-red-500">
                {serverMessage && <div>{serverMessage}</div>}
                <div>Login failed. Please try again.</div>
            </div>,
            { duration: 3000 }
        );
    } finally {
        setIsSubmitting(false);
    }
    };

    return (
        <div className="w-full min-h-screen sm:h-[1000px] flex items-center justify-center bg-bgHero">
            <div className="w-full h-full flex flex-col-reverse sm:flex-row p-4 gap-6 sm:gap-8">
                <div className="w-full sm:w-[45%] px-0 sm:px-8 lg:px-[70px] py-0 sm:py-12">
                    <Link to={"/"} className="w-full font-bold font-syncopate text-[22px] leading-6 text-primary hidden sm:block">MakeOver</Link>

                    <div className="w-full pt-0 sm:pt-6">
                        <p className="w-full font-semibold text-base sm:text-[32px]">Welcome Back Gorgeous <span className="text-xl sm:text-4xl">👋</span></p>
                        <p className="w-full pt-3 sm:pt-7 text-xs sm:text-sm font-normal">Sign in to book your next glam session, track appointments, and unlock sweet beauty perks. Your glow-up is just a tap away!</p>

                        <form
                            className="w-full pt-6"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="w-full mt-6">
                                <InputField
                                    label="Email / Mobile Number"
                                    type="text"
                                    labelClassName="text-xs font-medium !text-labelColor"
                                    placeholder="Enter your email or 10-digit mobile number"
                                    className={`border sm:rounded-md py-3 px-2 text-xs sm:text-base rounded-xl 
                                        ${errors.email_phone ? "border-red-800" : "border-secondary"}`}
                                    register={register("email_phone", {
                                        required: "Please enter either email or mobile number",
                                        validate: (value: string) => {
                                            const trimmedValue = value.trim();
                                            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                            const phonePattern = /^[6-9]\d{9}$/;

                                            if (!trimmedValue) {
                                                return "Please enter either email or mobile number";
                                            }

                                            if (emailPattern.test(trimmedValue)) {
                                                return true; // Valid email
                                            }

                                            if (/^\d+$/.test(trimmedValue)) {
                                                return phonePattern.test(trimmedValue)
                                                    ? true
                                                    : "Enter a valid 10-digit mobile number starting with 6-9";
                                            }

                                            return "Enter a valid email or 10-digit mobile number";
                                        }
                                    })}
                                />
                                {errors.email_phone && (
                                    <p className="text-red-800 text-xs mt-1">
                                        {errors.email_phone.message}
                                    </p>
                                )}
                            </div>

                            <div className="w-full mt-6 relative">
                                <InputField
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    labelClassName="text-xs font-medium !text-labelColor"
                                    placeholder="At least 8 characters"
                                    className={`border border-secondary sm:rounded-md py-3 px-2 text-xs sm:text-base rounded-xl 
                                        ${errors.email_phone ? "border-red-800" : "border-secondary"}`}
                                    register={register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="text-red-800 text-xs mt-1">
                                        {errors.password.message}
                                    </p>
                                )}

                                <span
                                    className="absolute right-3 top-14 transform -translate-y-1/2 cursor-pointer"
                                    onClick={handleShowPassword}
                                >
                                    {
                                        showPassword ? (
                                            <EyeIcon className="w-6 h-6 text-primary" />
                                        ) : (
                                            <EyeSlashIcon className="w-6 h-6 text-primary" />
                                        )
                                    }
                                </span>
                            </div>

                            <Link to={""} className="w-full flex justify-end pt-6 text-black text-xs sm:text-base font-normal">
                                Forgot Password?
                            </Link>

                            <div className="w-full mt-6">
                                <Button 
                                    type="submit" 
                                    name="Sign in" 
                                    disabled={isSubmitting}
                                    className="bg-primary block w-full py-4 text-center rounded-xl text-sm sm:text-xl" />
                            </div>
                        </form>

                        <div className="w-full flex items-center pt-6 pb-3">
                            <div className="flex-grow border-t border-hrBgColor"></div>
                            <span className="mx-4 text-orColor text-base font-normal">Or</span>
                            <div className="flex-grow border-t border-hrBgColor"></div>
                        </div>

                        <div className="w-full flex items-center justify-center gap-4">
                            <Link to={""} className="w-full sm:w-56 bg-bgSignGoogle px-3 py-3 flex items-center justify-center sm:justify-normal border border-googleBorderColor rounded-xl">
                                <img src={Google} alt="google" />
                                <span className="pl-4 !text-orColor font-normal text-sm">Sign in with Google</span>
                            </Link>
                        </div>

                        <p className="w-full flex items-center justify-center font-normal text-sm sm:text-lg text-orColor pt-6">
                            Don't you have an account? <Link to="/sign-up" className="text-primary font-medium">&nbsp;Sign up</Link>
                        </p>

                        <p className="pt-4 sm:pt-12 pb-6 w-full flex justify-center text-allRightsReserve text-xs sm:text-base font-normal">
                            &#169; MAKEOVER {currentYear} ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-[55%]">
                    <Link to={"/"} className="w-full font-bold font-syncopate text-sm leading-6 text-primary block sm:hidden py-6 sm:py-0">MakeOver</Link>
                    <img src={SignInBanner} alt="SignUp Banner" className="w-full h-[200px] sm:h-[100%] rounded-3xl sm:rounded-2xl object-cover" />
                </div>
            </div>
        </div>
    )
}

export default SignInPage;