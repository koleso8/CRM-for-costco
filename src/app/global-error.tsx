'use client';

import React from 'react';
import Button from './components/button';

export interface GlobalErrorProps {
  reset: () => void;
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <p>Somesing globally went wrong</p>
        <Button onClick={() => reset()}>Try Again</Button>
      </body>
    </html>
  );
}
