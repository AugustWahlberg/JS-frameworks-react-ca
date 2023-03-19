import React from 'react';
import * as S from './NavBar.styles';

export function NavBar() {
  
    return (
      <S.Nav>
        <S.NavLink a href='/'>Site Name</S.NavLink>
        <S.NavList>
            
            <CostumLink a href="/contact">Contact</CostumLink>
            <CostumLink a href="/home">Home</CostumLink>
    
        </S.NavList>
      </S.Nav>
    );
  }

  function CostumLink ( {href, children, ...props}) {
    const path = window.location.pathname;
    
    return (
      <S.NavItem className={path === href ? "active" : ""}>
      <S.NavLink a href={href} {...props}>
        {children}
      </S.NavLink>
    </S.NavItem>
    )
  }