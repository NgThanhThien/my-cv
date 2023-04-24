import WorkPageLayout from '@/features/work';
import { KeyActive } from '@/layout/shared';
import { GetServerSidePropsContext } from 'next';
const WorkPage = () => {
  return <WorkPageLayout />;
};
export async function getServerSideProps() {
  return {
    props: {
      keyActive: KeyActive.workPage,
    }, // will be passed to the page component as props
  };
}
export default WorkPage;
