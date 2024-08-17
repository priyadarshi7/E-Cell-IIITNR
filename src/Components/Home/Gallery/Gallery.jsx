// import React from "react";
// const Gallery = () => {
//   return (
//     <div className="gallery">
 
//     </div>
//   )
// }

// export default Gallery
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import images from "../../../assets/Data/GalleryImages.jsx"
const Gallery = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  ;

  return (
    <div className='Slider'>
      <div className='text'><div className='heading'>OUR GALLERY</div></div>
    <div style={{ width: '86vw', margin: '0 auto'  }}  >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}   >
            <div className='boxed'   style={{ 
                boxSizing:'border-box',
                width: '100%', 
                padding:'0.7rem',
                height: '16rem',
                boxSizing:'border-box',
              }}>
            <img 
              src={image} 
              alt={`Slide ${index}`}
              
              style={{ 
                boxSizing:'border-box',
                width: '100%',
                borderRadius: '0.1rem', 
                height:'100%',
                objectFit: 'cover',
                border: '0.1rem solid #0803FF',
                boxSizing:'border-box',
              }} 
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Gallery;
