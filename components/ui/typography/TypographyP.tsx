import React, { FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TypographyH1: FC<Props> = ({ children, className }) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  );
};

export default TypographyH1;
