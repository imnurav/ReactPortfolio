import React from "react";
import "./testimonial.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avtar: AVT1,
    name: "Abhishek Kumar",
    review:
      "Lorem Ipsum dolor sit amet consectetur ,adipisicing alit.Persorciatis reprehenderit provident commodi expedita iure fuga nisi",
  },
  {
    avtar: AVT2,
    name: "Tajender Kumar",
    review:
      "Lorem Ipsum dolor sit amet consectetur ,adipisicing alit.Persorciatis reprehenderit provident commodi expedita iure fuga nisi",
  },
  {
    avtar: AVT3,
    name: "Rajesh Sharma",
    review:
      "Lorem Ipsum dolor sit amet consectetur ,adipisicing alit.Persorciatis reprehenderit provident commodi expedita iure fuga nisi",
  },
  {
    avtar: AVT4,
    name: "Raju Sharma",
    review:
      "Lorem Ipsum dolor sit amet consectetur ,adipisicing alit.Persorciatis reprehenderit provident commodi expedita iure fuga nisi",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container testimonials__container"
      >
        {data.map(({ avtar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avtar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
