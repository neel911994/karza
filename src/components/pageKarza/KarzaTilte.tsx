import PrimaryButton from '@/components/shared/button/PrimaryButton/PrimaryButton';

export default function KarzaTitle() {
    return (
        <div className="flex justify-between w-full h-fit">
            <h1 className="text-2xl font-bold">Karza</h1>
            <PrimaryButton className="ml-4" modalKey="searchUser">Search User</PrimaryButton>
        </div>
    );
}