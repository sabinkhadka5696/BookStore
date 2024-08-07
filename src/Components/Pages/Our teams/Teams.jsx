import { Card } from "@material-tailwind/react";
import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";


function Teams() {
  const Ndata = [
    {
      id: 1,
      name: "Whitney Francis",
      title: "Copy writer",
      image: "/assets/image1.jpg",
      icons: <FaLinkedin />,
    },
    {
      id: 2,
      name: "Leonard Krasner",
      title: "Senior Designer",
      image: "/assets/image1.jpg",
    },
    {
      id: 3,
      name: "Whitney Francis",
      title: "Copy writer",
      image: "/assets/image1.jpg",
    },
    {
      id: 4,
      name: "Floyd Miles",
      title: "Principal Designer",
      image: "/assets/image1.jpg",
    },
    {
      id: 5,
      name: "Emily Selman",
      title: "VP, User Experience",
      image: "/assets/image1.jpg",
    },
    {
      id: 6,
      name: "Kristin Watson",
      title: "VP, Human Resources",
      image: "/assets/image1.jpg",
    },
  ];

  return (
    <body className="bg-gray-200 h-full">
      <div className="">
        <img
          className="w-full h-[40vh] opacity-60"
          src="/banner/banner.jpg"
        ></img>
        <div className="absolute top-[48%] left-[75%] transform -translate-y-[50%] -translate-x-[50%] bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent text-center py-4 px-7 flex">
          <Link to="/">
            <h1 className="text-xl font-bold font-head">Home</h1>
          </Link>
          <div className="text-black px-3 ">
            <FaLongArrowAltRight className="size-7" />
          </div>
          <h1 className="text-xl font-bold font-head">Teams</h1>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="mt-12 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Ndata.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col items-center text-center md:h-[60vh] py-10"
              >
                <img
                  className="rounded-full w-36 h-36 md:w-44 md:h-44"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="mt-4 text-xl font-semibold">{item.name}</h2>
                <p className="mt-2 text-gray-600">{item.title}</p>
                <div className="flex mt-4 space-x-4">
                  <Link to="https://www.linkedin.com/">
                    <FaLinkedin className="text-gray-600 text-2xl" />
                  </Link>
                  <Link to="https://www.facebook.com/">
                    <FaFacebook className="text-gray-600 text-2xl" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Teams;
