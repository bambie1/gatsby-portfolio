import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import Head from "../components/Head";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

const inputStyle =
  "focus:ring-2 focus:ring-gray dark:focus:ring-lightGray focus:outline-none appearance-none w-full text-sm leading-6 text-black-900 placeholder-gray dark:placeholder-lightGray rounded-md py-2 pl-4  ring-gray shadow-sm dark:text-white border dark:border-white dark:bg-transparent autofill:bg-gray-200";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.button.disabled = true;

    emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.GATSBY_EMAILJS_USER_ID
      )
      .then((result) => {
        if (result.status === 200) {
          toast.success("Message sent successfully!");
        } else {
          toast.error("Oops! An error occurred");
        }
        form.current.user_email.value = "";
        form.current.message.value = "";
        form.current.button.disabled = false;
      });
  };

  return (
    <>
      <Head title="Contact Me | Benaiah Barango" />
      <Layout>
        <div className="grid min-h-[450px] grid-rows-1 gap-4 md:grid-cols-2">
          <div className="grid place-items-start content-center gap-4">
            <h1 className="text-5xl font-bold">CONTACT ME</h1>
            <p className="text-gray dark:text-lightGray">
              I'd love to hear from you!
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-5 grid w-full max-w-md place-items-start gap-4"
              autoComplete="off"
            >
              <input
                className={inputStyle}
                type="email"
                aria-label="E-mail address"
                placeholder="E-mail address..."
                name="user_email"
                required
              />
              <textarea
                className={`${inputStyle} max-h-[300px] min-h-[200px]`}
                type="text"
                aria-label="Message"
                placeholder="Type your message..."
                name="message"
                required
              />

              <button
                type="submit"
                name="button"
                className="disabled:text-disabledText disabled:bg-disabled dark:disabled:text-disabledText dark:disabled:bg-disabled cursor-pointer rounded-lg border-2 bg-black px-4 py-3 text-white transition duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black disabled:cursor-not-allowed  disabled:border-transparent dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
              >
                Send Message
              </button>
            </form>
          </div>

          <SocialLinks />
          <Toaster />
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
