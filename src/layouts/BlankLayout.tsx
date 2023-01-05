import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BlankLayout = ({ children }: Props) => {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>{children}</div>
  );
};

export default BlankLayout;
