const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);

  const result = await graphql(`
    {
      posts: allGraphCmsPost(sort: { fields: date, order: DESC }) {
        edges {
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
          node {
            id
            slug
          }
        }
      }
    }
  `);

  result.data.posts.edges.forEach(({ next, previous, node }) => {
    const { id, slug } = node;

    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: {
        id,
        previous,
        next,
      },
    });
  });
};
