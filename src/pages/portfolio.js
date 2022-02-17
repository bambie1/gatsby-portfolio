import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { projects } from "../data/projects";

const PortfolioPage = () => {
  const [page, setPage] = useState(0);

  const currentProject = projects[page];
  const isFirst = page === 0;
  const isLast = page === projects.length - 1;

  const handleNext = () => setPage(page + 1);

  const handlePrevious = () => setPage(page - 1);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | Benaiah Barango</title>
      </Helmet>
      <Layout>
        <div className="grid gap-4 ">
          <div className="flex w-full justify-between gap-5 order-last md:order-1">
            <button onClick={handlePrevious} disabled={isFirst}>
              Previous
            </button>
            <button onClick={handleNext} disabled={isLast}>
              Next
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 grid-rows-1">
            <div className="grid gap-4 content-center place-items-start">
              <h1 className="text-5xl font-bold">{currentProject.title}</h1>
              <p className="text-gray">{currentProject.subTitle}</p>

              {currentProject.description}

              <Button href={currentProject.url} target="_blank">
                Visit site
              </Button>
            </div>
            <div className="flex items-center justify-center mt-[-70px] md:p-10 order-first md:order-2">
              {currentProject.image}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PortfolioPage;
