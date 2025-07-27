import React, { createContext, useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { AuthContextType, User } from "../types/user.ts";
import { getAuthUser, login, logout, signup } from "../apis/api.ts";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = useQueryClient();

    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["authUser"],
        queryFn: getAuthUser,
        retry: false,
    });

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(data ?? null);
    }, [data]);

    useEffect(() => {
        if (isError && error instanceof Error) {
            console.error("Auth error:", error.message);
        }
    }, [isError, error]);

    const signupMutation = useMutation({
        mutationFn: signup,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
        },
    });

    const loginMutation = useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
        },
    });

    const logoutMutation = useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.setQueryData(["authUser"], null);
            setUser(null);
        },
    });

    const contextValue = useMemo<AuthContextType>(
        () => ({
            user,
            isAuthenticated: !!user,
            isLoading,
            login: async (credentials) => {
                await loginMutation.mutateAsync(credentials);
            },
            signup: async (data) => {
                await signupMutation.mutateAsync(data);
            },
            logout: async () => {
                await logoutMutation.mutateAsync();
            },
            refetchUser: () => {
                refetch();
            },
        }),
        [user, isLoading, loginMutation, signupMutation, logoutMutation, refetch]
    );

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
