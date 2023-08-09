import React from "react";
import "./Card.css";
import bag from '../../assets/img/bag.svg'
import heart from '../../assets/img/heart.svg'
import { Link } from "react-router-dom";

function Card({img, sale, title, price1, price2, id}) {
  return (
    <Link to={`/product/${id}`} className="shop_card" key={id}>
      <div className="shop_img">
        <img src={img} alt="" />
        {sale && <span className={`shop_sale ${sale === 'Под заказ' ? 'blue' : sale === 'Есть в наличии' ? 'orange' : sale === 'Новый' ? 'red' : ''}`}>{sale}</span>
}
      </div>
      <div className="shop_text">
        <h1 className="shop_title">{title}</h1>
        <div className="shop_price1">{price1}</div>
        <div className="shop_price2">{price2}</div>
        <div className="shop_buttons">
            <button className="shop_button">
                <img src={bag} alt="" />
                <span>В корзину</span>
            </button>
            <button title="Добавить в избранные" className="shop_fav">
                <img src={heart} alt="" />
            </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
