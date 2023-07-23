import { useContract, useContractRead } from "@thirdweb-dev/react";
import { wbtcLendContract, wbtcLendABI } from "../contracts/WBTCLend";
import { useEffect, useState } from "react";
import { formatUnits } from "ethers/lib/utils";
import btcLogo from "../images/bitcoin-btc-logo.png";

const WbtcLend = () => {
  const [deposits, setDeposits] = useState(0);
  const [borrows, setBorrows] = useState(0);
  const [utilization, setUtilization] = useState(0);
  const { contract: usdcLend } = useContract(wbtcLendContract, wbtcLendABI);

  const { data: totalDeposits, isLoading: isLoadingDeposits } = useContractRead(
    usdcLend,
    "totalDeposits",
    []
  );

  const { data: totalBorrows, isLoading: isLoadingBorrows } = useContractRead(
    usdcLend,
    "totalBorrows",
    []
  );

  useEffect(() => {
    if (
      totalBorrows &&
      !isLoadingBorrows &&
      !isLoadingDeposits &&
      totalDeposits
    ) {
      //ALL DEPOSITS
      setDeposits(Number(formatUnits(totalDeposits)));
      // ALL BORROWS
      setBorrows(Number(formatUnits(totalBorrows)));
      //UTILIZATION RATE
      setUtilization((borrows / deposits) * 100);
    }
  }, [
    isLoadingBorrows,
    totalBorrows,
    borrows,
    deposits,
    utilization,
    totalDeposits,
    isLoadingDeposits,
  ]);

  return (
    <div className="flex justify-center">
      <div className="border-4 border-orange-500 rounded-lg flex justify-center flex-col items-center p-8 w-80 lg:w-[26rem]">
        <img
          src={btcLogo}
          alt="usdc-logo"
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          className="block"
        />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300 font-bold text-xl mt-2 mb-4">
          WBTC
        </h2>
        <h2 className="text-xl text-slate-300">Utilization rate:</h2>
        <h2 className="text-4xl mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 font-semibold ">
            {utilization.toLocaleString()}%
          </span>
        </h2>
        <br></br>
        <h3 className="text-md text-slate-300 lg:text-xl">
          Total deposits:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-600 font-semibold">
            {deposits.toLocaleString()}
          </span>{" "}
          <span className="text-base">BTC</span>
        </h3>
        <h3 className="text-md text-slate-300 mt-2 lg:text-xl">
          Total borrows:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-600 font-semibold">
            {borrows.toLocaleString()}
          </span>{" "}
          <span className="text-base">BTC</span>
        </h3>
      </div>
    </div>
  );
};
export default WbtcLend;
