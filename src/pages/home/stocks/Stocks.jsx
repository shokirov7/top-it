import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Stocks.css";
import useFetch from "../../../hooks/useFetch";
import Title from "../../../components/title/Title";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Stocks() {
  const { i18n, t } = useTranslation(["home"]);
  const [filtered, setFiltered] = useState([]);
  const { data: fetchData } = useFetch("http://localhost:3000/all");

  useEffect(() => {
    const filteredData = fetchData.filter((item) => item.sale);
    setFiltered(filteredData);
  }, [fetchData]);
  return (
    <section className="home_stocks">
      <Title title={t("Выгодные акции")} />

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
        {filtered.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Link to={`/product/${item.id}`} className="sales_card" key={i}>
                <div className="sales_img">
                  <img src={item.img} alt="" />
                  <span className="sales_card_sale">-{item.sale}%</span>
                </div>
                <div className="sales_text">
                  <h1 className="sales_title">{item.title}</h1>
                </div>
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

export default Stocks;

{
  /* <Link className="sales_card" key={i}>
              <div className="sales_img">
                <img src={item.img} alt="" />
                <span className="sales_card_sale">-{item.sale}%</span>
              </div>
              <div className="sales_text">
                <h1 className="sales_title">{item.title}</h1>
              </div>
            </Link> */
}
