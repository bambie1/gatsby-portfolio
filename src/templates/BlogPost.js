import React from "react";
import { graphql } from "gatsby";

import Head from "../components/Head";
import Layout from "../components/Layout";

const BlogPost = ({ data: { post } }) => {
  const {
    frontmatter: { title },
    html,
  } = post ?? {};

  return (
    <>
      <Head title={`${title} | Benaiah Barango`} />
      <Layout>
        <div className="">
          {/* <div>
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
              {title}
            </h1>
          </div> */}

          <div className="divide-gray divide-y lg:col-span-3 lg:row-span-2 lg:pb-0">
            <div
              className="prose dark:prose-invert mx-auto w-full max-w-4xl  pt-10 pb-8"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* {(next || previous) && (
              <div className="space-y-8 py-8">
                {next && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide text-gray-500">
                      Next Post
                    </h2>
                    <div className="text-purple-500 hover:text-purple-600">
                      <Link to={`/blog/${next.slug}`}>{next.title}</Link>
                    </div>
                  </div>
                )}
                {previous && (
                  <div>
                    <h2 className="text-xs uppercase tracking-wide text-gray-500">
                      Previous Post
                    </h2>
                    <div className="text-purple-500 hover:text-purple-600">
                      <Link to={`/blog/${previous.slug}`}>
                        {previous.title}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )} */}
          </div>
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
      }
      html
    }
  }
`;

export default BlogPost;
