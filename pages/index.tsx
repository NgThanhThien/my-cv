import HomePageLayout from '@/features/home';
import { KeyActive } from '@/layout/shared';
import React from 'react';

const Homepage = () => {
  return <HomePageLayout />;
};
export async function getServerSideProps() {
  return {
    props: {
      keyActive: KeyActive.homePage,
    }, // will be passed to the page component as props
  };
}
export default Homepage;
