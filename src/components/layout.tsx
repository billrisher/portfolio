import React, { ReactNode } from 'react';

import '../assets/scss/main.scss';

interface LayoutProps {
  children: ReactNode;
  location?: {
    pathname: string;
  };
}

const Layout = ({ children, location }: LayoutProps) => {
  return <>
    {location && location.pathname === '/' ? (
      <div>
        {children}
      </div>
    ) : (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )}
  </>;
};

export default Layout;
