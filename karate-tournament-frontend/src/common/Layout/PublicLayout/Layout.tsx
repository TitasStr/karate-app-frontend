import { ReactNode } from 'react';
import PublicLayout from './PublicLayout';

export type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <PublicLayout>{children}</PublicLayout>;
};

export default Layout;
