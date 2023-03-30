import React, { ReactNode } from 'react';

type BasicLayoutProps = {
  children: ReactNode;
};

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return <main>{children}</main>;
};

export default BasicLayout;
