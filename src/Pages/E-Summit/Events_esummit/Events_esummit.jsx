import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Events_esummit.css";
import images from "../../../assets/Data/Events_esummit_gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import image_heading from "../../../assets/Images/BG/events_title.png";
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
    id="esummitevents"
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

const Events_esummit = () => {
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
    <div className="events_esummit">
      <div className="esummit_Slider" id="gallery">
        <div className="text" data-aos="zoom-in" data-aos-duration="300">
          <div className="heading_events">
            <img src={image_heading} alt="Events Heading" className="events_title" />
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
                    padding: "2rem" ,
                
                 
                  }}
                >
                  <img
                    src={image.img}
                    alt={`Slide ${index}`}
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      borderRadius: "0.1rem",
                      height: "100%",
                      objectFit: "fill",
                      border:"5px solid #C9C186",
                      boxShadow: "0 0 10px white"
                    }}
                  />
                 <a href={image.link}> <div className="register"><svg width="260" height="43" viewBox="0 0 260 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_55_86)">
<path d="M217.022 41.8017H43.5833L35.2509 15.2606C37.2789 10.2879 38.4251 7.41216 40.5413 2.13989H220.064C222.18 7.41216 223.326 10.2879 225.354 15.2606L217.022 41.8017Z" fill="url(#paint0_radial_55_86)" fill-opacity="0.2" stroke="#FBF8D7" stroke-width="3.36466" stroke-miterlimit="10"/>
<path d="M82.9535 15.925H82.1326C82.1071 15.925 82.0881 15.925 82.0753 15.925V27.0549C82.0881 27.5258 82.2917 27.8758 82.6862 28.1049C82.8771 28.2067 83.0808 28.2576 83.2971 28.2576H83.5453V28.4485H77.7418V28.2576H77.9899C78.4481 28.2576 78.7981 28.0603 79.0399 27.6658C79.1417 27.4876 79.199 27.2903 79.2117 27.074V16.4787C79.199 16.1478 79.0717 15.8678 78.8299 15.6387C78.6008 15.3969 78.3208 15.276 77.9899 15.276H77.7418V15.0851H84.2898C85.5244 15.0851 86.568 15.3523 87.4207 15.8869C87.8534 16.1541 88.1971 16.5296 88.4516 17.0132C88.7061 17.4841 88.8334 18.025 88.8334 18.6359C88.8334 19.2341 88.7252 19.7877 88.5089 20.2968C88.3052 20.8059 87.9552 21.2513 87.4589 21.6331C86.9753 22.0149 86.3898 22.244 85.7025 22.3204C86.4407 22.5622 87.0898 23.1222 87.6498 24.0004C89.0243 26.2022 90.0425 27.513 90.7043 27.933C91.0352 28.1367 91.4488 28.2449 91.9452 28.2576V28.4485H90.0743C88.9925 28.4485 88.0889 28.3021 87.3634 28.0094C86.638 27.704 86.0462 27.1885 85.588 26.4631C85.3589 26.094 85.0662 25.5403 84.7098 24.8022C84.3535 24.0513 84.118 23.5167 84.0035 23.1986C83.6599 22.4349 83.2271 22.0086 82.7053 21.9195V21.7286H83.2971C83.8698 21.7286 84.3726 21.5568 84.8053 21.2131C85.2507 20.8695 85.5498 20.3095 85.7025 19.5332C85.7535 19.2659 85.7789 19.0559 85.7789 18.9032C85.7789 17.8596 85.5689 17.1087 85.1489 16.6505C84.7289 16.1796 84.188 15.9378 83.5262 15.925C83.3989 15.925 83.208 15.925 82.9535 15.925ZM92.9069 28.2576C93.2378 28.2576 93.5178 28.143 93.7469 27.9139C93.9887 27.6721 94.1159 27.3858 94.1287 27.0549V16.4214C94.0905 15.9759 93.8805 15.645 93.4987 15.4287C93.3078 15.3269 93.1105 15.276 92.9069 15.276H92.6587V15.0851H99.9704C100.365 15.0851 100.798 15.0469 101.269 14.9705C101.739 14.8941 102.07 14.8178 102.261 14.7414V18.0823H102.07V17.8532C102.07 17.2805 101.899 16.8223 101.555 16.4787C101.224 16.1223 100.772 15.9314 100.199 15.906H96.9923V21.4613H99.5122C99.9831 21.4486 100.371 21.2895 100.677 20.9841C100.982 20.6659 101.135 20.2777 101.135 19.8195V19.6477H101.326V24.0576H101.135V23.9049C101.135 23.2686 100.88 22.7977 100.371 22.4922C100.117 22.3522 99.8368 22.2759 99.5313 22.2631H96.9923V27.6276H99.4931C100.422 27.6276 101.199 27.3603 101.822 26.8258C102.459 26.2912 102.929 25.534 103.235 24.554H103.426L102.548 28.4485H92.6587V28.2576H92.9069ZM120.341 22.244H120.055C119.749 22.244 119.514 22.3204 119.348 22.4731C119.183 22.6131 119.1 22.8231 119.1 23.1031V26.2531C118.604 26.9021 117.783 27.4749 116.637 27.9712C115.492 28.4676 114.207 28.7158 112.781 28.7158C110.605 28.7158 108.855 28.0921 107.531 26.8449C106.22 25.5849 105.565 23.8922 105.565 21.7668C105.565 19.6286 106.22 17.9359 107.531 16.6887C108.855 15.4414 110.643 14.8178 112.896 14.8178C113.914 14.8178 114.9 14.9196 115.855 15.1232C116.809 15.3141 117.579 15.556 118.165 15.8487L118.203 19.1323H118.031C117.7 17.8977 117.134 17.0068 116.332 16.4596C115.53 15.8996 114.576 15.6196 113.468 15.6196C111.928 15.6196 110.745 16.1732 109.918 17.2805C109.09 18.375 108.677 19.8832 108.677 21.805C108.677 23.714 109.052 25.2094 109.803 26.2912C110.567 27.373 111.642 27.9139 113.029 27.9139C114.035 27.9139 114.875 27.6276 115.549 27.0549C115.88 26.7621 116.122 26.4185 116.275 26.024V23.1031C116.275 22.8231 116.186 22.6131 116.007 22.4731C115.842 22.3204 115.6 22.244 115.282 22.244H114.977V22.0531H120.341V22.244ZM122.184 28.2576C122.515 28.2576 122.795 28.143 123.024 27.9139C123.266 27.6721 123.393 27.3858 123.406 27.0549V16.4596C123.393 16.1287 123.266 15.8487 123.024 15.6196C122.795 15.3905 122.515 15.276 122.184 15.276H121.936V15.0851H127.739L127.72 15.276H127.491C127.16 15.276 126.874 15.3905 126.632 15.6196C126.39 15.8487 126.27 16.1287 126.27 16.4596V27.0549C126.27 27.3858 126.39 27.6721 126.632 27.9139C126.874 28.143 127.16 28.2576 127.491 28.2576H127.72L127.739 28.4485H121.936V28.2576H122.184ZM130.407 26.6731C130.407 25.7567 130.605 24.974 130.999 24.3249H131.171C131.158 24.4267 131.152 24.5285 131.152 24.6304C131.152 25.5085 131.464 26.2785 132.087 26.9403C132.724 27.5894 133.589 27.9139 134.684 27.9139C135.536 27.9139 136.198 27.7103 136.669 27.303C137.153 26.8958 137.394 26.3803 137.394 25.7567C137.394 25.0058 136.885 24.3504 135.867 23.7904L132.545 21.595C131.884 21.2131 131.406 20.755 131.114 20.2204C130.834 19.6732 130.694 19.1195 130.694 18.5595C130.694 17.3632 131.069 16.4405 131.82 15.7914C132.584 15.1423 133.557 14.8178 134.741 14.8178C135.441 14.8178 136.306 14.8814 137.337 15.0087H138.54L138.292 17.815H138.101C138.101 17.1532 137.853 16.625 137.356 16.2305C136.873 15.8232 136.224 15.6196 135.409 15.6196C134.416 15.6196 133.697 15.925 133.252 16.5359C133.023 16.8287 132.908 17.1596 132.908 17.5287C132.908 18.1396 133.354 18.7059 134.244 19.2277L137.891 21.595C139.036 22.2568 139.609 23.2304 139.609 24.5158C139.609 25.8776 139.144 26.9212 138.215 27.6467C137.299 28.3594 136.077 28.7158 134.55 28.7158C133.684 28.7158 132.883 28.6139 132.144 28.4103C131.419 28.1939 130.885 27.9076 130.541 27.5512C130.452 27.3094 130.407 27.0167 130.407 26.6731ZM149.252 15.8678V27.074C149.265 27.4049 149.386 27.6849 149.615 27.9139C149.857 28.143 150.143 28.2576 150.474 28.2576H150.703L150.722 28.4485H144.919V28.2576H145.167C145.485 28.2576 145.758 28.143 145.988 27.9139C146.229 27.6849 146.363 27.4112 146.388 27.0931V15.8678H143.811C143.226 15.8805 142.761 16.065 142.418 16.4214C142.074 16.7778 141.902 17.2423 141.902 17.815V18.0441H141.711V14.7223C141.889 14.7987 142.208 14.8751 142.666 14.9514C143.137 15.0278 143.569 15.066 143.964 15.066H151.657C152.281 15.0532 152.79 15.0023 153.185 14.9132C153.579 14.8241 153.821 14.7605 153.91 14.7223V18.0441H153.719V17.815C153.719 17.2423 153.547 16.7778 153.204 16.4214C152.86 16.065 152.396 15.8805 151.81 15.8678H149.252ZM156.163 28.2576C156.494 28.2576 156.774 28.143 157.003 27.9139C157.245 27.6721 157.372 27.3858 157.385 27.0549V16.4214C157.347 15.9759 157.137 15.645 156.755 15.4287C156.564 15.3269 156.367 15.276 156.163 15.276H155.915V15.0851H163.227C163.621 15.0851 164.054 15.0469 164.525 14.9705C164.996 14.8941 165.327 14.8178 165.518 14.7414V18.0823H165.327V17.8532C165.327 17.2805 165.155 16.8223 164.811 16.4787C164.48 16.1223 164.029 15.9314 163.456 15.906H160.249V21.4613H162.769C163.239 21.4486 163.628 21.2895 163.933 20.9841C164.239 20.6659 164.391 20.2777 164.391 19.8195V19.6477H164.582V24.0576H164.391V23.9049C164.391 23.2686 164.137 22.7977 163.628 22.4922C163.373 22.3522 163.093 22.2759 162.788 22.2631H160.249V27.6276H162.749C163.679 27.6276 164.455 27.3603 165.078 26.8258C165.715 26.2912 166.186 25.534 166.491 24.554H166.682L165.804 28.4485H155.915V28.2576H156.163ZM174.107 15.925H173.287C173.261 15.925 173.242 15.925 173.229 15.925V27.0549C173.242 27.5258 173.446 27.8758 173.84 28.1049C174.031 28.2067 174.235 28.2576 174.451 28.2576H174.699V28.4485H168.896V28.2576H169.144C169.602 28.2576 169.952 28.0603 170.194 27.6658C170.296 27.4876 170.353 27.2903 170.366 27.074V16.4787C170.353 16.1478 170.226 15.8678 169.984 15.6387C169.755 15.3969 169.475 15.276 169.144 15.276H168.896V15.0851H175.444C176.678 15.0851 177.722 15.3523 178.575 15.8869C179.007 16.1541 179.351 16.5296 179.606 17.0132C179.86 17.4841 179.987 18.025 179.987 18.6359C179.987 19.2341 179.879 19.7877 179.663 20.2968C179.459 20.8059 179.109 21.2513 178.613 21.6331C178.129 22.0149 177.544 22.244 176.857 22.3204C177.595 22.5622 178.244 23.1222 178.804 24.0004C180.178 26.2022 181.196 27.513 181.858 27.933C182.189 28.1367 182.603 28.2449 183.099 28.2576V28.4485H181.228C180.146 28.4485 179.243 28.3021 178.517 28.0094C177.792 27.704 177.2 27.1885 176.742 26.4631C176.513 26.094 176.22 25.5403 175.864 24.8022C175.507 24.0513 175.272 23.5167 175.157 23.1986C174.814 22.4349 174.381 22.0086 173.859 21.9195V21.7286H174.451C175.024 21.7286 175.527 21.5568 175.959 21.2131C176.405 20.8695 176.704 20.3095 176.857 19.5332C176.907 19.2659 176.933 19.0559 176.933 18.9032C176.933 17.8596 176.723 17.1087 176.303 16.6505C175.883 16.1796 175.342 15.9378 174.68 15.925C174.553 15.925 174.362 15.925 174.107 15.925Z" fill="#FBF8D7"/>
</g>
<defs>
<radialGradient id="paint0_radial_55_86" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130.303 21.9708) scale(95.0518 19.8309)">
<stop stop-color="#999474"/>
<stop offset="1" stop-color="#FFF7C2"/>
</radialGradient>
<clipPath id="clip0_55_86">
<rect width="259.079" height="42.0583" fill="white" transform="translate(0.763031 0.94165)"/>
</clipPath>
</defs>
</svg>
</div></a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Events_esummit;
