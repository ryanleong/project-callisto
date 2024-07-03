import React from 'react';
import { SignIn } from '@clerk/nextjs';

const PageSignin = () => {
  return (
    <div>
      <h1>PageSignin</h1>
      <SignIn />
    </div>
  );
};

export default PageSignin;
