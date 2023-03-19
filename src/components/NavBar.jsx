import React from 'react';
import * as S from './NavBar.styles';

export function NavBar() {
    return (
      <S.Nav>
        <S.NavLink to="/">My App</S.NavLink>
        <S.NavList>
          <S.NavItem>
            <S.NavLink to="/about">About</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink to="/contact">Contact</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
    );
  }