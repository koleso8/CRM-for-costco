import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <h2>Company {params.id}</h2>
    </>
  );
}
