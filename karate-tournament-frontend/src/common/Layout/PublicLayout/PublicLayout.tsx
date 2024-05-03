import { ReactNode } from 'react';
import Footer from 'src/common/Footer/Footer';
import PublicNavigation from 'src/common/PublicNavigation/PublicNavigation';

type Props = {
  children: ReactNode;
};

const PublicLayout = ({ children }: Props) => {
  return (
    <>
      <PublicNavigation />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;
