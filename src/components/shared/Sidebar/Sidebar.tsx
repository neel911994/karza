"use client";

import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";

export default function Sidebar() {
    const { startLoading } = useNavigation();

    return (
        <aside className="w-64 h-screen bg-[#343a40] text-white p-4">
            <nav className="space-y-4">
                <Link href="/dashboard" onClick={startLoading} className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</Link>
                <Link href="/karza" onClick={startLoading} className="block px-4 py-2 rounded hover:bg-gray-700">Karza</Link>
            </nav>
        </aside>
    );
}