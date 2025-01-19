import React from 'react';

export interface loadingProps {
  children: React.ReactNode;
}

export default function loading({ children }: loadingProps) {
  return (
    <div className="flex items-center justify-center bg-slate-400 h-full">
      Loading ...
    </div>
  );
}
