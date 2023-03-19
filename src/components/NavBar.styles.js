import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin-left: 1rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const NavLink = styled.p`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;