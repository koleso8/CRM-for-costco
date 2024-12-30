import React from 'react';
import Sidebar from '../components/Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  console.log('render');

  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
