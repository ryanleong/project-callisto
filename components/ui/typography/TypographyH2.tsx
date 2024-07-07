import React, { FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TypographyH2: FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
    >
      {children}
    </h2>
  );
};

export default TypographyH2;
