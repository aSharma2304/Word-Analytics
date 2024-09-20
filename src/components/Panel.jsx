import React from "react";

const Tile = ({ border, label, val }) => {
  return (
    <div className={`w-full h-1/2 min-h-48 p-2 ${border ? "border-t-2" : ""}`}>
      <div className="font-inter bg-white border-2 rounded-lg w-full h-full shadow-lg hover:shadow-xl hover:scale-[1.02] transform translate duration-300 ease-in-out p-2 flex flex-col justify-center items-center gap-5">
        <span className="text-5xl font-bold text-black">{val}</span>
        <span className="text-black text-2xl font-semibold">{label}</span>
      </div>
    </div>
  );
};

const Panel = ({ text }) => {
  let uniqueWordsArray = new Set(text.split(" ").filter((word) => word !== ""));
  let vowelArray = text.match(/[aeiouAEIOU]/g);

  return (
    <div className="lg:col-span-2 lg:col-start-4 grid grid-cols-2  m-2 ">
      <div className="">
        <Tile
          label="Words"
          val={text.split(" ").filter((word) => word !== "").length}
        ></Tile>
        <Tile border={true} label="Characters" val={text.length}></Tile>
      </div>

      <div className="border-l-2">
        <Tile label="Unique Words" val={uniqueWordsArray.size}></Tile>
        <Tile
          border={true}
          label="Vowels"
          val={vowelArray ? vowelArray.length : 0}
        ></Tile>
      </div>
    </div>
  );
};

export default Panel;
