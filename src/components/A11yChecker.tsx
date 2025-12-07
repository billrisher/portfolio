import React, { useEffect } from "react";

/**
 * A11yChecker - Development-only accessibility checker using axe-core
 * This component runs automated accessibility tests in development mode
 * and logs violations to the console.
 */
const A11yChecker = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@axe-core/react").then((axe) => {
        axe.default(React, ReactDOM, 1000, {});
      });
    }
  }, []);

  return <>{children}</>;
};

// Import ReactDOM at the top level to avoid issues
import ReactDOM from "react-dom";

export default A11yChecker;
