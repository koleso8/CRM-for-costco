import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / new companies</Header>
      <p>Some additional info</p>
    </>
  );
}
