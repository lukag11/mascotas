import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0 50px;
  position: fixed;
  background: #f2994a;
  background: -webkit-linear-gradient(to right, #f2c94c, #f2994a);
  background: linear-gradient(to right, #f2c94c, #f2994a);
  width: 100%;
  top: 0;
  z-index: 2;

  @media (max-width: 992px) {
    padding: 0 50px 0 10px;
  }
`;

export const LogoNavbar = styled.img`
  height: 90%;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: auto;
  padding-top: 50px;

  @media (max-width: 992px) {
    position: absolute;
    /* background-color: black; */
    /* color: white; */
    flex-direction: column;
    top: 100px;
    right: 0;
    width: 100%;
    height: calc(100vh - 100px);
    z-index: 5;
    transition: all 0.4s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(200%)"};

    background-image: url("https://res.cloudinary.com/djyhwdmek/image/upload/v1717010766/Fondonavbarhamb_mycm0i.webp");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 992px) {
    margin: auto;
    flex-direction: column;
  }
`;

export const NavbarItem = styled.li`
  position: relative;
  font-size: 20px;
  cursor: pointer;

  font-family: "Cutive Mono", monospace;
  font-weight: 600;
  font-style: italic;

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    background: var(--violet-navbar);
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.8s ease;
  }
  &:hover::after {
    transform-origin: bottom left;
    transform: scaleY(1);
  }

  @media (max-width: 992px) {
    background-color: white;
    font-size: 25px;
    border-radius: 10px;
    padding: 5px;

    &::after {
      content: "";
      background: none;
    }
  }
`;

// export const LastNavbarItem = styled.li`
//   font-size: 20px;
//   border: 1px solid blue;
//   padding: 4px 40px;
//   border-radius: 4px;
//   font-weight: 600;
//   cursor: pointer;

//   &:hover {
//     background-color: gray;
//   }
// `;
