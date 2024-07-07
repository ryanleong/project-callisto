import React, { FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TypographyH4: FC<Props> = ({ children, className }) => {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
    >
      {children}
    </h4>
  );
};

export default TypographyH4;
