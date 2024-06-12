import React from "react";
import {
  CardDetails,
  InfoCard,
  MainWork,
  SectionWork,
  TitleCard,
  TitleWork,
  ContainerCardWork,
} from "./OurWorkMeStyles";

const OurWorkMe = () => {
  return (
    <>
      <>
        <MainWork>
          <SectionWork>
            <TitleWork>Nuestra Mision</TitleWork>
            <ContainerCardWork>
              <CardDetails>
                <TitleCard>LO QUE HACEMOS🙌</TitleCard>
                <InfoCard>
                  Los animales que llegan a la fundación reciben atención
                  veterinaria completa, incluyendo esterilización, vacunación,
                  desparacitación, identificación con microchip y cualquier
                  tratamiento necesario para garantizar su bienestar hasta que
                  logremos encontrarles un hogar que los cuide de por vida.
                </InfoCard>
              </CardDetails>
              <CardDetails>
                <TitleCard>LO QUE QUEREMOS❤️</TitleCard>
                <InfoCard>
                  Promover la sensibilización colectiva fomentando la
                  esterilización, el respeto a la vida, el NO al maltrato animal
                  y la adopción responsable y soñamos con convertirnos en una
                  organización líder en la protección y preservación de los
                  animales que son víctimas del maltrato y la indiferencia.
                </InfoCard>
              </CardDetails>
              <CardDetails>
                <TitleCard>HEMOS RESCATADO🏠</TitleCard>
                <InfoCard>
                  Hemos cambiado su mundo y ellos el nuestro. Muchos han sido
                  felizmente adoptados, otros nos han enseñado a no darnos por
                  vencidos y son ejemplo de perseverancia y gratitud.
                </InfoCard>
              </CardDetails>
            </ContainerCardWork>
          </SectionWork>
        </MainWork>
      </>
    </>
  );
};

export default OurWorkMe;
