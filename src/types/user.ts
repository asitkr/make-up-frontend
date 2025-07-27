export interface LoginCredentials {
    email_phone: string;
    password: string;
}

export interface SignupData {
    fullName: string;
    email_phone: string;
    password: string;
}

export interface User {
    _id: string;
    fullName: string;
    email_phone?: string;
    password?: string;
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginCredentials) => Promise<void>;
    signup: (data: SignupData) => Promise<void>;
    logout: () => Promise<void>;
    refetchUser: () => void;
}
