import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Top.css";
import Title from "../../../components/title/Title";
import Card from "../../../components/card/Card";
import useFetch from "../../../hooks/useFetch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Top() {
  const { data, error, isPending } = useFetch("http://localhost:3000/all");
  // console.log(data);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const { i18n, t } = useTranslation(["home"]);
  const shuffledArray = shuffleArray(data);
  const duplicatedData = [
    ...shuffledArray,
    ...shuffledArray,
    ...shuffledArray,
    ...shuffledArray,
  ];
  console.log(shuffledArray);
  return (
    <section className="top">
      <Title title={t("Хиты продаж")} />
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

export default Top;
