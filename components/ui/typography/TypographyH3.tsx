import React, { FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TypographyH3: FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};

export default TypographyH3;
