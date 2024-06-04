import styled from "styled-components";

import { Section } from "../UI/Section/Section";
import { Main } from "../UI/Main/MainStyles";
import { TextSpann } from "../UI/TextSpan/TextSpan";

export const HeroMain = styled(Main)`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  background-image: url("https://res.cloudinary.com/djyhwdmek/image/upload/v1717339094/perro-y-gato-en-la-calle_ihmfhg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: none;
  }
`;

export const HeroSection = styled(Section)`
  padding-left: 15px;
  margin: 10px;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 150px;
  border-bottom: 3px inset #e184f3;
  border-right: 3px inset #e184f3;
  border-radius: 40px 15px 40px 18px;
  background: #ccc;
  opacity: 0.8;

  @media (max-width: 992px) {
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroSlogan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 450px;
  /* border: 1px solid green; */
  padding: 50px;
  gap: 20px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 90%;
  }
`;

export const HeroTextContainer = styled.div`
  max-width: max(50%, 400px);
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 992px) {
      gap: 20px;
    }
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 45px;
  line-height: 65px;
  color: black;
`;

export const HeroParagr = styled.p`
  font-size: 18px;
  font-weight: 300px;
  line-height: 30px;
  color: black;
`;

export const HeroImg = styled.img`
  height: 350px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 100px;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const TextHero = styled(TextSpann)`
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  background: #654ea3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaafc8,
    #654ea3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaafc8,
    #654ea3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const ButtonAdopt = styled.button`
  box-shadow: inset 0px 1px 0px 0px #e184f3;
  background: linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);
  background-color: #c123de;
  border-radius: 6px;
  border: 1px solid #a511c0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #9b14b3;

  &:hover {
    background: linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
    background-color: #a20dbd;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const ButtonSponsorDonate = styled.button`
  background: #7f00ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e100ff,
    #7f00ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e100ff,
    #7f00ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 6px;
  border: 1px solid #a511c0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #9b14b3;

  &:hover {
    background: linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
    background-color: #a20dbd;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
