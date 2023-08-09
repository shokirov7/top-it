import React from "react";
import "./Slider2.css";
import bg1 from "../../../../assets/img/grad_ellipse.svg";
import bg2 from "../../../../assets/img/grad_ellipse2.svg";
import bg3 from "../../../../assets/img/grad_ellipse3.svg";
import bg4 from "../../../../assets/img/phone2.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Slider2() {
  const { i18n, t } = useTranslation(["home"]);
  return (
    <section className="hero_slider1 hero_slider2">
      <div className="hero_slider1_holder hero_slider2_holder">
        <div className="hero_slider1_content hero_slider2_content">
          <h1 className="hero_slider1_title hero_slider2_title">
            Iphone 14 pro max
          </h1>
          <p className="hero_slider1_desc hero_slider2_desc">
            {t(
              "5G speed. A16 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 14 has it all — in two perfect sizes."
            )}
          </p>
          <button className="hero_slider1_button hero_slider2_button">
            {t("Купить iPhone 12")}
          </button>
        </div>
      </div>
      <img src={bg1} alt="" className="hero_slider2_bg1" />
      <img src={bg2} alt="" className="hero_slider2_bg2" />
      <img src={bg3} alt="" className="hero_slider2_bg3" />
      <img src={bg3} alt="" className="hero_slider2_bg3" />
      <img src={bg3} alt="" className="hero_slider2_bg3_2" />
      <img src={bg4} alt="" className="hero_slider_bg4 hero_slider2_bg4" />
    </section>
  );
}

export default Slider2;
