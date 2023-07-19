import { useContract, useContractRead } from "@thirdweb-dev/react";
import { usdcLendContract, usdcLendABI } from "../contracts/USDCLend";
import { useEffect, useState } from "react";
import { formatUnits } from "ethers/lib/utils";

const UsdcLend = () => {
  const [deposits, setDeposits] = useState(0);
  const [borrows, setBorrows] = useState(0);
  const [utilization, setUtilization] = useState(0);
  const { contract: usdcLend } = useContract(usdcLendContract, usdcLendABI);

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
};
export default UsdcLend;
