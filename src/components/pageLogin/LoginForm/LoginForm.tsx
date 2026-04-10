'use client';
import LoginButton from "@/components/shared/button/PrimaryButton/LoginButton";
import Footer from "@/components/shared/Footer/Footer";
import { apiService } from "@/services/apiService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getTokensAndSetLocalStorage } from "@/utils/authUtils";

export default function LoginForm() {
    const router = useRouter();
    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        if (code) {
            getTokensAndSetLocalStorage(code).then(() => {
                router.replace("/dashboard");
            }).catch(() => {
                router.replace("/login");
            });
        } else {
            // Optionally clear auth state here
            router.replace("/login");
        }
    }, [router]);
    return (
        <div className="flex flex-col min-h-screen">
            <div
                className="flex-1 flex bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/login-bg.png)' }}
            >
                <div className="flex flex-col items-start justify-center w-max mx-5">
                    <h1 className="text-4xl font-bold">Vision 360</h1>
                    <LoginButton>Login</LoginButton>
                </div>
            </div>
            <Footer />
        </div>
    );
}