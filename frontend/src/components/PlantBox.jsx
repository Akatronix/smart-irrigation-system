import { PiPlantFill } from "react-icons/pi";

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

export default PlantBoxing;
