import { useEffect } from "react";
import mole from "../assets/mole.png";

const numbHoles = 12;
const intervalDuration = 1000;
const moleDisplayDuration = 1000;
const totalDuration = 20000;

function randomise() {
  return Math.floor(Math.random() * numbHoles);
}

function MoleButton({ setScore, change, setChange }) {
  const disClass = "bg-black rounded-full text-white w-[8rem] h-[8rem]";

  function onHit(i) {
    if (!change.includes(i)) return;
    setScore((prevScore) => prevScore + 1); // Increase score
    setChange((prevChange) => prevChange.filter((moleNo) => moleNo !== i)); // Remove mole
  }

  useEffect(() => {
    const intervals = [];
    const timeouts = [];

    const startInterval = () => {
      const intervalId = setInterval(() => {
        const newMole = randomise();
        setChange((prevChange) => [...prevChange, newMole]);

        const moleTimeoutId = setTimeout(() => {
          setChange((prevChange) =>
            prevChange.filter((moleNo) => moleNo !== newMole)
          );
        }, moleDisplayDuration);

        timeouts.push(moleTimeoutId);
      }, intervalDuration);

      intervals.push(intervalId);
    };

    const initializeIntervals = () => {
      startInterval(); // Start immediately
      timeouts.push(setTimeout(() => startInterval(), 5500)); // Start after 5 seconds
      timeouts.push(setTimeout(() => startInterval(), 10250)); // Start after 10 seconds
      timeouts.push(setTimeout(() => startInterval(), 15750)); // Start after 15 seconds
    };

    const stopAllIntervals = () => {
      intervals.forEach(clearInterval);
      timeouts.forEach(clearTimeout);
      setChange([]); // Clear the change array
    };

    initializeIntervals();

    const stopTimeoutId = setTimeout(stopAllIntervals, totalDuration);
    timeouts.push(stopTimeoutId);

    return () => {
      stopAllIntervals();
      clearTimeout(stopTimeoutId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: numbHoles }).map((_, i) => (
        <button key={i} className={disClass} onClick={() => onHit(i)}>
          {change.includes(i) && (
            <img className="btn active" src={mole} alt="mole" />
          )}
        </button>
      ))}
    </>
  );
}

export default MoleButton;
