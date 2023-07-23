import { useContract, useContractRead } from "@thirdweb-dev/react";
import { usdtLendContract, usdtLendABI } from "../contracts/USDTLend";
import { useEffect, useState } from "react";
import { formatUnits } from "ethers/lib/utils";
import usdtLogo from "../images/usdt-icon.png";

const UsdtLend = () => {
  const [deposits, setDeposits] = useState(0);
  const [borrows, setBorrows] = useState(0);
  const [utilization, setUtilization] = useState(0);
  const { contract: usdcLend } = useContract(usdtLendContract, usdtLendABI);

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
      setDeposits(Number(totalDeposits));
      // ALL BORROWS
      setBorrows(Number(totalBorrows));
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
    <div className="flex justify-center ">
      <div className="border-4 border-green-700 rounded-lg flex justify-center flex-col items-center p-8 w-80 lg:w-[26rem]">
        <img
          src={usdtLogo}
          alt="usdc-logo"
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          className="block"
        />
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-300 font-bold text-2xl mt-2 mb-4">
          USDT
        </h2>
        <h2 className="text-xl text-slate-300">Utilization rate:</h2>
        <h2 className="text-4xl mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 font-semibold ">
            {utilization.toString().toLocaleString().slice(0, 6)}%
          </span>
        </h2>
        <br></br>
        <h3 className="text-md text-slate-300 lg:text-xl">
          Total deposits:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-600 font-semibold">
            {Number(formatUnits(deposits, 6)).toLocaleString()}
          </span>{" "}
          <span className="text-base">USDT</span>
        </h3>
        <h3 className="text-md text-slate-300 mt-2 lg:text-xl">
          Total borrows:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-600 font-semibold">
            {Number(formatUnits(borrows, 6)).toLocaleString()}
          </span>{" "}
          <span className="text-base">USDT</span>
        </h3>
      </div>
    </div>
  );
};
export default UsdtLend;
