import StatusLabel, { Status } from './components/StatusLabel';
import { headers } from 'next/headers';

export default function Home() {
  console.log(headers());
  return (
    <main>
      <h1 className="text-xl text-red-500">
        Home page {new Date().toTimeString()}
      </h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <StatusLabel status={Status.Suspended} disabled={true}>
        Disabled
      </StatusLabel>
    </main>
  );
}
