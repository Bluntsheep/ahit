import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const InfoBoxes = ({ svgIcon, btnText, info, heading, location }) => {
  return (
    <div className="flex flex-col w-52 mt-10 md:mt-20 text-center h-72 items-center">
      <Image height={40} src={svgIcon} alt="Network Icon" />

      <h1 className=" font-Kanit text-2xl  text-slate-50 m-5">{heading}</h1>
      <h1 className=" text-sm font-slate-600">{info}</h1>
      <div className=" flex-grow" />
      <div>
        <Link href={`/${location}`}>
          <Button className="bg-slate-600 w-40">{btnText} </Button>
        </Link>
      </div>
    </div>
  );
};

export default InfoBoxes;
