export default function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex-1 min-w-0 overflow-x-hidden p-4">
            {children}
        </main>
    );
}