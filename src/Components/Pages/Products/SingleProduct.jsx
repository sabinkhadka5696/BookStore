import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHeart, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

function SingleProduct() {
  const [showImage, setShowImage] = useState("/assets/wonder.jpg");

  return (
    <div className="content">
      <div className="flex gap-10 md:flex-row flex-col">
        {/*parent*/}
        <div className="flex-1 gap-3 flex flex-col">
          {/*child*/}

          <img src={showImage} className="aspect-square object-contain max-w-[32rem]" />
          <div className="flex gap-3 flex-wrap">
            <img
              src="/assets/wonder.jpg"
              width={40}
              className="cursor-pointer"
              onClick={() => setShowImage("/assets/wonder.jpg")}
            />
            <img
              src="/assets/book5.jpg"
              width={40}
              className="cursor-pointer"
              onClick={() => setShowImage("/assets/book5.jpg")}
            />
            <img
              src="/assets/book6.jpg"
              width={40}
              className="cursor-pointer"
              onClick={() => setShowImage("/assets/book6.jpg")}
            />
            <img
              src="/assets/book4.jpg"
              width={40}
              className="cursor-pointer"
              onClick={() => setShowImage("/assets/book4.jpg")}
            />
          </div>
        </div>
        {/*child*/}
        <div className=" md:relative flex-[1.3]">
          <h3 className="text-2xl font-semibold font-head">
            Cup Cake Diaries
          </h3>
          <span className="text-gray-500 font-body">Brand: River</span>
          <p className="text-4xl py-2 font-head">$115.00</p>
          <hr className="my-4" />
          <p className="font-semibold font-head">Sold By: WPBINGO</p>
          <ul className="list-disc text-gray-500 pl-5 my-4 font-body">
            <li>For kids</li>
            <li>First published in 2014</li>
            <li>Copyright by Wpbingo</li>
          </ul>
          <button className="bg-gray-400 w-full md:w-2/3 py-2 cursor-not-allowed mb-4 font-head">
            OUT OF STOCK
          </button>
          <div className="flex items-center space-x-4 mb-4">
            <Link to="">
              <FaHeart className="border-2 w-12 h-12 p-2 hover:bg-green-900 hover:text-white" />
            </Link>
            <span className="font-head">Add to Wishlist</span>
          </div>
          <div className="text-black font-body">
            <p>Categories: Classic Fiction, Romance, Supplements</p>
            <p>Tags: Hot, Trend</p>
            <p>Author: Alec Hansen</p>
            <div className="flex space-x-4 mt-4">
              <FaFacebookSquare className="w-8 h-8 hover:text-green-900 cursor-pointer" />
              <FaSquareTwitter className="w-8 h-8 hover:text-green-900 cursor-pointer" />
              <FaLinkedin className="w-8 h-8 hover:text-green-900 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
