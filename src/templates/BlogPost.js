import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Head from "../components/Head";
import Layout from "../components/Layout";

const BlogPost = ({ data: { post }, pageContext: { next, previous } }) => {
  const { title, content } = post;

  console.log({ next, previous });

  return (
    <>
      <Head title={`${title} | Benaiah Barango`} />
      <Layout>
        <div className="mx-auto w-full max-w-4xl">
          <div>
            <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl">
              {title}
            </h1>
          </div>

          <div className="divide-gray divide-y lg:col-span-3 lg:row-span-2 lg:pb-0">
            <div className="prose max-w-none pt-10 pb-8">
              {content && (
                <MDXRenderer>
                  {content?.markdownNode?.childMdx?.body}
                </MDXRenderer>
              )}
            </div>

            {(next || previous) && (
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
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    post: graphCmsPost(id: { eq: $id }) {
      title
      content {
        markdownNode {
          childMdx {
            body
          }
        }
      }
    }
  }
`;

export default BlogPost;
