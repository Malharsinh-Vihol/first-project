import { useState } from "react";
import MoleButton from "./MoleButton";

export default function Main() {
  const [change, setChange] = useState([]);
  const [score, setScore] = useState(0); // Use useState to manage score
  const [on, setOn] = useState(false);
  function handleStart() {
    setOn(true);
  }
  return (
    <>
      <div id="score-board">Score: {score}</div>

      <div
        id="device"
        className=" mx-auto grid grid-cols-1 grid-rows-2 justify-items-stretch content-start h-[80rem] w-[60rem] "
      >
        <div
          id="monitor"
          className=" pl-20 rounded-3xl p-10 transition-all bg-yellow-500 grid grid-cols-3 grid-rows-* gap-4 md:grid-cols-4 content-around "
        >
          {on ? (
            <MoleButton
              change={change}
              setChange={setChange}
              setScore={setScore}
            ></MoleButton>
          ) : (
            <p className=" absolute text-5xl">press Start to start</p>
          )}
        </div>

        <div
          id="pad"
          className="bg-purple-900  py-7 justify-self-stretch self-start flex justify-evenly"
        >
          <button
            id="big-green-button"
            className="bg-green-500 self-start h-[7rem] w-[7rem] rounded-full "
            onClick={handleStart}
          >
            Start?
          </button>
          <button
            id="big-red-button"
            className="bg-red-500 self-start h-[7rem] w-[7rem] rounded-full "
          >
            Restart?
          </button>
        </div>
      </div>
    </>
  );
}
