import React from "react";
import "./About.css";
import Title from "../../../components/title/Title";
import useFetch from "../../../hooks/useFetch";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function About() {
  const { i18n, t } = useTranslation(["home"]);
  const { data, error, isPending } = useFetch("http://localhost:3000/about");
  return (
    <section className="about">
      <Title title={t("Как мы работаем")} />
      <div className="about_grid">
        {data.map((item, i) => {
          return (
            <div key={i} className="about_card">
              <div className="about_card_img">
                <img src={item.img} alt="" />
              </div>
              <h1 className="about_card_title">{item.title}</h1>
              <p className="about_card_desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default About;
