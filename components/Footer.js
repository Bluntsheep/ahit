import Image from "next/image";
import React from "react";
import logoWhiteBackground from "../public/logoWhitebackground.svg";
import Link from "next/link";

const Footer = () => {
  const links = [
    { link: "network", name: "Network Services" },
    { link: "cctv", name: "CCTV Services" },
    { link: "servers", name: "Server Services" },
    { link: "voip", name: "VoIP Services" },
    { link: "contact", name: "Contact Us" },
    { link: "about", name: "About" },
  ];

  const social = ["Facebook", "Instagram"];

  return (
    <div className=" lg:flex lg:justify-around bg-[#EB8401] pt-10 pb-8 px-6 md:px-32 cursor-pointer">
      <Image
        priority
        height={40}
        className=" self-center"
        src={logoWhiteBackground}
        alt="ahit logo"
      />

      <div className=" lg:w-[40dvw] xl:w-[80dvw]" />
      <div className=" flex mt-6 flex-wrap gap-6 justify-around lg:justify-between w-[100%]">
        <div className=" mt-6">
          <h1 className=" font-Kanit text-white text-2xl">Links</h1>
          <div className=" flex flex-col">
            {links.map((link) => (
              <Link
                href={`/${link.link}`}
                key={link.name}
                className=" font-Kanit text-md  text-slate-200 hover:text-black">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className=" mt-6">
          <h1 className=" font-Kanit text-white text-2xl">Social</h1>
          <div className=" flex flex-col">
            {social.map((social) => (
              <a
                key={social}
                className=" font-Kanit text-md text-slate-200 hover:text-black">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className=" mt-6">
          <h1 className=" font-Kanit text-white text-2xl">Contact Info</h1>
          <div className=" flex flex-col">
            <a className=" font-Kanit text-md text-slate-200  hover:text-black">
              sales@ahit.co.za
            </a>
            <a className=" font-Kanit text-md text-slate-200  hover:text-black">
              021 001 3718
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
