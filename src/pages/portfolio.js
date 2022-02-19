import React, { useState } from "react";

import Head from "../components/Head";
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

  const navButtonStyle =
    "disabled:text-lightGray rounded-lg border py-1 px-2 transition duration-300 ease-in-out hover:opacity-70 disabled:cursor-not-allowed disabled:border-transparent disabled:opacity-80 disabled:hover:opacity-80";

  return (
    <>
      <Head title="Portfolio | Benaiah Barango" />
      <Layout>
        <div className="grid gap-4 ">
          <div className="flex w-full justify-between gap-5">
            <button
              className={navButtonStyle}
              onClick={handlePrevious}
              disabled={isFirst}
            >
              Previous
            </button>
            <button
              className={navButtonStyle}
              onClick={handleNext}
              disabled={isLast}
            >
              Next
            </button>
          </div>
          <div className="mt-28 grid grid-rows-1 gap-4 md:mt-20 md:grid-cols-2">
            <div className="grid place-items-start content-center gap-4">
              <h1 className="text-5xl font-bold">{currentProject.title}</h1>
              <p className="text-gray dark:text-lightGray">
                {currentProject.subTitle}
              </p>

              {currentProject.description}

              <Button href={currentProject.url} target="_blank">
                Visit site
              </Button>
            </div>
            <div className="order-first mt-[-70px] flex items-center justify-center md:order-2 md:p-10">
              {currentProject.image}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PortfolioPage;
