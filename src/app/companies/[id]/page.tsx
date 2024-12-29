import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <>
      <h1>Company {String(id)}</h1>
    </>
  );
}
