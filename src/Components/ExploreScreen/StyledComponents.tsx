import styled from "styled-components";

import {
  Col,
  Container,
} from "react-bootstrap";

export const Ticker = styled.h1`
  font-weight: bold !important;
  color: white;
`;
export const Name = styled.h2`
  margin-left: 10px;
  font-weight: bold !important;
  color: white;
`;
export const StyledContainer = styled(Container)`
  padding: 1rem;
`;
export const StyledGrid = styled(Col)`
  margin: 1rem 3rem;
  text-align: left;
  padding: 0.5rem 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    h1,
    h2 {
      color: black;
    }
    background: white;
    color: black;
    box-shadow: 10px 10px;
  }
  transition: all 0.3s ease;
`;
export const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: black;
  }
`;
