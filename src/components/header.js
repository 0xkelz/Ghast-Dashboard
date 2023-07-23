import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <h1 className="text-white font-bold  text-left mt-5">
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
  );
};

export default Header;
