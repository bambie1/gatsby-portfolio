import * as React from "react";

import Button from "../components/Button";
import Head from "../components/Head";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

const HomePage = () => {
  return (
    <>
      <Head title="Benaiah Barango | Designer and developer" />
      <Layout>
        <div className="grid min-h-[450px] grid-rows-1 gap-4 md:grid-cols-2">
          <div className="grid place-items-start content-center gap-4">
            <h1 className="text-5xl font-bold">BENAIAH BARANGO</h1>
            <p className="text-gray dark:text-lightGray">
              Designer and Front-End Developer
            </p>

            <p className="mb-7">
              Hi there! I'm a UI/UX developer and web consultant, based out of
              Ottawa, Canada.<br></br> I love to create amazing digital
              experiences for clients with tools like Javascript, Wordpress, and
              Shopify.
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
