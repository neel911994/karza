"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";

const menuItems = [
    { href: "/karza/pan", label: "PAN" },
    { href: "/karza/dl", label: "DL" },
    { href: "/karza/passport", label: "Passport" },
    { href: "/karza/employment", label: "Employment" },
    { href: "/karza/aml", label: "AML" },
    { href: "/karza/shops", label: "Shops" },
    { href: "/karza/ca-membership", label: "CA" },
    { href: "/karza/icsi-membership", label: "ICSI" },
    { href: "/karza/icwai-membership", label: "ICWAI" },
    { href: "/karza/mci-membership", label: "MCI" },
    { href: "/karza/itr", label: "ITR" },
    { href: "/karza/mca", label: "MCA Master Data Fetch" },
    { href: "/karza/mca-llpin", label: "MCA Master Data Fetch LLPIN" },
    { href: "/karza/mca-fcrn", label: "MCA Master Data Fetch FCRN" },
    { href: "/karza/mca-fllpin", label: "MCA Master Data Fetch FLLPIN" },
    { href: "/karza/form-16", label: "Form 16" },
    { href: "/karza/gstin", label: "GSTIN" },
    { href: "/karza/gsp-gstin-authentication", label: "GSP GSTIN Authentication" },
    { href: "/karza/gsp-gst-return-filing", label: "GSP GST Return Filing" },
];

export default function MenuList() {
    const pathname = usePathname();
    const { startLoading } = useNavigation();

    return (
        <div className="bg-[#5a6066] text-white p-0 mt-4 w-full">
            <div className="overflow-x-auto w-full">
                <ul className="inline-flex space-x-4 min-w-max px-4 py-2" style={{ whiteSpace: 'nowrap' }}>
                    {menuItems.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={startLoading}
                                className={`px-4 py-2 rounded ${pathname === href ? "bg-white text-[#5a6066] font-semibold" : "hover:bg-[#6e757c]"}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}