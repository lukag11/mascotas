import styled from "styled-components";
import { Section } from "../UI/Section/Section";

export const Containerinfo = styled(Section)`
  flex-direction: column;
  gap: 50px;

  border: 1px solid red;
`;

export const TitleInfo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const ButtonDonate = styled.button``;

export const TextDonate = styled.h2``;

export const ContainerCard = styled.div``;

export const CardInfo = styled.img`
  width: 50px;
  height: 50px;
  gap: 50px;
  cursor: pointer;
`;
