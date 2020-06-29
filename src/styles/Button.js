import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  background: ${(props) => (props.color ? props.color : "white")};
  border: ${(props) =>
    props.color ? `1px solid ${props.color}` : "1px solid black"};
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5em 1em;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
