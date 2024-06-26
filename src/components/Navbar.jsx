import React, { useState } from 'react'
import { Link as LinkR, } from "react-router-dom";
import styled from 'styled-components'
import {Bio} from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0.6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;

`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  dispaly: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px){
    display: block;
  }
`;


const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavbarContainer>
    <NavLogo to="/">GeekForGeeks</NavLogo>

    <MobileIcon onClick={() => setIsOpen(!isOpen)}>
      <MenuRounded style={{ color: "inherit" }} />
    </MobileIcon>

    <NavItems>
      <NavLink href="#About">About</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#Experience">Experience</NavLink>
      <NavLink href="#Projects">Projects</NavLink>
      <NavLink href="#Eduaction">Eduaction</NavLink>
    </NavItems>

    <ButtonContainer>
      <GithubButton href={Bio.github} target="_Blank">Github Profile</GithubButton>
    </ButtonContainer>
  </NavbarContainer></Nav>
    
  )
}

export default Navbar



//10.26 setup & first commit
//25:00 navbar Hamburger menu