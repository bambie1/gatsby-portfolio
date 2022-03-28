import React from "react";
import { graphql, Link } from "gatsby";

import Head from "../components/Head";
import Layout from "../components/Layout";

const BlogPost = ({ data: { post } }) => {
  const {
    frontmatter: { title, next, previous, next_slug, previous_slug },
    html,
  } = post ?? {};

  console.log({ next, previous });

  return (
    <>
      <Head title={`${title} | Benaiah Barango`} />
      <Layout>
        <div className="lg:col-span-3 lg:row-span-2 lg:pb-0">
          <div
            className="prose dark:prose-invert mx-auto w-full max-w-4xl pt-5 pb-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {(next || previous) && (
            <div className="mx-auto flex w-full max-w-4xl space-y-8 py-8">
              {next && (
                <Link
                  to={`/blog/${next_slug}`}
                  className="ml-auto rounded-lg border border-gray-600 p-4 opacity-75 shadow-lg transition duration-200 hover:opacity-90 hover:shadow-none dark:border-gray-200"
                >
                  <h2 className="text-xs uppercase tracking-wide text-gray-500">
                    Next Post
                  </h2>
                  <div className="">{next}</div>
                </Link>
              )}
              {previous && (
                <Link
                  to={`/blog/${previous_slug}`}
                  className="mr-auto rounded-lg border border-gray-600 p-4 opacity-75 shadow-lg transition duration-200 hover:opacity-90 hover:shadow-none dark:border-gray-200"
                >
                  <h2 className="text-xs uppercase tracking-wide text-gray-500">
                    Previous Post
                  </h2>
                  <div className="">{previous}</div>
                </Link>
              )}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        next
        next_slug
        previous
        previous_slug
      }
      html
    }
  }
`;

export default BlogPost;
