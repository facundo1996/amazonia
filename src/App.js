import Banner from "./components/Banner";
import Characteristics from "./components/Characteristics";
import ConstructionSystem from "./components/ConstructionSystem";
import HomePage from "./components/HomePage";
import Commercialization from "./components/Commercialization";
function App() {
  return (
    <div className="App">
      <HomePage />
      <ConstructionSystem />
      <Characteristics />
      <Banner />
      <Commercialization />
    </div>
  );
}

export default App;
