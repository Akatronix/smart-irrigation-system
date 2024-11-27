import logo from "/logo.jpg";
// import PlantBoxing from "./components/plantBox";
import { FaTemperatureLow } from "react-icons/fa";
import { GiWaterTank } from "react-icons/gi";
import { useEffect, useState } from "react";
import { backendDomainUrl } from "./utils/backendDomainUrl";
import { PiPlantFill } from "react-icons/pi";

function App() {
  const [senData, setsenData] = useState({});

  const dataMap = [
    {
      name: "Plant One",
      value: senData.plantOne,
      state: senData.plantOneWaterTap,
    },
    {
      name: "Plant Two",
      value: senData.plantTwo,
      state: senData.plantTwoWaterTap,
    },
    {
      name: "Plant Three",
      value: senData.plantThree,
      state: senData.plantThreeWaterTap,
    },
    {
      name: "Plant Four",
      value: senData.plantFour,
      state: senData.plantFourWaterTap,
    },
  ];
  useEffect(() => {
    async function fetchData() {
      fetch("https://smart-irrigation-system-backend.vercel.app/data")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setsenData(data.data[0]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto bg-white flex items-center justify-start px-[20px]">
        <header className="py-3">
          <a
            href="/"
            className="flex items-center justify-start gap-3 flex-nowrap"
          >
            <img src={logo} alt="logo" className="size-12 rounded-md" />
            <p className="text-xl font-medium">Smart IOT Irrigation System</p>
          </a>
        </header>
      </div>
      <div className="h-full bg-blue-200 container mx-auto w-full px-[20px] flex items-center justify-between flex-wrap py-[20px]">
        {dataMap.map((data, index) => (
          <PlantBoxing
            key={index}
            name={data.name}
            value={data.value}
            state={data.state}
          />
        ))}
      </div>
      <div className="p-[20px] flex items-start justify-start gap-3 flex-wrap">
        {/* tank */}
        <div className="w-[330px] h-full p-[20px] bg-white rounded-md">
          <GiWaterTank className="w-[50px] h-[50px] font-bold text-blue-400" />
          <p>Water Supplying Tank</p>
         
          <p>
            <span className="text-gray-500">state:</span>
            <span className="text-lg ml-[10px]">{senData.tankTapState}</span>
          </p>
        </div>
        {/* temperature */}
        <div className="w-[330px] h-full p-[20px] bg-white rounded-md">
          <FaTemperatureLow className="w-[30px] h-[30px] text-red-400" />
          <p>Environment Temperature</p>
          <span className="text-gray-500">Value:</span>
          <span className="text-2xl md:text-3xl font-bold ml-[10px]">
            {senData.enviromentTemp} °C
          </span>
        </div>
      </div>
    </div>
  );
}



const PlantBoxing = ({ name, value, state }) => {
  return (
    <div className="w-[330px] h-full p-[20px] bg-white rounded-md mb-[20px]">
      <PiPlantFill className="w-[30px] h-[30px] text-green-400" />
      <p>{name}</p>
      <p>
        <span className="text-gray-500">Value:</span>
        <span className="text-2xl md:text-3xl font-bold ml-[10px]">
          {value}
        </span>
      </p>
      <p>
        <span className="text-gray-500">Tap State:</span>
        <span className="ml-[10px]">{state}</span>
      </p>
    </div>
  );
};

export default App;
