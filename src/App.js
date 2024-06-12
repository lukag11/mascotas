import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import { Main } from "./components/UI/Main/MainStyles";
import { GlobalStyles } from "./style/GlobalStyled";
import InformationDona from "./components/InformationDona/informationDonac.jsx";
import OurWorkMe from "./components/OurWorkMe/OurWorkMe.jsx";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
        <InformationDona />
        <OurWorkMe />
      </Main>
    </>
  );
}

export default App;
