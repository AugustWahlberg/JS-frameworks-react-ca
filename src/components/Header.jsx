import React from "react";
import * as S from "./Header.styles";
import { BsCartPlusFill } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { IoIosContacts } from "react-icons/io";
import { useLocation } from "react-router-dom";

export function CustomLink({ href, children, ...props }) {
  const location = useLocation();
  const path = location.pathname;

  const icon =
    href === "/home" ? (
      <S.Icon as={ImHome} />
    ) : href === "/contact" ? (
      <S.Icon as={IoIosContacts} />
    ) : (
      <S.Icon as={BsCartPlusFill} />
    );

  const label =
    href === "/home" ? "Home" : href === "/contact" ? "Contact" : "Cart";

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = href;
  };

  return (
    <header>
      <S.LinkContainer
        className={path === href ? "active" : ""}
        left={href === "/home"}
        right={href === "/cart"}
        onClick={handleClick}
      >
        {icon}
        <S.NavLink href={href} {...props}>
          {label}
        </S.NavLink>
      </S.LinkContainer>
    </header>
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
