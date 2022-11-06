import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";
import { mockData } from "./components/dropdown/mock-data";

function App() {
  const test = () => {
    console.log("test");
  };

  return (
    <>
      <Dropdown data={mockData} onOptionSelected={test} />
    </>
  );
}

export default App;
