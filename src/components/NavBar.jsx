import React from "react";
import * as S from "./NavBar.styles";
import { BsCartPlusFill } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';



function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  const icon = href === '/home' ? <S.Icon as={ImHome} /> : <S.Icon as={BsCartPlusFill} />;

  return (
    <S.LinkContainer className={path === href ? "active" : ""}>
      {icon}
      <S.NavLink href={href} {...props}>
        {children}
      </S.NavLink>
    </S.LinkContainer>
  );
}

export function NavBar() {
  return (
    <S.Nav>
      <S.NavList>
        <CustomLink href="/contact">Contact</CustomLink>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/cart">Cart</CustomLink>
      </S.NavList>
    </S.Nav>
  );
}
