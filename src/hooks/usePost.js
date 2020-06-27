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
              images {
                sharp: childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.edges.map((post) => {
    const { title, author, slug, date, images } = post.node.frontmatter;

    return {
      title,
      author,
      slug,
      date,
      images,
    };
  });
};

export default usePost;
