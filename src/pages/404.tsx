import React from "react";
import { HeadFC } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>
      <pre>You just hit a route that doesn&#39;t exist... oops :^(</pre>
    </p>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => (
  <>
    <title>404 - Page Not Found | Bill Risher</title>
    <meta name="description" content="Page not found" />
  </>
);
