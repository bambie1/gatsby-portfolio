import * as React from "react";
import { Helmet } from "react-helmet";

import Button from "../components/Button";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

const inputStyle =
  "focus:ring-4 focus:ring-gray focus:outline-none appearance-none w-full text-sm leading-6 text-black-900 placeholder-gray rounded-md py-2 pl-4 ring-1 ring-gray shadow-sm";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Me | Benaiah Barango</title>
      </Helmet>
      <Layout>
        <div className="grid gap-4 md:grid-cols-2 grid-rows-1 min-h-[450px]">
          <div className="grid gap-4 place-items-start content-center">
            <h1 className="text-5xl font-bold">CONTACT ME</h1>
            <p className="text-gray">Designer and Front-End Developer</p>

            <form className="grid gap-4 w-full place-items-start max-w-md mt-5">
              <input
                className={inputStyle}
                type="text"
                aria-label="E-mail address"
                placeholder="E-mail address..."
              />
              <textarea
                className={`${inputStyle} min-h-[200px] max-h-[300px]`}
                type="text"
                aria-label="Message"
                placeholder="Type your message..."
              />

              <Button>Send Message</Button>
            </form>
          </div>

          <SocialLinks />
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
