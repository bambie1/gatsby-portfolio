import React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";
import SocialLinks from "../components/SocialLinks";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me | Benaiah Barango</title>
      </Helmet>
      <Layout>
        <div className="grid gap-4 md:grid-cols-2 grid-rows-1">
          <div className="grid gap-4 content-center">
            <h1 className="text-5xl font-bold">WHO AM I?</h1>
            <p className="text-gray mb-4">Who are we all, really..?</p>

            <p>
              Hi friend! I’m Benaiah, a UI/UX developer and web consultant,
              based out of Ottawa, Canada. I love to create amazing digital
              experiences for clients with different tools at my disposal.
            </p>

            <p>
              I work at{" "}
              <TextLink href="https://fullscript.com/">Fullscript</TextLink> as
              a Javascript Engineer on the API Integrations team. My focus is
              building out features/tools that help existing and new partners
              easily integrate Fullscript into their practice.<br></br> We're
              currently{" "}
              <TextLink href="https://fullscript.com/careers#jobs">
                hiring
              </TextLink>
              . So, reach out if you're interested
            </p>

            <p>
              My other creative outlet is music... specifically the keyboard.
              There's just something about playing a tune you love on the
              keyboard, and putting your twist on it. A close second is playing
              table-tennis. Slicing... smashing... spinning.
            </p>

            <SocialLinks row />
          </div>

          <div className="flex md:items-center justify-center order-first h-[200px] overflow-hidden items-start  justify-self-center rounded-[56px] md:h-auto md:rounded-none md:order-2 mb-10 md:mb-0">
            <StaticImage
              src="../images/profile.jpg"
              alt="Profile picture"
              placeholder="blurred"
              width={300}
              height={400}
              className="rounded-full"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
