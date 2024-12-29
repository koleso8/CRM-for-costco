'use client';

import React from 'react';
import ServerComponentCopy from './ServerComponentCopy';

export interface ClientComponentProps {
  children?: React.ReactNode;
}

export default function ClientComponent({ children }: ClientComponentProps) {
  console.log('Client Component');

  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
