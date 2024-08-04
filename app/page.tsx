'use client'

import Link from "next/link";
import { useState } from "react";
import { BiCopy } from "react-icons/bi";
export default function HomePage() {

  const [message, setMessage] = useState('');
  
  
  const handleCopy = () => {
    navigator.clipboard
    .writeText("npm i @apurvkashyap/cssshort")
    .then(() => setMessage('Copied successfully! Happy Coding 🍀'))
    .catch((err) => console.error("Failed to copy text: ", err));
  };
  return (
    <div className="">
    <div className="card mb-5 gap-6 fcc">
      <div className="flex justify-center items-center gap-4 px-6 py-1 bg-purple-100 rounded ">
        <p  > npm i @apurvkashyap/cssshort </p>
        <BiCopy onClick={handleCopy} className="cursor-pointer "/>

      </div>
     {message && <p>{message}</p>}
        <Link className="px-6 py-1 bg-purple-100 rounded " href={"https://www.npmjs.com/package/@apurvkashyap/cssshort"}>
          NPM Page
        </Link>
        <Link className="px-6 py-1 bg-purple-100 rounded " href href={"https://github.com/ApurvaBr11/shortcss/tree/main"}>
          Github Page
        </Link>
        <Link className="px-6 py-1 bg-purple-100 rounded " href href={"./Docs"}>
          Docs Page
        </Link>
      </div>
      <div className="h-[1px] fade-effect2"></div>
   </div>
  );
}
