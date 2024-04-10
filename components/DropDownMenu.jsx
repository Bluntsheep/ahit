import React from "react";
import "../app/globals.css";
import network from "../public/network.svg";
import voip from "../public/phone-call.svg";
import cctv from "../public/security-camera.svg";
import about from "../public/info.svg";
import server from "../public/hard-drives.svg";
import contact from "../public/headset.svg";
import Link from "next/link";
import Image from "next/image";

export const DropDownMenu = ({ handleClick }) => {
  const menuItems = [
    {
      link: "network",
      name: "NETWORK",
      icon: network,
    },
    { link: "cctv", name: "CCTV", icon: cctv },
    { link: "servers", name: "SERVERS", icon: server },
    { link: "voip", name: "VOIP", icon: voip },
    { link: "about", name: "ABOUT", icon: about },
    { link: "contact", name: "CONTACT US", icon: contact },
  ];

  return (
    <div className=" flex w-[100%] items-end content-end justify-end">
      <div className=" absolute font-Kanit top-20 flex flex-col flex-clip w-52 mx-6 md:mx-32 rounded-md overflow-hidden place-self-end shadow-md shadow-slate-700 duration-800 ease-linear animate-in slide-in-from-top-96">
        {menuItems.map((item) => (
          <Link
            onClick={handleClick}
            key={item.name}
            href={`/${item.link}`}
            className=" px-3 flex  py-2 text-[#9B9B9B] bg-white hover:bg-slate-50">
            <Image className=" h-6 w-6 mr-3" src={item.icon} alt={item.name} />
            <h1>{item.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
