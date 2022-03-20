const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`);

  const result = await graphql(`
    {
      blogs: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);

  result.data.blogs.nodes.forEach((node) => {
    const {
      frontmatter: { slug },
    } = node;

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
      },
    });
  });
};
