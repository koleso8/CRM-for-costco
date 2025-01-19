import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';
import React from 'react';

export interface PageProps {}

export default async function Page({}: PageProps) {
  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        <tr key={1}>
          <SummaryTableCell>{''}</SummaryTableCell>
          <SummaryTableCell align="center">{''}</SummaryTableCell>
          <SummaryTableCell align="center">{''}</SummaryTableCell>
        </tr>
      </SummaryTable>
    </DashboardCard>
  );
}
