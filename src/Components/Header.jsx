import { useEffect, useState } from "react";
export default function () {
  const colorVairation = [
    "red",
    "blue",
    "green",
    "purple",
    "orange",
    "gray",
    "black",
    "orange",
  ];

  function GiveColor({ text }) {
    const [newColor, setNewColor] = useState();

    useEffect(() => {
      const intervalId = setInterval(() => {
        setNewColor(
          <>
            {text.split("").map((char, index) => {
              let tempVal =
                colorVairation[
                  Math.floor(Math.random() * colorVairation.length)
                ];
              return (
                <span key={index} className={tempVal}>
                  {char}
                </span>
              );
            })}
          </>
        );
      }, 500);
      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
      }, 5000);
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }, [text]);
    return newColor;
  }

  let className = `font-extrabold text-blue-500 text-6xl text-center py-6 mb-12`;

  return (
    <>
      <h1 id="header" className={className}>
        <GiveColor text="Wack the mole" />
      </h1>
    </>
  );
}
