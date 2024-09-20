import React, { useState } from "react";
import TextArea from "./TextArea";
import Panel from "./Panel";

const Container = () => {
  const [text, settext] = useState("");

  return (
    <div className="border-[1px] border-black border-opacity-70 h-fit min-h-[500px] w-full min-w-[640px] pl-4 m-2 mt-5 rounded-xl p-3 bg-[#F0F0F0] shadow-2xl flex flex-col lg:grid  lg:grid-cols-5 ">
      <TextArea text={text} settext={settext}></TextArea>
      <Panel text={text}></Panel>
    </div>
  );
};

export default Container;
