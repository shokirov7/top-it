import React, { useEffect, useState } from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import heart from "../../assets/img/heart.svg";
import heart2 from "../../assets/img/heart2.svg";
import useFetch from "../../hooks/useFetch";
import item1 from "../../assets/img/33.svg";
import item2 from "../../assets/img/item2.svg";
import item3 from "../../assets/img/item3.svg";
import item4 from "../../assets/img/item4.svg";
import item5 from "../../assets/img/item5.svg";
import item6 from "../../assets/img/item6.svg";

function Product() {
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:3000/all/${id}`);
  const [img, setImg] = useState(data.img);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      setImg(data.img);
    }
  }, [data]);

  console.log(data);

  // card data
  const data2 = [
    {
      img: item1,
      text: "Покупайте товары по перечислению",
    },
    {
      img: item2,
      text: "Способы получения: самовывоз, доставка",
    },
    {
      img: item3,
      text: "Гарантия и условия возврата",
    },
    {
      img: item4,
      text: "Способы оплаты товара: HUMO, UzCard, терминал, перечисление, наличные",
    },
    {
      img: item5,
      text: "Бонусная система с кэшбеком",
    },
    {
      img: item6,
      text: `Доставка: по Ташкенту "до этажа"`,
    },
  ];

  return (
    <div className="product">
      <nav className="product_top">
        <Link to="/">Главная</Link>
        <FontAwesomeIcon icon={faAngleRight} />
        <Link to="/product">{data.title}</Link>
      </nav>
      <h1 className="product_main_title">{data.title}</h1>
      <div className="product_top_type">
        {data.sale && <span>-{data.sale}%</span>}
        {data.type && <span>{data.type}</span>}
      </div>
      <div className="product_grid">
        <div className="product_block">
          <img
            onMouseEnter={() => {
              setImg(data.img);
            }}
            src={data.img}
            alt=""
          />
          <img
            onMouseEnter={() => {
              setImg(data.img2);
            }}
            src={data.img2}
            alt=""
          />
          <img
            onMouseEnter={() => {
              setImg(data.img3);
            }}
            src={data.img3}
            alt=""
          />
        </div>
        <div className="product_block">
          <img src={img} alt="" />
        </div>
        <div className="product_block">
          <div className="product_price">
            <span className="product_price1">{data.price1}</span>
            <h3 className="product_price2">{data.price2}</h3>
            <div className="product_buttons">
              <button>В корзину</button>
              <button>
                <img src={heart2} alt="" />
              </button>
            </div>
          </div>
          <div className="product_colour">
            <h3 className="product_colour_title">Цвет</h3>
            <div className="product_colours_holder">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="product_specs">
            <h3 className="product_specs_title">Основные характеристики</h3>
            <div className="specs_grid">
              <div className="specs_block">
                <span>Бренд:</span>
                <span>{data.brand}</span>
              </div>
              <div className="specs_block">
                <span>Модель:</span>
                <span>{data.model}</span>
              </div>
              <div className="specs_block">
                <span>Габариты (ШxВxТ) мм:</span>
                <span>{data.size}</span>
              </div>
              <div className="specs_block">
                <span>Цвет:</span>
                <span>{data.colour}</span>
              </div>
              <div className="specs_block">
                <span>Страна производитель:</span>
                <span>{data.made}</span>
              </div>
              <div className="specs_block">
                <span>Вес (гр):</span>
                <span>{data.weight}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product_cards">
        {data2.map((item, i) => {
          return (
            <div key={i} className="product_card">
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
