import React from "react";
import {
  CardDetails,
  InfoCard,
  MainWork,
  SectionWork,
  TitleCard,
  TitleWork,
  ContainerCardWork,
} from "./ourworkStyles";

const ourwork = () => {
  return (
    <>
      <MainWork>
        <SectionWork>
          <TitleWork />
          <ContainerCardWork>
            <CardDetails>
              <TitleCard />
              <InfoCard />
            </CardDetails>
            <CardDetails>
              <TitleCard />
              <InfoCard />
            </CardDetails>
            <CardDetails>
              <TitleCard />
              <InfoCard />
            </CardDetails>
          </ContainerCardWork>
        </SectionWork>
      </MainWork>
    </>
  );
};

export default ourwork;
