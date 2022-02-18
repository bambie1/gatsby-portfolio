import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Hi there! I'm a UI/UX developer and web consultant, based out of Ottawa, Canada. I love to create amazing digital experiences for clients with different tools at my disposal."
      />
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
