import Header from "./header";
import Revenue from "./totalRevenue";
import Tvl from "./tvl";

const Main = () => {
  return (
    <div className="px-3">
      <Header />
      <Tvl />
      <Revenue />
    </div>
  );
};

export default Main;
