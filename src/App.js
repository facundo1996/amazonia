import Banner from "./components/Banner";
import Characteristics from "./components/Characteristics";
import ConstructionSystem from "./components/ConstructionSystem";
import HomePage from "./components/HomePage";
import Commercialization from "./components/Commercialization";
import More from "./components/More";
import Models from "./components/Models";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import Differences from "./components/Differences";
import ChooseUs from "./components/ChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Rights from "./components/Rights";
function App() {
  return (
    <div className="App">
      <HomePage />
      <ConstructionSystem />
      <Characteristics />
      <Banner />
      <Commercialization />
      <More />
      <Models />
      <AboutUs />
      <Mission />
      <Differences />
      <ChooseUs />
      <Contact />
      <Footer />
      <Rights />
    </div>
  );
}

export default App;
