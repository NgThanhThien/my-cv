import ContactPageLayout from '@/features/contact';
import { KeyActive } from '@/layout/shared';
import { GetServerSidePropsContext } from 'next';
const WorkPage = () => {
  return <ContactPageLayout />;
};
export async function getServerSideProps() {
  return {
    props: {
      keyActive: KeyActive.contactPage,
    }, // will be passed to the page component as props
  };
}
export default WorkPage;
