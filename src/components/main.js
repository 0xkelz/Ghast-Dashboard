import Header from "./header";
import LendingMarkets from "./lendingMarkets";
import Revenue from "./totalRevenue";
import Tvl from "./tvl";

const Main = () => {
  return (
    <div className="px-3">
      <Header />
      <Tvl />
      <Revenue />
      <LendingMarkets />
    </div>
  );
};

export default Main;
