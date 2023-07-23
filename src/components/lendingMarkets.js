import UsdcLend from "./usdcLend";
import UsdtLend from "./usdtLend";
import WbtcLend from "./wbtcLend";
import WethLend from "./wethLend";
const LendingMarkets = () => {
  return (
    <div>
      <h1 className="text-white font-normal  text-3xl text-center mt-8 lg:text-6xl lg:mt-20">
        Lending{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
          Markets
        </span>
      </h1>
      <div className="flex flex-wrap gap-6 justify-center mt-6 lg:gap-8 lg:mt-10">
        <UsdcLend />
        <WethLend />
        <WbtcLend />
        <UsdtLend />
      </div>
    </div>
  );
};
export default LendingMarkets;
