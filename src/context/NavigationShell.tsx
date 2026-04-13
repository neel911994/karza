"use client";

import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import Spinner from "@/components/shared/Spinner/Spinner";
import { ReactNode } from "react";

function SpinnerGate() {
    const { isLoading } = useNavigation();
    return isLoading ? <Spinner /> : null;
}

export default function NavigationShell({ children }: { children: ReactNode }) {
    return (
        <NavigationProvider>
            <SpinnerGate />
            {children}
        </NavigationProvider>
    );
}
