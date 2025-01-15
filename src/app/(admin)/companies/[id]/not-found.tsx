import Link from 'next/link';
import React from 'react';

export interface NotFoundProps {}

export default function NotFound() {
  return (
    <div>
      <p>Page not found</p>
      <Link href="/companies">Back to companies</Link>
    </div>
  );
}
