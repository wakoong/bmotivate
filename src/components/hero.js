import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  return (
    <div>
      <h1>Gatsby &hearts</h1>
      <p>
        Some words here <Link to="/about/" />
      </p>
    </div>
  );
};

export default Hero;
