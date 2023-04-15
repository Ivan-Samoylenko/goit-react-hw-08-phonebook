import styled from 'styled-components';

export const Text = styled.p`
  color: ${getTextColor()};
`;

function getTextColor() {
  const red = Math.floor(Math.random() * 201);
  const green = Math.floor(Math.random() * 201);
  const blue = Math.floor(Math.random() * 201);

  return `rgb(${red},${green},${blue})`;
}
