import React from 'react';
import DashboardCard from '@/app/components/dashboard-card';
import StatCard, { StatCardType } from '@/app/components/stat-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        <div key={''} className="col-span-3">
          <StatCard type={StatCardType.Dark} label={''} counter={0} />
        </div>
      </div>
    </DashboardCard>
  );
}
