import React from "react";

function Buttons({ setAbout }) {
  const handleClick = (section) => {
    setAbout(section);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap gap-4 justify-center w-full max-w-3xl px-4">
        <div
          onClick={() => handleClick("Me")}
          className="bg-[#FFA800] cursor-pointer text-sm sm:text-base font-medium text-snow hover:bg-yellow-300 rounded-lg px-4 py-2 text-center transition"
        >
          Learn about Kartik Verma
        </div>
      </div>
    </div>
  );
}

export default Buttons;
