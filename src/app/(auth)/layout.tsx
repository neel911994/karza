import Header from '@/components/shared/Header/Header';
import Sidebar from '@/components/shared/Sidebar/Sidebar';
import PageContent from '@/components/shared/PageContent/PageContent';
import NavigationShell from '@/context/NavigationShell';
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <NavigationShell>
            <Header />
            <div className='flex'>
                <Sidebar />
                <PageContent>{children}</PageContent>
            </div>
        </NavigationShell>
    );
}
