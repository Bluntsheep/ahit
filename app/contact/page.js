"use client";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const message = useRef();
  const honey = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = name.current.value;
    const userPhone = phone.current.value;
    const userEmail = email.current.value;
    const userMessage = message.current.value;
    const honeypot = honey.current.value;

    const data = {
      name: userName,
      phone: userPhone,
      email: userEmail,
      message: userMessage,
    };

    if (honeypot != "") {
      console.log("Your a bot");
    } else {
      console.log("sendin Message");
      await fetch("/api", {
        method: "POST",
        body: JSON.stringify(data),
      });
    }
  };

  return (
    <div className="cursor-default mt-24">
      <div className=" mx-6 md:mx-32 my-12 md:my-32 ">
        <h1 className=" font-Kanit text-3xl mb-6 text-[#EB8401]">
          Get in touch
        </h1>
        <div className=" flex flex-col-reverse md:flex md:flex-row gap-20">
          <div>
            <h2 className="text-2xl mb-6 text-slate-500 font-semibold">
              Send us an email
            </h2>
            <div>
              <form
                onSubmit={handleSubmit}
                autoComplete="false"
                className=" md:w-96">
                <label
                  className=" text-md text-[#EB8401] font-semibold"
                  htmlFor="name">
                  Your name:
                </label>
                <input
                  data-lpignore="true"
                  placeholder="Name"
                  type="text"
                  id="name"
                  ref={name}
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className=" mb-6 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />

                <label
                  className=" text-md text-[#EB8401] font-semibold"
                  htmlFor="phone">
                  Phone number:
                </label>

                <input
                  data-lpignore="true"
                  placeholder="Phone number"
                  type="text"
                  id="phone"
                  ref={phone}
                  // // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
                  className="mb-6 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label
                  className=" text-md text-[#EB8401] font-semibold"
                  htmlFor="email">
                  Email address:
                </label>
                <input
                  data-lpignore="true"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  // value={email}
                  ref={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="mb-6 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label
                  className=" text-md text-[#EB8401] font-semibold"
                  htmlFor="message">
                  Message:
                </label>
                <textarea
                  placeholder="Message"
                  type="text"
                  rows={5}
                  id="message"
                  // value={message}
                  ref={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  className=" scroll-m-11 mb-6 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <input
                  data-lpignore="true"
                  placeholder="honey"
                  type="text"
                  id="honey"
                  // value={email}
                  ref={honey}
                  // onChange={(e) => setEmail(e.target.value)}
                  className=" hidden mb-6 peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <Button
                  className="bg-gradient-to-r from-[#F9B301] to-[#EB8401] text-white hover:bg-slate-400 hover:text-slate-800"
                  type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className=" flex flex-col mt-3 md:mt-0">
            <h2 className="text-2xl mb-6 text-slate-500 font-semibold">
              Reach out directly
            </h2>
            <a
              href="mailto:sales@ahit.co.za"
              className=" text-slate-500 hover:text-slate-700 font-medium mb-3">
              <FontAwesomeIcon icon={faEnvelope} className=" h-4 mr-2" />
              sales@ahit.co.za
            </a>
            <a
              href="tel:0210113718"
              className=" text-slate-500 hover:text-slate-700 font-medium">
              <FontAwesomeIcon icon={faPhone} className=" h-4 mr-2" /> 021 001
              3718
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
