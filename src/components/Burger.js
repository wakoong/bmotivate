// React imports
import React from "react";
// Other imports
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "white" : "black")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-of-type(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = ({ open, toggleMenu }) => {
  const isExpanded = open ? true : false;

  return (
    <Container
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => toggleMenu(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};

export default Burger;
