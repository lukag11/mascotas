import React, { useContext } from "react";
import {
  LogoNavbar,
  Navbar,
  NavbarItem,
  NavbarList,
  StyledHeader,
} from "./HeaderStyles";
import imglogo from "../../assets/img/logo/logomascota.png";
import MenuBars from "../MenuBar/MenuBars";
import { MenuContext } from "../context/Context";

const Header = () => {
  const mContexto = useContext(MenuContext);

  return (
    <>
      <StyledHeader>
        <LogoNavbar src={imglogo} />
        <Navbar isOpen={mContexto.isMenuOpen}>
          <NavbarList>
            <NavbarItem>Inicio</NavbarItem>
            <NavbarItem>Nosotros</NavbarItem>
            <NavbarItem>Animales</NavbarItem>
            <NavbarItem>Contacto</NavbarItem>
          </NavbarList>
        </Navbar>
        <MenuBars />
      </StyledHeader>
    </>
  );
};

export default Header;
