import React from 'react'


const Image=[
    {src:'./src/assets/wonder.jpg', alt:'wonder'},
    {src:'./src/assets/wonder.jpg', alt:'wonder'},
    {src:'./src/assets/wonder.jpg', alt:'wonder'},
    
]
    const settings = {
      infinite: 3,
      arrow:false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
function Imagecarousel() {
  return (
    <>
    <div className="container mx-auto p-4">
        {Image.map((image, index) => (
          <div key={index} className="p-4">
            <img src={image.src} alt={image.alt} className="w-[30%] rounded" />
          </div>
        ))}
    </div>
    </>
  )
}

export default Imagecarousel