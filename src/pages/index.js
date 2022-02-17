import * as React from "react";
import { Helmet } from "react-helmet";

import Button from "../components/Button";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Benaiah Barango | Designer and Developer</title>
      </Helmet>
      <Layout>
        <div className="grid gap-4 md:grid-cols-2 grid-rows-1 min-h-[450px]">
          <div className="grid gap-4 place-items-start content-center">
            <h1 className="text-5xl font-bold">BENAIAH BARANGO</h1>
            <p className="text-gray">Designer and Front-End Developer</p>

            <p className="mb-7">
              Hi there! I'm a UI/UX developer and web consultant, based out of
              Ottawa, Canada.<br></br> I love to create amazing digital
              experiences for clients with different tools at my disposal.
            </p>
            <Button href="/contact">Let's work together</Button>
          </div>

          <SocialLinks />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
