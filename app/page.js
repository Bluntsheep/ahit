"use client";
import Image from "next/image";
import network from "../public/network-icon.svg";
import server from "../public/server-icon.svg";
import serverWhite from "../public/server-icon-white.svg";
import wifi from "../public/wifi-icon.svg";
import cables from "../public/cables-icon.svg";
import voipWhite from "../public/voip-icon-white.svg";
import networkWhite from "../public/network-icon-white.svg";
import cctvWhite from "../public/cctv-icon-white.svg";
import mainimage from "../public/images/homepage-image.jpg";
import InfoBoxes from "@/components/InfoBoxes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const infoBoxData = [
    {
      svgIcon: networkWhite,
      heading: "Network",
      info: "From wireless access point installations to retrofitting, and everything in between, we do it all.",
      btnText: "Get Connected",
      location: "network",
    },
    {
      svgIcon: cctvWhite,
      heading: "CCTV",
      info: "Keeping tabs on your livelihood is important. We ensure that you have the tools at your disposal to ensure it.",
      btnText: "Keep an Eye",
      location: "cctv",
    },
    {
      svgIcon: serverWhite,
      heading: "Servers",
      info: "The difference between the 21st century and the stone age is the server infrastructure being in use. We guide you that future.",
      btnText: "Power Up",
      location: "servers",
    },
    {
      svgIcon: voipWhite,
      heading: "VoIp",
      info: "A dropped call can make or break an important business deal. We work to make sure that you don't have to worry about problems such as these.",
      btnText: "Hear it All",
      location: "voip",
    },
  ];

  const [reviewDisplay, setreviewDisplay] = useState(0);

  const reviews = [
    {
      name: "Madré",
      review:
        "You guys are amazing. Thank you so much for all your effort and willingness. Will most definitely recommend you.",
    },
    {
      name: "Clifford",
      review:
        "Working with Marnus was pretty great. I had some issues in a networking department where my knowledge was somewhat lacking. I a bit of guidance and a lot of patience later (from Marnus' side), I'm finally able to monitor traffic passing through my network and block what I want to block (even remotely!). Definitely recommended, 5 stars hands down.",
    },
    {
      name: "Selestie",
      review:
        "They are available 24/7 and is always ready to assist. Keep it up!",
    },
    {
      name: "Marius",
      review:
        "Very knowledgeable in their field and excellent work done. And the fact that they can be contacted 24/7, makes it very handy.",
    },
  ];

  const click = () => {
    if (reviewDisplay === reviews.length - 1) {
      setreviewDisplay(0);
    } else {
      setreviewDisplay(reviewDisplay + 1);
    }
  };

  useEffect(() => {
    setTimeout(function () {
      click();
    }, 10000);
  }, [reviewDisplay]);

  return (
    <div className="cursor-default mt-24">
      <div className=" relative flex flex-col lg:flex-row px-6 lg:mb-12 lg:px-32 ">
        <Image
          className=" w-96  my-4 lg:my-16 self-center justify-self-center duration-1000 animate-in slide-in-from-left-96 ease-in"
          src={mainimage}
          alt="home page image"
        />

        <div className=" mb-12 lg:mb-0 mx-6 lg:mx-0 lg:ml-16 lg:w-[45] flex-col md:flex py-6  content-center justify-around ">
          <div>
            <h1 className=" font-Kanit mb-8  text-5xl xl:text-6xl text-[#EB8401] xl:leading-tight duration-1000 animate-in slide-in-from-top-96 ease-in">
              I.T. support at every important hour of the day.
            </h1>
          </div>

          <div className=" duration-1000 animate-in slide-in-from-right-96 ease-in">
            <h1 className="mb-6 lg:text-2xl font-bold ">
              Looking for the right people to talk to you?
            </h1>
            <h1 className="mb-16 lg:text-1xl font-semibold text-[#B0B0B0]">
              We understand technology can be troublesome at the most
              inconvenient of times, which is why we always make sure our
              clients have a helping hand to grab on to.
            </h1>
          </div>
          <div>
            <div className=" flex justify-around  ">
              <Image
                className="ease-in-out hover:-translate-y-3 hover:scale-150 duration-300"
                height={35}
                src={network}
                alt="Network Icon"
              />
              <Image
                className="ease-in-out hover:-translate-y-3 hover:scale-150 duration-300"
                height={35}
                src={server}
                alt="Network Icon"
              />
              <Image
                className="ease-in-out hover:-translate-y-3 hover:scale-150 duration-300"
                height={35}
                src={wifi}
                alt="Network Icon"
              />
              <Image
                className="ease-in-out hover:-translate-y-3 hover:scale-150 duration-300"
                height={35}
                src={cables}
                alt="Network Icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" md:px-32 py-16 bg-gradient-to-r from-[#F9B301] to-[#EB8401]">
        <div className="flex flex-col items-center">
          <h1 className=" font-Kanit text-white text-4xl md:text-5xl transition ">
            Our core services
          </h1>
          <h1 className=" font-Kanit text-black md:text-2xl mt-5">
            Looking for the right people to talk to you?
          </h1>

          <div className="flex flex-wrap justify-around px-6 md:px-32 w-[90dvw] ">
            {infoBoxData.map((info) => (
              <InfoBoxes
                key={info.heading}
                svgIcon={info.svgIcon}
                info={info.info}
                heading={info.heading}
                btnText={info.btnText}
                location={info.location}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:flex px-6 md:px-32 py-16 items-center md:h-[50dvh] h-[80dvh] justify-between overflow-hidden">
        <div className=" font-Mate italic my-6 text-4xl lg:w-[30dvw] lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#EB8401] to-[#F9B301]">
          Clients opinions of our service
        </div>

        <div className="relative lg:w-[50%] md:h-70 h-[30dvh]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={` ${
                index === reviewDisplay
                  ? "visible duration-1000 animate-in slide-in-from-right-96 ease-linear"
                  : "hidden"
              }`}>
              <h1 className="text-2xl font-bold mb-6 text-slate-700">
                {review.name}
              </h1>
              <h1 className=" font-Mate text-md font-semibold text-slate-500">
                " {review.review} "
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
