import AddCompanyButton from './components/AddCompanyButton';
import ClientComponent from './components/ClientComponent';
import ServerComponent from './components/ServerComponent';
import ServerComponentCopy from './components/ServerComponentCopy';
import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-red-500">Home page</h1>
      <AddCompanyButton />
      <ServerComponent />

      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </main>
  );
}
