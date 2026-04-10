'use client';
import { apiService } from "@/services/apiService";
import { useCallback } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

interface LoginButtonProps {
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {
  const handleLogin = useCallback(async () => {
    try {
      const res = await apiService.loginService();
      window.open(res, "_self");
    } catch (err) {
      console.error("Login failed", err);
    }
  }, []);

  return (
    <PrimaryButton onClick={handleLogin}>{children}</PrimaryButton>
  );
};

export default LoginButton;
