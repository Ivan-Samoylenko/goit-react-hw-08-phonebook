import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.p`
  color: ${getTextColor()};
`;

function getTextColor() {
  const red = Math.floor(Math.random() * 201);
  const green = Math.floor(Math.random() * 201);
  const blue = Math.floor(Math.random() * 201);

  return `rgb(${red},${green},${blue})`;
}

export const StyledLink = styled(Link)`
  font-weight: 700;

  color: inherit;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:active {
    color: #ff0000;
  }
`;
