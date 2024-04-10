import Image from "next/image";
import React from "react";
import cctvImage from "../../public/images/cctvCamera-image.png";
import DetailsComponent from "@/components/DetailsComponent";

const Cctv = () => {
  const componentInfo = [
    {
      image: "cctv-image.jpg",
      heading: "CCTV & NVR INSTALLATIONS",
      info: "Our team specializes in overseeing the entire process of setting up and completing your CCTV system, ensuring a seamless experience from inception to completion. Collaborating closely with you, we assess and pinpoint the specific areas requiring surveillance, tailoring our approach to meet your individual needs and preferences.",
    },
    {
      image: "monitoring-image.jpg",
      heading: "OFF-SITE MONITORING SETUP",
      info: "Configuring your business for remote monitoring demands meticulous attention to detail and strategic planning. Ensuring seamless accessibility from diverse locations, whether it be the comfort of your living room or the serenity of a hammock in Hawaii, is paramount to our approach. Through rigorous battle testing, we meticulously examine your system to fortify its reliability and availability under various circumstances. Our goal is to empower you with the ability to oversee and manage your business operations effortlessly, regardless of your physical location. By implementing robust configurations, we provide you with the peace of mind to navigate your business affairs with confidence, knowing that your systems are consistently accessible and secure.",
    },
    {
      image: "maintenance-image.jpg",
      heading: "SCHEDULED MAINTENANCE",
      info: "Our planet, a complex ecosystem teeming with diverse forms of life, can often seem like nothing more than a vast ball of dust when viewed from afar. Yet, amidst this cosmic backdrop, we are tasked with the challenge of distinguishing between intruders and benign inhabitants like spiders who innocuously weave their webs. It is imperative to implement robust systems and practices to enable accurate identification, safeguarding against potential threats while fostering harmony within our environments. Through meticulous observation and strategic planning, we endeavor to uphold both security and ecological balance, ensuring the coexistence of all beings on this remarkable celestial body.",
    },
    {
      image: "structuredCabling-image.jpg",
      heading: "STRUCTURED CABLING",
      info: "Structured cabling, forms the foundation of a reliable and scalable network infrastructure. It involves the meticulous installation of standardized cabling systems, including copper and fiber optic cables, along with associated hardware such as racks, patch panels, and connectors. Companies invest in structured cabling to support various communication needs, including data, voice, and video transmission, while ensuring high performance, minimal downtime, and ease of maintenance. A well-designed structured cabling system enables efficient data flow, simplifies network management, and accommodates future technology upgrades with ease. By adhering to industry standards and best practices, companies can optimize their network connectivity, enhance productivity, and lay a resilient groundwork for their evolving business needs.",
    },
  ];

  return (
    <div className="cursor-default mt-24">
      <div className=" relative flex flex-col md:flex-row py-6 px-6 md:px-32  md:py-32  overflow-hidden bg-gradient-to-r from-[#F9B301] to-[#EB8401] ">
        <div className=" md:w-[50dvw] mb-6 md:mb-0">
          <h1 className=" font-Kanit text-white text-5xl">CCTV Services</h1>
          <h5 className=" mt-10 font-semibold md:w-[40dvw]">
            Remotely checking in on your business from a beach on the other side
            of the planet can now easily be done in two clicks with a capable
            CCTV system. Gone are the days where you would be rolling around at
            night, worrying if your business will still be standing tomorrow.
          </h5>
        </div>
        <div>
          <Image
            className=" h-[100%] w-auto"
            src={cctvImage}
            alt="Router Image"
          />
        </div>
      </div>
      <div className=" px-6 md:px-32 py-12 text-center bg-gradient-to-r from-slate-200 to-slate-50">
        <h1 className=" font-Kanit text-transparent bg-clip-text bg-gradient-to-br from-[#EB8401] to-[#F9B301] text-4xl mb-6 md:mb-24">
          CCTV IS WHAT WE DO
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

export default Cctv;
