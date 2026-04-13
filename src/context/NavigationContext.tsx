"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

type NavContextType = { isLoading: boolean; startLoading: () => void };

const NavContext = createContext<NavContextType>({ isLoading: false, startLoading: () => {} });

export function NavigationProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);
    const prevPathname = useRef(pathname);

    useEffect(() => {
        if (prevPathname.current !== pathname) {
            setIsLoading(false);
            prevPathname.current = pathname;
        }
    }, [pathname]);

    return (
        <NavContext.Provider value={{ isLoading, startLoading: () => setIsLoading(true) }}>
            {children}
        </NavContext.Provider>
    );
}

export const useNavigation = () => useContext(NavContext);
