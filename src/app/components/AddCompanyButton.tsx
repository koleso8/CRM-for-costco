import React, { useState } from 'react';
import Button from './Button';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}></Button>
    </>
  );
}
