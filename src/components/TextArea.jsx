import React, { useState } from "react";

const TextArea = ({ text, settext }) => {
  // const [text, settext] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setError(true);
      newText = newText.replace("<script>", "");
      settext(newText);
    } else {
      if (error) {
        setError(false);
      }
      settext(newText);
    }
  };

  return (
    <div className="flex flex-col  justify-between col-span-3 h-full min-h-[350px] w-full bg-white rounded-xl text-lg font-inter shadow-xl focus-within:scale-[1.02] transition-all duration-300 ease-in-out ">
      <textarea
        value={text}
        placeholder="Enter your text here ..."
        className=" placeholder:italic flex-grow outline-none resize-none text-pretty rounded-xl p-3 "
        onChange={handleChange}
      ></textarea>

      {error && (
        <span className="m-2 text-red-500 text-lg">
          Warning no &lt;script&gt; tags allowed
        </span>
      )}
    </div>
  );
};

export default TextArea;
