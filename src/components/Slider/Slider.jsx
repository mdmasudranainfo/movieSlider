import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { demoData } from "../../lib/demoData";
import { useState } from "react";
import SliderContent from "./SliderContent";

const BannerSlider = () => {
  const [active, setActive] = useState(demoData[0]);
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    afterChange: (index) => {
      let data = demoData?.find((item, i) => index === i);
      setActive(data);
    },
  };

  return (
    <div className="container mx-auto  flex items-center min-h-screen ">
      <div className="grid grid-cols-2  lg:gap-10 items-center mx-4">
        <div className="col-span-2 lg:col-span-1 slider-container relative z-10">
          <Slider {...settings}>
            {demoData?.map((movie, i) => {
              return (
                <div className="slider-item lg:my-20 my-10" key={i}>
                  <div className="">
                    <img
                      className="max-w-full rounded-md"
                      src={movie?.image}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* content */}
        <div className="col-span-2 lg:col-span-1">
          <SliderContent movie={active} />
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
