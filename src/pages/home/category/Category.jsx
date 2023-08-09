import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Category.css";
import { data } from "./CategoryData";
import Title from "../../../components/title/Title";
import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Category() {
  const { i18n, t } = useTranslation(["home"]);
  const duplicatedData = [...data, ...data];

  return (
    <section className="home_category">
      <Title title={t("Категории")} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 1,
          },
          435: {
            slidesPerView: 2,
            navigation: {
              enabled: false,
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
              disabledClass: 'opacity-0',
            },
          },
          575: {
            slidesPerView: 2,
          },
          850: {
            // width: 1050,
            slidesPerView: 3,
          },
          1050: {
            // width: 1050,
            slidesPerView: 4,
          },
        }}
      >
        {duplicatedData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Link className="category_card">
                <img src={item.img} alt="" className="category_card_img" />
                <h3 className="category_card_title">{item.title}</h3>
              </Link>
            </SwiperSlide>
          );
        })}
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </Swiper>
    </section>
  );
}

export default Category;
