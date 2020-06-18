exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  console.log(JSON.stringify(result, null, 4));

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors);
  }

  console.log({ result });
  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
