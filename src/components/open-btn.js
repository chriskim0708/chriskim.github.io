import { twMerge } from "tailwind-merge";

export default function OpenBtn({ onClick: handleClick }) {
  return (
    <button
      className="absolute z-0 top-[20px] left-[20px] flex flex-col justify-center w-[30px] h-[30px] p-[4px] gap-y-[4px]"
      onClick={handleClick}
    >
      <Line />
      <Line />
      <Line />
    </button>
  );
}

function Line() {
  const lineStyles = twMerge("w-[22px] h-[2px] bg-white");
  return <div className={lineStyles} />;
}
