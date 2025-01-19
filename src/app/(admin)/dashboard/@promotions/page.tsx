import React from 'react';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        <tr key={''}>
          <SummaryTableCell>{''}</SummaryTableCell>
          <SummaryTableCell>{''}</SummaryTableCell>
          <SummaryTableCell align="center">{''}</SummaryTableCell>
        </tr>
      </SummaryTable>
    </DashboardCard>
  );
}
