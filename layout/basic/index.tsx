import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { ReactNode } from 'react';

type BasicLayoutProps = {
  children: ReactNode;
  keyActive: String;
};

const BasicLayout = ({ children, keyActive }: BasicLayoutProps) => {
  return (
    <>
      <Header keyActive={keyActive} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;
