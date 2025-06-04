import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const header = () => {
  return (
    <div className="w-full bg-amber-950 flex place-items-center justify-center absolute top-0 py-2">
      <p>Made By Jack Scottow 2023</p>
      <a href="https://www.jackscottow.com" target="_blank">
        <FontAwesomeIcon icon={faLaptopCode} className="px-2 hover:text-amber-500" target="_blank" size="2xl" />
      </a>
    </div>
  );
};

export default header;
