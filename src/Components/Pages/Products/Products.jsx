import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";
import { HiDotsVertical } from "react-icons/hi";

function Products() {
  const Ndata = [
    {
      id: 1,
      name: "Whitney Francis",
      subname: "September 14, 2016",
      subtitle:
        "Sanctus et elitr accusam nonumy dolor elitr stet dolore et sanctus, sed ipsum kasd gubergren takimata sed. Amet vero et.",
      image: "/assets/book.jpg",
      icons: <FaLinkedin />,
    },
    {
      id: 2,
      name: "Leonard Krasner",
      subname: "September 14, 2016",
      subtitle:
        "Sanctus et elitr accusam nonumy dolor elitr stet dolore et sanctus, sed ipsum kasd gubergren takimata sed. Amet vero et.",
      image: "/assets/book6.jpg",
    },
    {
      id: 3,
      name: "Whitney Francis",
      subname: "September 14, 2016",
      subtitle:
        "Sanctus et elitr accusam nonumy dolor elitr stet dolore et sanctus, sed ipsum kasd gubergren takimata sed. Amet vero et.",
      image: "/assets/book2.jpg",
    },
    {
      id: 4,
      name: "Floyd Miles",
      subname: "September 14, 2016",
      subtitle:
        "Sanctus et elitr accusam nonumy dolor elitr stet dolore et sanctus, sed ipsum kasd gubergren takimata sed. Amet vero et.",
      image: "/assets/book3.jpg",
    },
    {
      id: 5,
      name: "Emily Selman",
      subname: "September 14, 2016",
      subtitle:
        "Sanctus et elitr accusam nonumy dolor elitr stet dolore et sanctus, sed ipsum kasd gubergren takimata sed. Amet vero et.",
      image: "/assets/book4.jpg",
    },
    {
      id: 6,
      name: "Kristin Watson",
      subname: "September 14, 2016",
      subtitle:
        "Sanctus et elitr accusam nonumy dolor elitr stet dolore et sanctus, sed ipsum kasd gubergren takimata sed. Amet vero et.",
      image: "/assets/book5.jpg",
    },
  ];

  return (
    <body className="bg-gray-200 h-full">
      <div
        className="w-full h-[40vh] bg-[url('/banner/banner1.jpg')] bg-no-repeat bg-cover opacity-70"
      ></div>
      <div className="absolute top-[50%] left-[80%] transform -translate-y-[50%] -translate-x-[50%] bg-gradient-to-r from-black via-pink-500 to-light-green-700 bg-clip-text text-transparent text-center py-4 px-7 flex">
        <Link to="/">
          <h1 className="text-xl font-bold font-head">Home</h1>
        </Link>
        <div className="text-black px-3 ">
          <FaLongArrowAltRight className="size-7" />
        </div>
        <h1 className="text-xl font-bold font-head">Products</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="mt-12 md:mt-24">
          <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-7">
            {Ndata.map((item) => (
              <Card key={item.id} sx={{ maxWidth: 345, maxHeight: 500 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title={item.name}
                  subheader={item.subname}
                />
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    className="w-full h-48 object-top"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <MdFavoriteBorder className="size-9" />
                  </Button>
                  <Link to="/singleproduct">
                    <Button>
                      <h5 className="hover:underline decoration-green-900 font-">
                        Read More...
                      </h5>
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </body>
  );
}

export default Products;
