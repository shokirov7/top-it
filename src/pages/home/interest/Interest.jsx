import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Interest.css";
import Title from "../../../components/title/Title";
import Card from "../../../components/card/Card";
import useFetch from "../../../hooks/useFetch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Interest() {
  const { i18n, t } = useTranslation(["home"]);
  const { data, error, isPending } = useFetch("http://localhost:3000/all");
  const duplicatedData = [...data, ...data, ...data, ...data];
  console.log(data);
  return (
    <section className="interest">
      <Title title={t("Может заинтересовать")} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 1,
          },
          435: {
            slidesPerView: 2,
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
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        slidesPerView={4}
        loop={true}
      >
        {duplicatedData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Card
                img={item.img}
                title={item.title}
                price1={item.price1}
                price2={item.price2}
                sale={item.type}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </Swiper>
    </section>
  );
}

export default Interest;
