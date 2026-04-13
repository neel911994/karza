import KarzaTitle from '@/components/pageKarza/KarzaTilte';
import MenuList from '@/components/shared/MenuList/MenuList';
import React from 'react';

export default function KarzaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
        <KarzaTitle />
        <MenuList />
        {children}
    </div>
  );
}