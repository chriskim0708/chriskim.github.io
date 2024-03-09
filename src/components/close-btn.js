import { twMerge } from "tailwind-merge";

export default function CloseBtn({ onClick: handleClick }) {
  return (
    <button className="relative w-[30px] h-[30px]" onClick={handleClick}>
      <Line />
      <Line reverse />
    </button>
  );
}

function Line({ reverse = false }) {
  const lineStyles = twMerge(
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[22px] bg-white",
    reverse ? "-rotate-45" : "rotate-45"
  );
  return <div className={lineStyles} />;
}
