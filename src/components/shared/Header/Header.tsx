import UserOption from "./UserOption";

export default function Header() {
    return (
        <header className="bg-[#343a40] shadow">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold text-white">GHF | Vision360</h1>
               <UserOption />
            </div>
        </header>
    );
}