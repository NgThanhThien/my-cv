import BasicLayout from '@/layout/basic';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
  const { keyActive } = pageProps as any;
  return (
    <>
      <BasicLayout keyActive={keyActive}>
        <Component {...pageProps} />
      </BasicLayout>
    </>
  );
}
