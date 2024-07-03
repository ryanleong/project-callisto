'use client';
import React from 'react';
import Link from 'next/link';

const SignOutButton = () => {
  return <Link href="/auth/signout">Sign Out</Link>;
};

export default SignOutButton;
