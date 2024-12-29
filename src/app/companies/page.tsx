import React from 'react';
import Header from '../components/CompanyHeader';
import Toolbar from '../components/Toolbar';
import SearchInput from '../components/SearchInput';
import AddCompanyButton from '../components/AddCompanyButton';
import CompanyTable from '../components/CompanyTable';
import CompanyRow from '../components/CompanyRow';
import { Status } from '../components/StatusLabel';

export interface PageProps {
  children: React.ReactNode;
}

export default function page({ children }: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={'1'}
          category={'Product'}
          company={'CostCo'}
          status={Status.Pending}
          promotion={true}
          country="Ukraine"
          joinedDate="05.12.2024"
        />
      </CompanyTable>
    </>
  );
}
