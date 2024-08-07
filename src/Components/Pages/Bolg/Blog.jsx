import { Button, Card, Typography } from "@material-tailwind/react";
import { CardActions, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";



function Blog() {
 const [isVisible, setIsVisible] = useState(false);

 const handleScroll = () => setIsVisible(window.scrollY > 500);
 const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

 useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);




  const items = [
    {
      id: 1,
      image: "/assets/image1.jpg",
      subname: "Co-Founder / CTO",
      date: "Mar 16,2020",
      header: "Marketing",
      title: "How reading changes your perspective",
      subtitle:
        "Nullam interdum nibh dolor, at aliquam sem pulvinar a. Donec eu turpis et risus pulvinar pellentesque ac et elit. Sed a consequat velit. Aliquam erat volutpat. Maecenas lobortis felis nec ante elementum, venenatis pharetra diam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 2,
      image: "/assets/image1.jpg",
      subname: "Co-Founder / CTO",
      date: "Mar 16,2020",
      header: "Marketing",
      title: "How to Create magazine",
      subtitle:
        "Nullam interdum nibh dolor, at aliquam sem pulvinar a. Donec eu turpis et risus pulvinar pellentesque ac et elit. Sed a consequat velit. Aliquam erat volutpat. Maecenas lobortis felis nec ante elementum, venenatis pharetra diam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 3,
      image: "/assets/image1.jpg",
      subname: "Co-Founder / CTO",
      date: "Mar 16,2020",
      header: "Marketing",
      title: "How to Create magazine",
      subtitle:
        "Nullam interdum nibh dolor, at aliquam sem pulvinar a. Donec eu turpis et risus pulvinar pellentesque ac et elit. Sed a consequat velit. Aliquam erat volutpat. Maecenas lobortis felis nec ante elementum, venenatis pharetra diam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      id: 4,
      image: "/assets/image1.jpg",
      subname: "Co-Founder / CTO",
      date: "Mar 16,2020",
      header: "Marketing",
      title: "How to Create magazine",
      subtitle:
        "Nullam interdum nibh dolor, at aliquam sem pulvinar a. Donec eu turpis et risus pulvinar pellentesque ac et elit. Sed a consequat velit. Aliquam erat volutpat. Maecenas lobortis felis nec ante elementum, venenatis pharetra diam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
  ];
  return (
    <>
      <div>
        <img className="w-full h-[40vh] bg-[url('/banner/banner2.jpg')] bg-no-repeat bg-cover"></img>
        <div className="absolute top-[48%] left-[87%] transform -translate-y-[50%] -translate-x-[50%] bg-gradient-to-r from-white via-pink-500 to-white bg-clip-text text-transparent text-center py-4 px-7 flex">
          <Link to="/">
            <h1 className="text-xl font-bold font-head">Home</h1>
          </Link>
          <div className="text-black px-3 ">
            <FaLongArrowAltRight className="size-7" />
          </div>
          <h1 className="text-xl font-bold font-head">Blog</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-semibold font-head">
            From the blog
          </h3>
          <p className="mt-4 text-lg md:text-xl text-gray-600 font-body">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  ">
          {items.map((item) => (
            <Card key={item.id}>
              <Link to="/">
                {" "}
                <CardMedia component="img" alt={item.name} image={item.image} />
              </Link>
              <CardContent>
                <Link to="/SingleBlog">
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="hover:text-red-300 font-head"
                    component="div"
                  >
                    {item.title}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  className="py-3 font-body"
                  color="text.secondary"
                >
                  {item.subtitle}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/singleblog">
                  <Button
                    className="bg-red-300 hover:bg-red-500 font-head"
                    size="small"
                    onClick={scrollToTop}
                  >
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;
