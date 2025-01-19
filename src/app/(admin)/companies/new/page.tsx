'use client';

import CompanyForm from '@/app/components/company-form';
import React from 'react';

export interface pageProps {
  children: React.ReactNode;
}

export default function page({ children }: pageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
