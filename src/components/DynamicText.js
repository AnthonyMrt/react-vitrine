/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect } from "react";

const DynamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["simple", "clear", "smart", "strong"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loopLetter = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loopLetter();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loopLetter();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(loopLetter, 2500);
        }
      }, 80);
    };
    loopLetter();
  }, []);

  return (
    <span className="dynamic-text">
      <span>simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
