import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ctry1 from "../../../assets/home/slide1.jpg";
import ctry2 from "../../../assets/home/slide2.jpg";
import ctry3 from "../../../assets/home/slide3.jpg";
import ctry4 from "../../../assets/home/slide4.jpg";
import ctry5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={ctry1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white-100">
            Salat
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ctry2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white-100">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ctry3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white-100">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ctry4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white-100">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ctry5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
