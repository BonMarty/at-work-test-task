import React from 'react';
import { Header } from '../../header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1 bg-05 p-4">
        <div className="max-w-[1160px] mx-auto">{children}</div>
      </main>
    </div>
  );
};
