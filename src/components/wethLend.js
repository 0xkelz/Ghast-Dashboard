import { useContract, useContractRead } from "@thirdweb-dev/react";
import { wethLendABI, wethLendContract } from "../contracts/WETHLend";
import { useEffect, useState } from "react";
import { formatUnits } from "ethers/lib/utils";
import ethLogo from "../images/ethereum-logo.png";

const WethLend = () => {
  const [deposits, setDeposits] = useState(0);
  const [borrows, setBorrows] = useState(0);
  const [utilization, setUtilization] = useState(0);
  const { contract: usdcLend } = useContract(wethLendContract, wethLendABI);

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
      <div className="border-4 border-blue-400 rounded-lg flex justify-center flex-col items-center p-8 w-80 lg:w-[26rem]">
        <img
          src={ethLogo}
          alt="usdc-logo"
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          className="block"
        />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300 font-bold text-xl mt-2 mb-4">
          WETH
        </h2>
        <h2 className="text-xl text-slate-300">Utilization rate:</h2>
        <h2 className="text-4xl mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 font-semibold ">
            {utilization.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            %
          </span>
        </h2>
        <br></br>
        <h3 className="text-md text-slate-300 lg:text-xl">
          Total deposits:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600 font-semibold">
            {deposits.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>{" "}
          <span className="text-base">ETH</span>
        </h3>
        <h3 className="text-md text-slate-300 mt-2 lg:text-xl">
          Total borrows:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-600 font-semibold">
            {borrows.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>{" "}
          <span className="text-base">ETH</span>
        </h3>
      </div>
    </div>
  );
};
export default WethLend;
