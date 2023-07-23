import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const Tvl = () => {
  const [utcObjectsArray, setUtcObjectsArray] = useState([]);
  const [tvl, setTvl] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.llama.fi/protocol/ghast-protocol"
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
    fetchData()
      .then((data) => {
        const dateTvl = data.chainTvls.Arbitrum.tvl;
        const toUTC = (arr) => {
          const maxLength = arr.length - 16;
          const utcObjectsArray = [];
          for (let i = arr.length - 1; i >= maxLength; i--) {
            const date = new Date(arr[i].date * 1000);
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const utcDate = `${String(day).padStart(2, "0")}-${String(
              month
            ).padStart(2, "0")}`;

            utcObjectsArray.push({
              utcDate,
              tvl: Number(arr[i].totalLiquidityUSD),
            });
          }
          // Sort the objects based on the UTC dates
          utcObjectsArray.sort((a, b) => a.utcDate.localeCompare(b.utcDate));
          setUtcObjectsArray(utcObjectsArray);
        };
        toUTC(dateTvl);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error appropriately
      });
  }, []);

  async function fetchTvl() {
    try {
      const response = await fetch("https://api.llama.fi/tvl/ghast-protocol");

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
    fetchTvl().then((tvl) => {
      setTvl(tvl.toLocaleString());
    });
  });

  return (
    <div>
      <h1 className="text-white font-medium text-3xl text-center mt-8 lg:text-6xl lg:mt-16">
        TVL
      </h1>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-500 font-medium text-3xl text-center mt-4 lg:text-6xl lg:mt-8">
        {tvl}
      </h1>
      <h1 className="text-white font-medium text-3xl text-center mt-12 lg:text-6xl lg:mt-24">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-orange-500">
          14-Day
        </span>{" "}
        Total Value Locked{" "}
        <span className="font-normal text-xs text-blue-700 underline">
          (
          <a
            href="https://defillama.com/protocol/ghast-protocol"
            target="blank"
          >
            Source
          </a>
          )
        </span>
      </h1>
      <div className=" h-48 flex justify-center mt-10 lg:h-96">
        <ResponsiveContainer width="80%" height="100%">
          <AreaChart data={utcObjectsArray}>
            <defs>
              <linearGradient id="color" x1={0} y1={0} x2={0} y2={1}>
                <stop offset="0%" stopColor="#dc2f02" stopOpacity={0.4}></stop>
                <stop
                  offset="95%"
                  stopColor="#dc2f02"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <CartesianGrid opacity={0.1} vertical={false} />
            <XAxis dataKey="utcDate" hide={true} />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="tvl"
              stroke="#dc2f02"
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="rounded-lg bg-[#26313c] text-white p-2 shadow-lg text-center">
        <h4>{label}</h4>
        <h2 className="">
          Tvl: {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
            {"$" + payload[0].value.toLocaleString()}
          </span>
        </h2>
      </div>
    );
  } else {
    return "";
  }
};

export default Tvl;
