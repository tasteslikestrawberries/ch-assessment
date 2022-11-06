import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";
import { mockData } from "./components/dropdown/mock-data";

function App() {
  const test = (option) => {
    console.log(option);
  };

  return (
    <>
      <Dropdown data={mockData} onOptionSelected={test} />
    </>
  );
}

export default App;
