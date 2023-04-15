import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ListLink = styled(NavLink)`
  padding: 2px 4px;

  display: block;

  line-height: 1;

  color: inherit;
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

  &.active {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: none;
  }
`;
