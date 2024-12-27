import React from 'react';
import s from './StatusLabel.module.css';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return (
    <div>
      <span
        className={`inline-flex py-1 px-[14px] text-sm font-medium items-center gap-2 rounded-[28px] ${
          (status === Status.Active && 'text-green-700 bg-green-100') ||
          (status === Status.NotActive && 'text-red-700 bg-red-100') ||
          (status === Status.Pending && 'text-orange-700 bg-orange-100') ||
          (status === Status.Suspended && 'text-blue-700 bg-blue-100')
        }`}
      >
        <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>
        {children}
      </span>
    </div>
  );
}
