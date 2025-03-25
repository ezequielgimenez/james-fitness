import HeaderComponent from "./components/header/Header";
import MainComponent from "./components/seccion-main/Main";
import AboutMeComponent from "./components/about-me/Aboutme";
import QualificationsComp from "./components/qualifications/Qualifications";
import PricesComp from "./components/prices/Prices";
import QuestionsComp from "./components/questions/Question";
import FooterComp from "./components/footer/Footer";
import StartComponent from "./components/started/Started";

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
      <AboutMeComponent></AboutMeComponent>
      <QualificationsComp></QualificationsComp>
      <PricesComp></PricesComp>
      <QuestionsComp></QuestionsComp>
      <StartComponent></StartComponent>
      <FooterComp></FooterComp>
    </div>
  );
}

export default App;
