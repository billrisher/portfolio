import React, { ReactNode } from "react";
import A11yChecker from "./A11yChecker";

import "../assets/scss/main.scss";

interface LayoutProps {
  children: ReactNode;
  location?: {
    pathname: string;
  };
}

const Layout = ({ children, location }: LayoutProps) => {
  return (
    <A11yChecker>
      {location && location.pathname === "/" ? (
        <div>{children}</div>
      ) : (
        <div id="wrapper" className="page">
          <div>{children}</div>
        </div>
      )}
    </A11yChecker>
  );
};

export default Layout;
