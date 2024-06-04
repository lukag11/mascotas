import React, { useContext } from "react";
import { ContainerMenuHamburger, MenuIcon } from "./MenuBarsStyles";
import { MenuContext } from "../context/Context";

const MenuBars = () => {
  const mContext = useContext(MenuContext);

  return (
    <>
      <ContainerMenuHamburger onClick={mContext.toggleMenu}>
        <MenuIcon clicked={mContext.isMenuOpen}></MenuIcon>
      </ContainerMenuHamburger>
    </>
  );
};

export default MenuBars;
