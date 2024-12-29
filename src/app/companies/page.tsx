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
        <CompanyRow
          id={'2'}
          category={'Product'}
          company={'Pepsi-Co'}
          status={Status.Active}
          promotion={false}
          country="USA"
          joinedDate="11.02.2023"
        />
        <CompanyRow
          id={'3'}
          category={'Commerce'}
          company={'A-Bank'}
          status={Status.Suspended}
          promotion={true}
          country="Ukraine"
          joinedDate="03.11.2024"
        />
        <CompanyRow
          id={'4'}
          category={'Market'}
          company={'Basic'}
          status={Status.NotActive}
          promotion={false}
          country="UK"
          joinedDate="01.27.2022"
        />
      </CompanyTable>
    </>
  );
}
