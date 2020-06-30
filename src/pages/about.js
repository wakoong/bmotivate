// React imports
import React from "react";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
// My imports
import { Layout } from "../styles";
// Other imports
import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50vh auto;
  grid-template-columns: 1fr;
  height: 100%;
  max-width: 680px;
  margin: 3.75em auto 0 auto;
`;

const ImageBackground = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-position: right;
  background-size: cover;
  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const TextContainer = styled.section`
  min-height: calc(100vh - 15em);
  width: 100%;
  padding: 2em;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 4em 0;
    font-size: 1.2rem;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { fluid } = data.image.sharp;
  return (
    <Layout>
      <Container>
        <ImageBackground Tag="section" fluid={fluid} fadeIn="soft" />
        <TextContainer>
          <p>
            Lorem ipsum dolor sit amet, vim facer saperet ei, veritus
            neglegentur definitionem eam eu. In mea regione vivendo, vim facer
            civibus patrioque ex, cu homero commune pertinax eos. Illum mollis
            phaedrum in per, et eos viris maiorum. Ea per nibh aliquip pericula,
            ad bonorum laoreet forensibus eos, mel libris aliquid maiestatis id.
            No doctus volutpat concludaturque nam, ea aeterno aliquip eum. Ius
            idque maiorum eu, pri ei meis ullum explicari. Mei et odio fabulas,
            vim civibus pericula an, ne hinc nemore gubergren pri. Vis ex quas
            suscipit laboramus, posse percipit usu ea. Per cu modus recusabo, ne
            alterum facilisi instructior sed. Has munere ancillae te, qui at
            tota vituperata deterruisset, no postulant temporibus vel. Sed ea
            sumo honestatis scripserit. Modo comprehensam eos an, aperiam
            impedit ut vix. Sea autem audire aperiri ad, ullum constituam et
            eam.{" "}
          </p>
          <p>
            Ea est munere imperdiet incorrupte, primis legimus efficiendi in
            cum. Eu mea suavitate omittantur, soluta periculis ea duo, his alia
            mollis in. An mei vocent feugiat, amet liber disputando usu ad.
            Dicit deleniti nam ad, eum in vocibus temporibus, ut graeci quodsi
            ius. Docendi detracto scripserit ea vis, an petentium ullamcorper
            his, vis ne tantas laboramus. Doming posidonium vel ne, ei sit
            iriure rationibus. In usu duis suavitate, idque vocibus vel in, vim
            ut minim dolor accumsan. Ea vis laudem adolescens temporibus.
            Iuvaret laboramus ne his, usu liber legere no. Possim impetus
            offendit vix eu, eos ut omnium aeterno volumus. Ex omnis dicta has,
            sed prima mentitum delectus et, cu sed veri deseruisse quaerendum.
            Cu mea scripta dolorem, cu vitae quidam has. At noluisse instructior
            cum, et dicam petentium definitionem pro, qui assum suscipit
            assentior eu. Eos ullum graeci voluptatum ad, ne has nisl dicit, at
            prompta accumsan eum. Eam mollis omittantur ut, insolens tincidunt
            deterruisset cu vim.
          </p>
        </TextContainer>
      </Container>
    </Layout>
  );
};

export default About;
