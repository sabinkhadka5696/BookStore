import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import ContactForm from "./ContactForm";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div>
        <img
          className="w-full h-[40vh] object-cover"
          src="/banner/banner3.jpg"
        ></img>
        <div className="absolute top-[50%] left-[80%] transform -translate-y-[50%] -translate-x-[50%] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-center py-4 px-7 flex items-center justify-center">
          <Link to="/">
            <h1 className="text-xl font-bold font-head">Home</h1>
          </Link>
          <div className="text-black px-3 ">
            <FaLongArrowAltRight className="size-7" />
          </div>
          <h1 className="text-xl font-bold font-head ">Contact us</h1>
        </div>
      </div>
      <div className="text-white text-center bg-gray-700 w-full h-[80vh]">
        <h1 className="text-[3rem] text-center py-[1.5rem] font-head">
          GET IN TOUCH
        </h1>
        <div className=" mt-3 flex flex-wrap md:flex-wrap items-center justify-evenly">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-green-700 rounded-full p-4">
              <FaMapMarkerAlt size={24} className=" " />
            </div>
            <div className="pt-5 text-[1.1rem] font-body">
              <h2 className="font-bold">ADDRESS</h2>
              <h4>Kathmandu office</h4>
              <span>04 street, New road</span>
              <h4 className="mt-5">lalitpur office</h4>
              <span>06 street, gwarko</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FaPhoneAlt className="bg-green-700 rounded-full w-14 h-14 p-4" />
            <div className="pt-2 text-[1.1rem] font-body">
              <h2 className="font-bold">PHONE</h2>
              <h4 className="mt-2">Kathmandu office</h4>
              <span>+977-123456789</span>
              <h4 className="mt-5">lalitpur office</h4>
              <span>+977-123456789</span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <RiMessage2Line className="bg-green-700 rounded-full w-14 h-14 p-4" />
            <div className="pt-2 text-[1.1rem] font-body">
              <h2 className=" font-bold">EMAIL</h2>
              <h4 className="mt-2">Kathmandu office</h4>
              <span>HELLO@gmail.com</span>
              <h4 className="mt-5">lalitpur office</h4>
              <span>nepal@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
