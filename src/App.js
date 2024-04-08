import Banner from "./components/Banner";
import Characteristics from "./components/Characteristics";
import ConstructionSystem from "./components/ConstructionSystem";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
      <HomePage />
      <ConstructionSystem />
      <Characteristics />
      <Banner />
    </div>
  );
}

export default App;
