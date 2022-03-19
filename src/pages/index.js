import { graphql } from "gatsby";
import * as React from "react";

import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import Head from "../components/Head";
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";

export const pageQuery = graphql`
  {
    posts: allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        excerpt
        slug
        title
      }
    }
  }
`;

const HomePage = ({ data: { posts } }) => {
  return (
    <>
      <Head title="Benaiah Barango | Designer and developer" />
      <Layout>
        <div className="grid min-h-[450px] grid-rows-1 gap-4 md:grid-cols-2">
          <div className="grid place-items-start content-center gap-4">
            <h1 className="text-5xl font-bold">BENAIAH BARANGO</h1>
            <p className="text-gray dark:text-lightGray">UI/UX Developer</p>

            <p className="mb-7">
              Hi there! I'm a web consultant, based out of Ottawa, Canada.
              <br></br> I love to create amazing digital experiences for clients
              with tools like Javascript, Wordpress, and Shopify.
            </p>
            <Button href="/contact">Let's work together</Button>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-14">
          <h2 className="mb-8 text-3xl font-bold underline">Articles</h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.nodes?.map((post) => (
              <li key={post.slug}>
                <BlogCard post={post} />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
