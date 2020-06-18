import { graphql, useStaticQuery } from "gatsby";

const usePost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              author
              date
              slug
              title
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map((post) => {
    const { title, author, slug, date } = post.node.frontmatter;

    return {
      title,
      author,
      slug,
      date,
    };
  });
};

export default usePost;
