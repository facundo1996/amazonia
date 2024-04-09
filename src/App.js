import Banner from "./components/Banner";
import Characteristics from "./components/Characteristics";
import ConstructionSystem from "./components/ConstructionSystem";
import HomePage from "./components/HomePage";
import Commercialization from "./components/Commercialization";
import More from "./components/More";
import Models from "./components/Models";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
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
    </div>
  );
}

export default App;
