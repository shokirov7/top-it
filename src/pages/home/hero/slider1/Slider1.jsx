import React from "react";
import "./Slider1.css";
import bg1 from "../../../../assets/img/ellipse1.svg";
import bg2 from "../../../../assets/img/ellipse2.svg";
import bg3 from "../../../../assets/img/big_ellipse.svg";
import bg4 from "../../../../assets/img/phone.png";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Slider1() {
  const { i18n, t } = useTranslation(["home"]);

  return (
    <section className="hero_slider1">
      <div className="hero_slider1_holder">
        <div className="hero_slider1_content">
          <h1 className="hero_slider1_title">Iphone 12 pro max</h1>
          <p className="hero_slider1_desc">
            {t(
              "5G speed. A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes."
            )}
          </p>
          <button className="hero_slider1_button">
            {t("Купить iPhone 12")}
          </button>
        </div>
      </div>
      <img src={bg1} alt="" className="hero_slider_bg1" />
      <img src={bg2} alt="" className="hero_slider_bg2" />
      <img src={bg3} alt="" className="hero_slider_bg3" />
      <img src={bg4} alt="" className="hero_slider_bg4" />
    </section>
  );
}

export default Slider1;
