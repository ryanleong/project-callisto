'use client';
import React, { useEffect } from 'react';
import { useClerk } from '@clerk/nextjs';

const PageRegister = () => {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut({ redirectUrl: '/' });
  }, []);

  return <></>;
};

export default PageRegister;
