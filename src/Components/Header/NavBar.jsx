import { Collapse, IconButton, Tabs, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";


function NavList() {
    const [activeTab, setActiveTab] = useState("/");

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 font-medium ${
          activeTab === "/products"
            ? "border-b-4 border-blue-900"
            : "text-black"
        }`}
        onClick={() => setActiveTab("/products")}
      >
        <Link
          to="/products"
          className="nav-link font-bold hover:text-blue-500 "
        >
          PRODUCTS
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/teams"
          className={`flex items-center hover:text-blue-500 nav-link  font-bold
          ${
            activeTab === "/distributers"
              ? "border-b-4 border-blue-900"
              : "text-black"
          }`}
          onClick={() => setActiveTab("/distributers")}
        >
          DISTRIBUTERS
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/blog"
          className={`flex items-center hover:text-blue-500 nav-link  font-bold ${
            activeTab === "/news" ? "border-b-4 border-blue-900" : "text-black"
          }`}
          onClick={() => setActiveTab("/news")}
        >
          NEWS/BLOG
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/contact"
          className={`flex items-center hover:text-blue-500 nav-link  font-bold ${
            activeTab === "/contact"
              ? "border-b-4 border-blue-900"
              : "text-black"
          }`}
          onClick={() => setActiveTab("/contact")}
        >
          CONTACT
        </Link>
      </Typography>
    </ul>
  );
}

function NavBar() {


  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("bg-blue-200");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("bg-blue-200");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed bg-transparent z-50 border-none w-full sm:px-6 lg:px-8"
        id="navbar"
      >
        <div className="flex items-center justify-between h-16">
          <Typography as="a" variant="h6" className="cursor-pointer ">
            <Link to="/">
              <img
                src="./src/assets/logo.jpg"
                alt="Logo"
                className="md:w-[3.4rem] w-[3rem] "
              />
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <FaXmark className="h-6 w-6" strokeWidth={2} />
            ) : (
              <IoMenu className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </div>
    </>
  );
}

export default NavBar;
