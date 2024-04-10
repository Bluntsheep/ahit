import Image from "next/image";
import React from "react";

const DetailsComponent = ({ imgae, heading, info }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex lg:flex-row gap-6 md:gap-16">
        <div
          className="relative justify-self-center self-center w-[90%] md:w-[80%] lg:w-[30dvw] min-h-64 bg-cover bg-center overflow-hidden max-h-20 "
          style={{
            backgroundImage: `url(/images/${imgae})`,
          }}>
          {/* <Image fill src={`/images/${imgae}`} alt={heading} /> */}
        </div>
        <div className="  flex-1 min-h-64 text-left">
          <h1 className=" font-Kanit text-slate-600  text-2xl mb-3 mt-3 lg:mt-0">
            {heading}
          </h1>
          <p className=" text-sm font-normal tracking-wide text-slate-500">
            {info}
          </p>
        </div>
      </div>
      <hr className=" border-2 border-solid border-slate-200 my-10" />
    </div>
  );
};

export default DetailsComponent;
