import React from 'react';
import Header from '../../components/CompanyHeader';
import Toolbar from '../../components/Toolbar';
import SearchInput from '../../components/SearchInput';
import CompanyTable from '../../components/CompanyTable';
import CompanyRow from '../../components/CompanyRow';
import AddCompanyButton from '../../components/AddCompanyButton';
import { Status } from '../../components/StatusLabel';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={'1'}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
