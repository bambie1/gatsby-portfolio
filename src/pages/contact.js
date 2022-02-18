import * as React from "react";

import Button from "../components/Button";
import Head from "../components/Head";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

const inputStyle =
  "focus:ring-4 focus:ring-gray focus:outline-none appearance-none w-full text-sm leading-6 text-black-900 placeholder-gray rounded-md py-2 pl-4 ring-1 ring-gray shadow-sm dark:text-white border dark:border-white dark:bg-transparent";

const ContactPage = () => {
  return (
    <>
      <Head title="Contact Me | Benaiah Barango" />
      <Layout>
        <div className="grid min-h-[450px] grid-rows-1 gap-4 md:grid-cols-2">
          <div className="grid place-items-start content-center gap-4">
            <h1 className="text-5xl font-bold">CONTACT ME</h1>
            <p className="text-gray dark:text-lightGray">
              Designer and Front-End Developer
            </p>

            <form className="mt-5 grid w-full max-w-md place-items-start gap-4">
              <input
                className={inputStyle}
                type="text"
                aria-label="E-mail address"
                placeholder="E-mail address..."
              />
              <textarea
                className={`${inputStyle} max-h-[300px] min-h-[200px]`}
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
