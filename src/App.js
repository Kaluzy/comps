import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
    // setIsOpen(false);
  };
  const options = [
    {
      lable: "Red",
      value: "red",
    },
    {
      lable: "Green",
      value: "green",
    },
    {
      lable: "Blue",
      value: "blue",
    },
  ];
  return (
    <div className="flex">
      <Dropdown value={selection} onChange={handleSelect} options={options} />
      <Dropdown value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}
export default App;
