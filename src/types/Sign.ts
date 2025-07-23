export interface SignUpInput {
    fullName: string;
    email: string;
    email_phone: string;
    password: string;
    confirmPassword: string;
}

export interface SignInInput {
    email_phone: string;
    password: string;
}