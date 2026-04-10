import Link from "next/link";

export default function MenuList() {
    return (
        <div className="bg-[#5a6066] text-white p-0 mt-4 w-full">
            <div className="overflow-x-auto w-full">
                <ul className="inline-flex space-x-4 min-w-max px-4 py-2" style={{ whiteSpace: 'nowrap' }}>
                    <li><Link href="/karza/aml" className="px-4 py-2 rounded ">AML</Link></li>
                    <li><Link href="/karza/ca-membership" className="px-4 py-2 rounded ">CA Membership</Link></li>
                    <li><Link href="/karza/dl" className="px-4 py-2 rounded ">DL</Link></li>
                    <li><Link href="/karza/employment" className="px-4 py-2 rounded ">Employment</Link></li>
                    <li><Link href="/karza/form-16" className="px-4 py-2 rounded ">Form 16</Link></li>
                    <li><Link href="/karza/gstin" className="px-4 py-2 rounded ">GSTIN</Link></li>
                    <li><Link href="/karza/icsi-membership" className="px-4 py-2 rounded ">ICSI Membership</Link></li>
                    <li><Link href="/karza/icwai-membership" className="px-4 py-2 rounded ">ICWAI Membership</Link></li>
                    <li><Link href="/karza/itr" className="px-4 py-2 rounded ">ITR</Link></li>
                    <li><Link href="/karza/mca" className="px-4 py-2 rounded ">MCA</Link></li>
                    <li><Link href="/karza/mci-membership" className="px-4 py-2 rounded ">MCI Membership</Link></li>
                    <li><Link href="/karza/pan" className="px-4 py-2 rounded ">PAN</Link></li>
                    <li><Link href="/karza/passport" className="px-4 py-2 rounded ">Passport</Link></li>
                    <li><Link href="/karza/shops" className="px-4 py-2 rounded ">Shops</Link></li>
                </ul>
            </div>
        </div>
    );
}