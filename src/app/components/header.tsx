import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
const header = () => {
  return (
    <div className="w-full bg-slate-950 flex place-items-center justify-center absolute top-0 py-2">
      <p>Made By Jack Scottow 2023</p>
      <a href="https://www.github.com/JackScottow" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="px-2 hover:text-slate-500" target="_blank" size="2x" />
      </a>
    </div>
  );
};

export default header;
