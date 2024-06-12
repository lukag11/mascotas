import styled from "styled-components";
import { Section } from "../UI/Section/Section";
import { Main } from "../UI/Main/MainStyles";

export const MainWork = styled(Main)`
  background-image: linear-gradient(
    to right bottom,
    #c43db8,
    #f74393,
    #ff6870,
    #ff9557,
    #ffc054,
    #ffd35a,
    #fde564,
    #f9f871,
    #f9f871,
    #f9f871,
    #f9f871,
    #f9f871
  );

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionWork = styled(Section)`
  flex-direction: column;
  gap: 60px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export const TitleWork = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc, 2px 19px 17px rgba(206, 89, 55, 0.27);
  font-size: 60px;
  font-family: "Azeret Mono", monospace;
  font-optical-sizing: auto;
  font-style: normal;

  @media (max-width: 992px) {
    font-size: 35px;
  }
`;

export const ContainerCardWork = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 10px;

  border-right: 3px ridge #1c6ea4;

  @media (max-width: 992px) {
    gap: 25px;
    border-bottom: 3px ridge #1c6ea4;
    border-right: none;
  }
`;

export const TitleCard = styled.h2`
  display: flex;
  justify-content: center;
  text-decoration: wavy;

  font-size: 20px;

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

export const InfoCard = styled.h4`
  text-align: center;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
  }
`;
