import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Name = styled.p``;

export const LogOutBtn = styled.button`
  border: none;
  padding: 2px 4px;

  background-color: rgba(0, 0, 0, 0.1);

  border-radius: 5px;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 3px 1px #000;
  }
`;
