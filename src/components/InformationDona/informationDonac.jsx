import React from "react";
import {
  ButtonDonate,
  CardInfo,
  ContainerCard,
  Containerinfo,
  TextDonate,
  TitleInfo,
} from "./informationDonaStyles";

import imgpaypal from "../../assets/img/logodonacion/paypal.png";
import imgmercadopago from "../../assets/img/logodonacion/mercadopago.png";
import imgnaranjax from "../../assets/img/logodonacion/naranjax.png";

const informationDonac = () => {
  return (
    <>
      <Containerinfo>
        <TitleInfo>APOYA NUESTRA LABOR</TitleInfo>
        <ButtonDonate>Boton donacion</ButtonDonate>
        <TextDonate>
          Tambien podes hacer tu donacion por estos medios
        </TextDonate>
        <ContainerCard>
          <CardInfo src={imgpaypal}></CardInfo>
          <CardInfo src={imgmercadopago}></CardInfo>
          <CardInfo src={imgnaranjax}></CardInfo>
        </ContainerCard>
      </Containerinfo>
    </>
  );
};

export default informationDonac;
