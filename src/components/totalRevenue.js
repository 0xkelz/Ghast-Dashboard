import { useContract, useContractRead } from "@thirdweb-dev/react";
import {
  stakingGHAContract,
  stakingGHAABI,
} from "../contracts/stakingGHAContracts";
import { formatUnits } from "ethers/lib/utils";
import { useEffect, useState } from "react";

const Revenue = () => {
  const [distributedETH, setDistributedETH] = useState(0);
  const [distributedUSD, setDistributedUSD] = useState(0);
  const [priceETH, setPriceETH] = useState(0);
  const { contract } = useContract(stakingGHAContract, stakingGHAABI);
  const { data, isLoading } = useContractRead(contract, "totalWETHdistributed");

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.dexscreener.com/latest/dex/tokens/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      setPriceETH(data.pairs[0].priceUsd);
    });
  }, [setPriceETH, priceETH]);

  useEffect(() => {
    if (isLoading) {
    } else {
      setDistributedETH(formatUnits(data));
      setDistributedUSD(distributedETH * priceETH);
    }
  }, [
    data,
    isLoading,
    setDistributedETH,
    distributedETH,
    priceETH,
    distributedUSD,
  ]);

  return (
    <div>
      <h1 className="text-white font-normal  text-3xl text-center mt-20 lg:text-6xl">
        Total{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
          Revenue
        </span>{" "}
        Collected
      </h1>
      <div className="w-2/3 h-auto mx-auto mt-6 border-[1px] border-orange-700 rounded-lg flex align-middle justify-center py-8 lg:mt-16 lg:py-16">
        <h1 className="text-white font-medium text-2xl text-center lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            {distributedETH}
          </span>{" "}
          ETH <span className="text-slate-300">/ </span>
          <span className="text-xl lg:text-3xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {distributedUSD.toLocaleString()}
            </span>{" "}
            $
          </span>
        </h1>
      </div>
    </div>
  );
};
export default Revenue;
