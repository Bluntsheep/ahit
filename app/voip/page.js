import Image from "next/image";
import React from "react";
import voipImage from "../../public/images/voipPhone-image.png";
import DetailsComponent from "@/components/DetailsComponent";

const voip = () => {
  const componentInfo = [
    {
      image: "voip-image.jpg",
      heading: "VoIP IMPLEMENTATION",
      info: "Our team is committed to facilitating the seamless initiation and integration of your business operations, ensuring a smooth transition to full functionality. We will undertake the necessary steps to get your enterprise up and running efficiently, handling logistical details and technical aspects with precision and expertise. This enables you to concentrate your efforts on the core activities of business development and decision-making, empowering you to steer the direction of your venture towards success. With our support in the initial stages, you can confidently navigate the challenges and opportunities that arise, knowing that the groundwork has been expertly laid for your business endeavors.",
    },
  ];

  return (
    <div className="cursor-default mt-24">
      <div className=" relative flex flex-col md:flex-row py-6 px-6 md:px-32  md:py-32  overflow-hidden bg-gradient-to-r from-[#F9B301] to-[#EB8401] ">
        <div className=" md:w-[50dvw] mb-6 md:mb-0">
          <h1 className=" font-Kanit text-white text-5xl">Voip Services</h1>
          <h5 className=" mt-10 font-semibold md:w-[40dvw]">
            People originally dealt business by talking to each other, so
            naturally it should make sense that when you talk to customers or
            business partners, clarity should be in the list of top priorities.
          </h5>
        </div>
        <div>
          <Image
            className=" h-[100%] w-auto"
            src={voipImage}
            alt="Router Image"
          />
        </div>
      </div>
      <div className=" px-6 md:px-32 py-12 text-center bg-gradient-to-r from-slate-200 to-slate-50">
        <h1 className=" font-Kanit text-transparent bg-clip-text bg-gradient-to-br from-[#EB8401] to-[#F9B301] text-4xl mb-6 md:mb-24">
          Voip IS WHAT WE DO
        </h1>
        {componentInfo.map((info) => (
          <DetailsComponent
            key={info.heading}
            imgae={info.image}
            heading={info.heading}
            info={info.info}
          />
        ))}
      </div>
    </div>
  );
};

export default voip;
