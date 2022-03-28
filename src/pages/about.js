import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import TextLink from "../components/TextLink";
import SocialLinks from "../components/SocialLinks";
import Head from "../components/Head";

const AboutPage = () => {
  return (
    <>
      <Head title="About Me | Benaiah Barango" />
      <Layout>
        <div className="grid grid-rows-1 gap-4 md:grid-cols-2">
          <div className="grid content-center gap-4">
            <h1 className="text-5xl font-bold">WHO AM I?</h1>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Who are we all, really..?
            </p>

            <p>
              I'm Benaiah, a UI/UX developer and web consultant, based out of
              Ottawa, Canada. I love to create amazing digital experiences for
              clients with different tools at my disposal.
            </p>

            <p>
              I work at{" "}
              <TextLink href="https://fullscript.com/">Fullscript</TextLink> as
              a Javascript Engineer on the API Integrations team. My focus is
              building out features/tools that help existing and new partners
              easily integrate Fullscript into their practice.<br></br> We're
              always{" "}
              <TextLink href="https://fullscript.com/careers#jobs">
                hiring
              </TextLink>
              . So, reach out if you're interested
            </p>

            <p className="md:mb-7">
              My other creative outlet is music... specifically the keyboard.
              There's just something about playing a tune you love on the
              keyboard, and putting your twist on it. A close-second is playing
              table-tennis. <i>Slicing... smashing... spinning</i>.
            </p>

            <SocialLinks row />
          </div>

          <div className="mask-image order-first mb-10 flex h-[200px] items-start justify-center self-center justify-self-center overflow-hidden rounded-[56px]  md:order-2 md:mb-0 md:h-auto md:items-center">
            <StaticImage
              src="../images/profile.jpg"
              alt="Profile picture"
              placeholder="blurred"
              width={300}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
