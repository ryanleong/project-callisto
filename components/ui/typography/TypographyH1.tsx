import React, { FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TypographyH1: FC<Props> = ({ children, className }) => {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default TypographyH1;
