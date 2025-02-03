import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Past_events.css";
import images from "../../../assets/Data/past_speakers_gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import image_heading from "../../../assets/Images/BG/events_title.png";
import past_events from "../../../assets/Images/past_speakers.png"
import leftArrow from "../../../assets/Images/leftarrow.png"; // Path to your left arrow image
import rightArrow from "../../../assets/Images/arrow1.png"; // Path to your right arrow image
import register from "../../../assets/Images/register_button.png";

AOS.init({
  once: true,
});

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-prev-arrow"
      onClick={onClick}
      style={{
        backgroundImage: `url(${leftArrow})`,
      }}
    />
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="custom-arrow custom-next-arrow"
      onClick={onClick}
      style={{
        backgroundImage: `url(${rightArrow})`,
      }}
    />
  );
};

const Past_events_esummit = () => {
  const settings = {
    infinite: true,
    easing: "linear",
    autoplaySpeed: 1500,
    autoplay: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="events_esummit" id="epastspeakers">
      <div className="esummit_Slider" id="gallery">
        <div className="text" data-aos="zoom-in" data-aos-duration="300">
          <div className="heading_events">
            <img src={past_events} alt="Events Heading" className="events_title" />
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="300" style={{ width: "86vw", margin: "0 auto" }}>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div
                  className="boxed"
                  style={{
                    boxSizing: "border-box",
                    padding: "2rem",
                
                  
                  }}
                >
                  <img
                    src={image.img}
                    alt={`Slide ${index}`}
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      borderRadius: "0.3rem",
                      height: "100%",
                      objectFit: "fill",
                      border:"5px solid #C9C186",
                      boxShadow: "0 0 10px white"
                    }}
                  />
 
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Past_events_esummit;
