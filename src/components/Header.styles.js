import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  position: fixed;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 5px;
  z-index: 1;
  width: fit-content;
  border-radius: 10px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  justify-content: center;
  padding: 10px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: black;
    text-decoration: underline;
  }

  ${(props) =>
    props.left &&
    css`
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    `}

  ${(props) =>
    props.right &&
    css`
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    `}
`;

export const Icon = styled.div`
  font-size: 26px;
  width: 100px;
  margin: 0 auto;
  margin: 10px 0px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  padding: 0 20px;
  display: flex;

  &:hover {
    text-decoration: underline;
  }
`;
