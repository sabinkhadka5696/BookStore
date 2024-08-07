import React from "react";
import { Link } from "react-router-dom";

function SingleBlog() {
  return (
    <>
        <div className="container mx-auto">
          <div className="w-full bg-white rounded-lg ">
            <h1 className="text-[3rem] font-semibold mb-7 font-head">
              How reading changes your perspective
            </h1>
            <div class="text-gray-600 mb-6 flex items-center gap-2 font-body">
              <img
                className="w-9 rounded-xl"
                src="/assets/image1.jpg"
              ></img>
              <span>By Jordan Mischev</span> |
              <span>Published on November 14, 2022</span> |
              <span>2 min read</span>
            </div>
            <div className="flex lg:flex-row md:flex-col sm:flex-col space-x-6">
              <img
                className="lg:w-full h-[100vh] rounded-lg object-cover md:w-[50vw]"
                src="/assets/image1.jpg"
              ></img>
              <div className="w-full lg:w-1/4 md:w-3/5 sm:mt-5 ">
                <h2 className="text-[1.7rem] font-semibold mb-4 text-gray-600 hover:underline">
                  Popular Posts
                </h2>
                <ul className="space-y-5 font-head">
                  <li className="flex items-center gap-3">
                    <img className="w-16" src="/assets/image1.jpg"></img>
                    <Link className="hover:text-blue-600" to="">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 border-t-4 pt-4 border-t-cyan-200">
                    <img className="w-16" src="/assets/image1.jpg"></img>
                    <Link className="hover:text-blue-600 " to="/">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Link>
                  </li>
                  <li className="flex items-center gap-3 border-t-4 pt-4 border-b-4 pb-4 border-cyan-200 b">
                    <img className="w-16" src="/assets/image1.jpg"></img>
                    <Link className="hover:text-blue-600 " to="/">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </Link>
                  </li>
                </ul>
                <div className="bg-orange-600 p-6 text-center rounded-lg mt-6 font-head">
                  <h2 className="text-xl font-bold mb-4">
                    Get More Done Together With Us{" "}
                  </h2>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button className="bg-gray-300 hover:bg-gray-400 px-6 rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="text-gray-800 space-y-6 mt-6 w-[68vw] font-body">
              <p>
                Sadipscing sanctus kasd ea stet vero clita aliquyam, ipsum amet
                erat elitr sadipscing no est, kasd rebum tempor amet dolore. Sed
                gubergren sea ipsum sit ut. Gubergren eos aliquyam ut no,
                sanctus gubergren ipsum elitr ea sadipscing sed accusam, est
                accusam takimata sit diam nonumy et sit elitr, erat nonumy.
              </p>
              <p>
                Sadipscing sanctus kasd ea stet vero clita aliquyam, ipsum amet
                erat elitr sadipscing no est, kasd rebum tempor amet dolore. Sed
                gubergren sea ipsum sit ut. Gubergren eos aliquyam ut no,
                sanctus gubergren ipsum elitr ea sadipscing sed accusam, est
                accusam takimata sit diam nonumy et sit elitr, erat nonumy.
              </p>
              <p>
                Sadipscing sanctus kasd ea stet vero clita aliquyam, ipsum amet
                erat elitr sadipscing no est, kasd rebum tempor amet dolore. Sed
                gubergren sea ipsum sit ut. Gubergren eos aliquyam ut no,
                sanctus gubergren ipsum elitr ea sadipscing sed accusam, est
                accusam takimata sit diam nonumy et sit elitr, erat nonumy.
              </p>
              <h2 className="text-[2rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magni ipsa corporis velit minus sunt accusantium illum est fuga! Ducimus, illum vitae hic natus odio nihil pariatur quia voluptatibus! Architecto laudantium cum voluptatum incidunt ratione neque quos aperiam culpa aliquid tempore! Quod mollitia totam adipisci laboriosam consequuntur aperiam, accusamus necessitatibus.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum qui ipsam enim natus, eaque modi sequi? Non, veritatis consequatur. Perspiciatis eligendi quis molestiae corporis sequi perferendis ex tempore. Commodi fugit recusandae sint, eligendi maxime nobis nisi aliquid iste optio consequatur dolorem eveniet eum ratione vero nulla magnam repellendus totam voluptate. Doloremque ex aspernatur necessitatibus, deserunt at exercitationem impedit ratione natus?</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default SingleBlog;
