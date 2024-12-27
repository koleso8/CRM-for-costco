import StatusLabel, { Status } from './components/StatusLabel';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-red-500">Home page</h1>
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
