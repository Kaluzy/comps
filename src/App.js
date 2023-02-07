import Button from "./components/Button";
import {
  GoBell,
  GoCloudUpload,
  GoDesktopDownload,
  GoBeaker,
  GoFlame,
} from "react-icons/go";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "idf3",
      lable: "Section 1: Can I use React for a project",
      content:
        "You can use React on any projects you want. \n You can use React on any projects you want",
    },
    {
      id: "fde56",
      lable: "Section 2: Can I use JavaScript for a project",
      content:
        "For sure specially to make your project more interactive. For sure specially to make your project more interactive",
    },
    {
      id: "i4f3",
      lable: "Section 3: Can I use CSS for a project",
      content:
        "This is the visual heart to your project for styling and more. This is the visual heart to your project for styling and more",
    },
  ];
  return <Accordion items={items} />;
}
export default App;
