import React from "react";
import './MobNav.css'

function MobNav() {
  return (
    <div className="nav_mobile_content">
      <button
        onClick={() => {
          setIsOpened(true);
        }}
        title={t("Профиль")}
        className="nav_user"
      >
        <img src={user} alt="" />
      </button>
      <button title="Избранные" className="nav_fav">
        <img src={heart} alt="" />
      </button>
      <button className="nav_cart">
        <img src={cart} alt="" />
        <span>{t("Корзина")}</span>
      </button>
    </div>
  );
}

export default MobNav;
