'use client';
import { UserIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";

export default function UserOption() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative" ref={ref}>
            <div
                className="flex items-center gap-2 text-white cursor-pointer"
                onClick={() => setOpen((v) => !v)}
            >
                <UserIcon className="w-6 h-6" />
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.584l3.71-3.354a.75.75 0 1 1 1.02 1.1l-4.25 3.846a.75.75 0 0 1-1.02 0l-4.25-3.846a.75.75 0 0 1 .02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
                    <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                            // TODO: Add logout logic here
                            setOpen(false);
                        }}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}