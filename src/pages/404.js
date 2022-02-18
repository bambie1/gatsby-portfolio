import * as React from "react";

import Layout from "../components/Layout";
import Button from "../components/Button";
import Head from "../components/Head";

const NotFoundPage = () => {
  return (
    <>
      <Head title="404 | Page not found" />
      <Layout>
        <div className="grid grid-rows-1 justify-items-start gap-4">
          <h1 className="text-xl">404</h1>
          <h2 className="text-3xl">Page not found</h2>
          <p className="mb-10">
            Sorry{" "}
            <span role="img" aria-label="Pensive emoji">
              😔
            </span>{" "}
            we couldn’t find what you were looking for.
          </p>
          <Button href="/">Go home</Button>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
