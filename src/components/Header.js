import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
   height: 60px;
   color: #3f2a4e;
`;
const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 1rem;
   max-width: 1440px;
   margin: 0 auto;
   height: 100%;
   color: white;
`;
const Logo = styled(Link)`
   /* color: #3f2a4e; */
   color: white;
   font-size: 2rem;
   text-decoration: none;
   font-weight: 600;
`
const NavbarLink = styled(Link)`
   /* color: #3f2a4e; */
   color: white;
   text-decoration: none;
   margin-left: 20px;
   font-weight: 600;
`
const Header = () => {
   return (
      <Navbar>
         <Container>
            <div className="navbar__logo-wrap">
               <Logo to="/">Dusk & Dawn</Logo>
            </div>
            <div className="navbar__item-wrap">
               <NavbarLink to="/">Home</NavbarLink>
               <NavbarLink to="/about">About Us</NavbarLink>
               <NavbarLink to="/blog">Blog</NavbarLink>
            </div>
         </Container>
      </Navbar>
   )
}

export default Header;