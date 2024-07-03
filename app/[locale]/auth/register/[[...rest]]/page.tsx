import React from 'react';
import { SignUp } from '@clerk/nextjs';

const PageRegister = () => {
  return (
    <div>
      <div>
        <h1>PageSignin</h1>
        <SignUp signInUrl="/dashboard" />
      </div>
    </div>
  );
};

export default PageRegister;
