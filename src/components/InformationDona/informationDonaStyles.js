import styled from "styled-components";
import { Section } from "../UI/Section/Section";
import { Main } from "../UI/Main/MainStyles";

export const ContainerMain = styled(Main)`
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Containerinfo = styled(Section)`
  flex-direction: column;
  gap: 70px;

  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export const TitleInfo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 70px;

  animation: focus-in-expand-fwd 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes focus-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      transform: translateZ(-800px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      filter: blur(0);
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    font-size: 30px;
  }
`;

export const ButtonDonate = styled.button`
  background: #1aab8a;
  color: black;
  border: 2px solid #e184f3;
  border-radius: 40px 40px 40px 40px;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  font-family: "Oswald", sans-serif;

  // animacion

  animation: bounce-top 0.9s 4s 5 both;

  &:hover {
    background: #e184f3;
    color: black;
    border: 2px solid #1aab8a;
  }
  &:before &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #1aab8a;
    transition: 400ms ease all;
  }
  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }

  // animacion

  @keyframes bounce-top {
    0% {
      transform: translateY(-45px);
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      transform: translateY(-24px);
      animation-timing-function: ease-in;
    }
    65% {
      transform: translateY(-12px);
      animation-timing-function: ease-in;
    }
    82% {
      transform: translateY(-6px);
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateY(-4px);
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

export const TextDonate = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  @media (max-width: 992px) {
    font-size: 13px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;

  @media (max-width: 992px) {
    flex-direction: column;

    font-size: 10px;
    gap: 5px;
  }
`;

export const CardInfo = styled.img`
  width: 150px;
  height: 150px;
  padding: 10px;
  margin: 20px;
  cursor: pointer;
  border: 6px groove #a41084;

  &:hover {
    animation: rotate-vert-center 0.9s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }

  @keyframes rotate-vert-center {
    0% {
      transform: rotateY(0);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
