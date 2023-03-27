import React from "react";
import * as S from "./NavBar.styles";
import { BsCartPlusFill } from 'react-icons/bs';
import { ImHome } from 'react-icons/im';
import { IoIosContacts} from 'react-icons/io';




function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  const icon =
    href === '/home' ? (
      <S.Icon as={ImHome} />
    ) : href === '/contact' ? (
      <S.Icon as={IoIosContacts} />
    ) : (
      <S.Icon as={BsCartPlusFill} />
    );

  const label =
    href === '/home' ? (
      'Home'
    ) : href === '/contact' ? (
      'Contact'
    ) : (
      'Cart'
    );

    const handleClick = (event) => {
      event.preventDefault();
      window.location.href = href;
    };

  return (
    <S.LinkContainer className={path === href ? 'active' : ''} onClick={handleClick}>
      {icon}
      <S.NavLink href={href} {...props}>
        {label}
      </S.NavLink>
    </S.LinkContainer>
  );
  
}


export function NavBar() {
  return (
    <S.Nav>
      <S.NavList>
        <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
        <CustomLink href="/cart">Cart</CustomLink>
      </S.NavList>
    </S.Nav>
  );
}
