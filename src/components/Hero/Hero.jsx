import React from "react";
import {
  ButtonAdopt,
  ButtonNeed,
  ButtonSponsorDonate,
  HeroImg,
  HeroMain,
  HeroParagr,
  HeroSection,
  HeroSlogan,
  HeroTextContainer,
  HeroTitle,
  TextHero,
} from "./HeroStyles";
import { TextSpann } from "../UI/TextSpan/TextSpan";

const Hero = () => {
  return (
    <>
      <HeroMain>
        <HeroSection>
          <HeroSlogan>
            <HeroTextContainer>
              <HeroTitle>
                <TextHero>Fundacion Mascota CO.</TextHero>
              </HeroTitle>
              <HeroParagr>
                Buscamos proteger la vida de perros y gatos en estado de
                maltrato y abandono. Les brindamos alimentos, medicamentos y
                albergue, con el fin de mejorar su calidad de vida y
                conseguirles un hogar.
              </HeroParagr>
            </HeroTextContainer>
            <ButtonAdopt>ADOPTA</ButtonAdopt>
            <ButtonSponsorDonate>APADRINA Y DONA</ButtonSponsorDonate>
          </HeroSlogan>
        </HeroSection>
      </HeroMain>
    </>
  );
};

export default Hero;
