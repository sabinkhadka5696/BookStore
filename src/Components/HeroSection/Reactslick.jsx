import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Typography } from "@material-tailwind/react";
import { Box, Modal } from "@mui/material";
import ModalLayout from "../modal/ModalLayout";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      aria-label="Next Arrow"
      className="absolute p-2 shadow-lg bg-white opacity-90 backdrop-blur-xl rounded-full cursor-pointer z-40 right-9 bottom-[50%] translate-y-[50%] hover:bg-black hover:text-white"
      onClick={onClick}
    >
      <BsArrowRight className="relative z-40 " size={25} />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      aria-label="Prev Arrow"
      className="absolute p-2 shadow-lg bg-white opacity-90 backdrop-blur-xl rounded-full cursor-pointer z-40 left-9 bottom-[50%] translate-y-[50%] hover:bg-black hover:text-white"
      onClick={onClick}
    >
      <BsArrowLeft className="relative z-40" size={25} />
    </button>
  );
}

function ReactSlick() {
  const [open, setOpen] = React.useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  const settings = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container h-[calc(100vh-5rem)]">
      <Slider {...settings}>
        <>
          <div className="flex md:flex-row flex-col items-center container mx-auto h-[calc(100vh-5rem)]">
            <div className="animate__animated animate__fadeInLeft animate__delay-0s flex-1 pl-7 ">
              <h5 className="text-red-600 text-6xl font-head half-underline">
                RICH DAD
                <span className="px-2 text-blue-900  ">POOR DAD</span>
              </h5>
              <h1 className="pt-4 text-xl font-head ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                odio corporis molestias ad ut inventore, reiciendis, deleniti
                aliquam aspernatur repudiandae, similique error aperiam adipisci
                sequi? Voluptatem, possimus? Harum, molestiae quas.
                <p className="mt-3">For Year</p>
              </h1>
              <div className="font-head py-8 text-justify">
                <button
                  onClick={toggleOpen}
                  className="text-xl text-white bg-red-900 rounded-md py-1.5 px-4 hover:bg-black"
                >
                  Book Now
                </button>
                <Modal
                  open={open}
                  toggleOpen={toggleOpen}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ModalLayout toggleOpen={toggleOpen} />
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>

            <div className="animate__animated  animate__flipInX animate__delay-0s flex-1">
              <img
                src="./src/assets/dad.jpg"
                alt="Book"
                className="h-[85vh]  md:h-[85vh]"
              />
            </div>
          </div>
        </>

        <>
          <div className="flex md:flex-row flex-col  items-center container mx-auto h-[calc(100vh-5rem)]">
            <div className="animate__animated animate__fadeInLeft animate__delay-0s flex-1 pl-7">
              <h5 className="text-red-600 text-5xl font-head half-underline">
                THE PSYCHOLOGY OF
                <span className="px-2 text-blue-900">MONEY</span>
              </h5>
              <h1 className="pt-4 text-xl font-head ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                obcaecati harum libero, temporibus repellendus dolore fugit
                necessitatibus quas, culpa sint corrupti aspernatur deserunt
                quaerat ea reiciendis placeat? Vero, explicabo illum!
              </h1>
              <div className="py-8 font-head">
                <button
                  onClick={toggleOpen}
                  className="text-xl text-white bg-red-900 rounded-md py-1.5 px-4 hover:bg-black font-head"
                >
                  Book Now
                </button>
                <Modal
                  open={open}
                  onClose={toggleOpen}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ModalLayout toggleOpen={toggleOpen} />
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>

            <div className="animate__animated  animate__fadeInRight animate__delay-0s flex-1 h-full w-full">
              <img
                src="./src/assets/book8.jpg"
                alt="Book"
                className="h-[85vh]  md:h-[85vh]  "
              />
            </div>
          </div>
        </>

        <>
          <div className="flex  md:flex-row flex-col items-center container mx-auto h-[calc(100vh-5rem)]">
            <div className="animate__animated animate__fadeInLeft animate__delay-0s flex-1 pl-7 ">
              <h5 className="text-red-600 text-5xl font-head">
                GET
                <span className="text-6xl underline decoration-blue-900 text-blue-900 px-2">
                  BUNDLES
                </span>
                <span className="text-4xl">OF BOOKS</span>
              </h5>
              <p className="pt-4 text-xl font-head ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                obcaecati harum libero, temporibus repellendus dolore fugit
                necessitatibus quas, culpa sint corrupti aspernatur deserunt
                quaerat ea reiciendis placeat? Vero, explicabo illum!
              </p>
              <div className="py-8 font-head">
                <button
                  onClick={toggleOpen}
                  className="text-xl text-white bg-red-900 rounded-md py-1.5 px-4 hover:bg-black"
                >
                  Book Now
                </button>
                <Modal
                  open={open}
                  onClose={toggleOpen}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ModalLayout toggleOpen={toggleOpen} />
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>

            <div className="animate__animated  animate__fadeInUp animate__delay-0s flex-1">
              <img
                src="./src/assets/book7.jpg"
                alt="Book"
                className="h-[85vh]  md:h-[85vh] "
              />
            </div>
          </div>
        </>

        {/* <div className="bg-pink-100">
          <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)]">
            <div className="md:relative md:left-44 md:top-56 font-semibold px-4 md:px-0 animate__animated animate__fadeInLeft animate__delay-0s">
              <h5 className="text-red-600 py-4 text-2xl">
                Bundles are limited-time
              </h5>
              <h1 className="text-5xl md:text-7xl">
                Starting At $10
                <br />
                <p className="md:px-24 text-7xl underline text-red-900 decoration-red-900">
                  Bundles
                </p>
              </h1>
              <div className="py-16 md:px-32">
                <button className="text-xl text-white bg-red-900 rounded-md py-1.5 px-7 hover:bg-black">
                  Book Now
                </button>
              </div>
            </div>
            <div className="md:relative md:left-72 md:top-9 px-4 md:px-0 animate__animated  animate__fadeInTopRight animate__delay-0s">
              <img src="./src/assets/book2.jpg" alt="Book Bundle" />
            </div>
          </div>
        </div>

        <div className="bg-pink-100">
          <div className="flex flex-col md:flex-row h-[calc(100vh-5rem)]">
            <div className="md:relative md:left-60 md:top-56 text-2xl md:text-5xl font-semibold text-black px-4 md:px-0 animate__animated animate__fadeIndown animate__delay-0s">
              <h2 className="py-7">
                Kids's{" "}
                <span className="text-7xl underline decoration-red-900 text-red-900">
                  Featured
                </span>{" "}
                <br />
                Books
              </h2>
              <p className="text-[1.1rem] text-black font-serif py-5 max-w-96 leading-7">
                Introduce your little one to the magic of Christmas carols with
                this enchanting book featuring classic holiday tunes.
              </p>
              <button className="text-xl text-white bg-red-900 rounded-md py-1.5 px-7 mt-4 md:mt-0 hover:bg-black">
                Book Now
              </button>
            </div>
            <div className="md:relative md:left-72 md:top-28 px-4 md:px-0 animate__animated  animate__fadeInUp animate__delay-0s">
              <img src="./src/assets/book3.jpg" alt="Kids Book" />
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}

export default ReactSlick;
