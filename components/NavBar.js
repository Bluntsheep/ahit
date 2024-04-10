"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import logo from "../public/ahitLogo.svg";
import Image from "next/image";
import IconButton from "./IconButton";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { DropDownMenu } from "./DropDownMenu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className=" w-full items-center justify-between fixed bg-white top-0 z-30 ">
      <div className=" w-full py-6 px-5 md:px-32 flex items-center justify-between fixed bg-white top-0 z-30 ">
        <div className=" md:basis-1/4">
          <Link href={"/"}>
            <Image priority height={32} src={logo} alt="ahit logo" />
          </Link>
        </div>
        <div className="md:flex hidden text-xl text-[#A7A7A7] gap-5 basis-2/4 w-[50%] shrink-0 justify-center">
          <Link
            href={"/network"}
            className=" font-Kanit hover:text-gray-500 cursor-pointer">
            NETWORK
          </Link>
          <Link
            href={"/cctv"}
            className=" font-Kanit hover:text-gray-500 cursor-pointer">
            CCTV
          </Link>
          <Link
            href={"/servers"}
            className=" font-Kanit hover:text-gray-500 cursor-pointer">
            SERVERS
          </Link>
          <Link
            href={"/voip"}
            className=" font-Kanit hover:text-gray-500 cursor-pointer">
            VOIP
          </Link>
          <Link
            href={"/about"}
            className=" font-Kanit hover:text-gray-500 cursor-pointer">
            ABOUT
          </Link>
        </div>

        <div className=" md:flex-1 hidden lg:flex items-end justify-end ">
          <Button
            variant="outline"
            onClick={() => router.push("/contact")}
            className="  bg-gradient-to-r from-[#F9B301] to-[#EB8401] text-white ">
            CONTACT US
          </Button>
        </div>
        <div className=" lg:hidden">
          <IconButton
            handleClick={handleClick}
            icon={<HamburgerMenuIcon className=" text-[#EB8401] size-6" />}
          />
        </div>
      </div>
      {active && <DropDownMenu active={active} handleClick={handleClick} />}
    </div>
  );
};

export default NavBar;
