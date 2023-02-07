import Button from "../components/Button";
import {
  GoBell,
  GoCloudUpload,
  GoDesktopDownload,
  GoBeaker,
  GoFlame,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!!");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button onMouseEnter={handleClick} secondary rounded>
          <GoCloudUpload />
          Secondary
        </Button>
      </div>
      <div>
        <Button onMouseLeave={handleClick} success outline>
          <GoDesktopDownload />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBeaker />
          Warrning
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <GoFlame />
          Danger
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
