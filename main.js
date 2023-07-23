import Header from "./header";
import LendingMarkets from "./lendingMarkets";
import Revenue from "./totalRevenue";
import Tvl from "./tvl";
import ghastLogo from "../images/ghastLogo.svg";

const Main = () => {
  return (
    <div className="px-3">
      <a href="https://ghastprotocol.com/">
        <div className="flex justify-center mt-4">
          <img
            src={ghastLogo}
            alt="usdc-logo"
            style={{ width: "50px", height: "50px" }}
            className="block"
          />
          <h1 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-orange-400 my-auto ml-3 tracking-wider lg:text-5xl">
            GHA
          </h1>
        </div>
      </a>
      <Header />
      <Tvl />
      <Revenue />
      <LendingMarkets />
      <div className="border-t-2 border-red-500 mt-24 mx-20 lg:mx-96"></div>
      <footer className=" w-auto mx-auto mb-5">
        <h3 className="mt-5 text-center text-slate-300 ml-1">DISCLAIMER:</h3>
        <p className="text-center text-slate-400 ml-1 mt-1">
          This is an unofficial interface made by me (
          <a
            href="https://twitter.com/0xKelz"
            className="text-orange-400 underline hover:text-red-500"
          >
            @0xKelz
          </a>
          ) as a contribution to the{" "}
          <a
            href="https://ghastprotocol.com/"
            className="text-orange-400 underline hover:text-red-500"
          >
            Ghast protocol
          </a>
          .
        </p>
        <p className="text-center text-slate-400 ml-1">
          Feel free to share with me any improvements and feedbacks!
        </p>
      </footer>
    </div>
  );
};

export default Main;
