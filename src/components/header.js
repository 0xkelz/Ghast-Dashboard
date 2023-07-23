import { TypeAnimation } from "react-type-animation";
import ghastLogo from "../images/ghastLogo.svg";
const Header = () => {
  return (
    <div>
      <a href="https://ghastprotocol.com/">
        <div className="flex justify-center mt-4">
          <img
            src={ghastLogo}
            alt="usdc-logo"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </a>
      <h1 className="text-white font-bold  text-center mt-5">
        <TypeAnimation
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600 text-[3rem] lg:text-[6rem]"
          sequence={[
            "Dashboard", // Types 'One'
            1000,
            "Dashboard.",
          ]}
          speed={5}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{ display: "inline-block" }}
        />
      </h1>
    </div>
  );
};

export default Header;
