import React, { useState, useEffect } from "react";

const AlternatingText = () => {
  const words = ["Developer", "Professional coder", "Programmer"];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="cd-words-wrapper" style={{ fontWeight: "normal",color:"white" }}>
      {words.map((word, index) => (
        <b
          key={index}
          className={index === visibleIndex ? "is-visible" : "is-hidden"}
        >
          {word}
        </b>
      ))}
    </div>
  );
};

export default AlternatingText;
