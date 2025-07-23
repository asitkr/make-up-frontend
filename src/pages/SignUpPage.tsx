import { Link } from "react-router-dom";
import React, { lazy, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

import Google from "../assets/Google.png";
import { currentYear } from "../utils.ts";
import SignUpBanner from "../assets/signin2.webp";
import type { SignUpInput } from "../types/Sign.ts";

const InputField = lazy(() => import("../components/dynamicComponents/InputField.tsx"));
const Button = lazy(() => import("../components/dynamicComponents/Button.tsx"));

const SignUpPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<SignUpInput>({
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email_phone: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleConfirmPassword = () => {
        setConfirmPassword((prev) => !prev);
    }

    const onSubmit: SubmitHandler<SignUpInput> = (data) => {
        console.log("Submitted data:", data);
    };

    return (
        <div className="w-full min-h-screen sm:h-[1000px] flex items-center justify-center bg-bgHero">
            <div className="w-full h-full flex flex-col-reverse sm:flex-row p-4 gap-8">
                <div className="w-full sm:w-[45%] px-0 sm:px-8 lg:px-[70px] py-0 sm:py-12">
                    <Link to={"/"} className="w-full font-bold font-syncopate text-[22px] leading-6 text-primary hidden sm:block">MakeOver</Link>

                    <div className="w-full pt-0 sm:pt-6">
                        <p className="w-full font-semibold text-base sm:text-[32px]">Create Your Account <span className="text-xl sm:text-4xl">👋</span></p>
                        <p className="w-full pt-3 sm:pt-7 text-xs sm:text-sm font-normal">Sign Up to book your next glam session, track appointments, and unlock sweet beauty perks. Your glow-up is just a tap away!</p>

                        <form
                            className="w-full pt-6"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="w-full">
                                <InputField
                                    label="Full Name"
                                    labelClassName="text-xs font-medium !text-labelColor"
                                    placeholder="Enter your full name"
                                    className={`border border-secondary sm:rounded-md py-3 px-2 text-xs sm:text-base rounded-xl
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

                            <div className="w-full mt-6">
                                <InputField
                                    label="Email/Mobile Number"
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

                            <div className="w-full mt-6 relative">
                                <InputField
                                    label="Confirm Password"
                                    type={confirmPassword ? "text" : "password"}
                                    labelClassName="text-xs font-medium !text-labelColor"
                                    placeholder="At least 8 characters"
                                    className={`border border-secondary sm:rounded-md py-3 px-2 text-xs sm:text-base rounded-xl 
                                        ${errors.email_phone ? "border-red-800" : "border-secondary"}`}
                                    register={register("confirmPassword", {
                                        required: "Please confirm password",
                                        validate: (value) =>
                                            value === watch("password") || "Passwords do not match",
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-800 text-xs mt-1">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}

                                <span
                                    className="absolute right-3 top-14 transform -translate-y-1/2 cursor-pointer"
                                    onClick={handleConfirmPassword}
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

                            <div className="w-full mt-6">
                                <Button
                                    type="submit"
                                    name="Sign Up"
                                    className="bg-primary block w-full py-4 text-center rounded-xl text-sm sm:text-xl"
                                />
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
                                <span className="pl-4 !text-orColor font-normal text-sm">Sign Up with Google</span>
                            </Link>
                        </div>

                        <p className="w-full flex items-center justify-center font-normal text-sm sm:text-lg text-orColor pt-6">
                            Have an account? <Link to="/sign-in" className="text-primary font-medium">&nbsp;Login</Link>
                        </p>

                        <p className="pt-4 sm:pt-12 pb-6 w-full flex justify-center text-allRightsReserve text-xs sm:text-base font-normal">
                            &#169; MAKEOVER {currentYear} ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-[55%]">
                    <Link to={"/"} className="w-full font-bold font-syncopate text-sm leading-6 text-primary block sm:hidden py-6 sm:py-0">MakeOver</Link>
                    <img src={SignUpBanner} alt="SignUp Banner" className="w-full h-[200px] sm:h-[100%] rounded-3xl sm:rounded-2xl object-cover" />
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;