import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import dash from "../../assets/img/dashboard.png";
import search from "../../assets/img/search.svg";
import user from "../../assets/img/user_add.svg";
import heart from "../../assets/img/heart.svg";
import cart from "../../assets/img/cart.svg";
import i18next from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import user2 from "../../assets/img/user.svg";
import shop from "../../assets/img/shop.svg";
import list from "../../assets/img/list.svg";
import logout from "../../assets/img/logout.svg";

function Navbar() {
  const { isOpened, setIsOpened, isReg, setIsReg, isLogin, setIsLogin } =
    useContext(Context);
  const [menu, setMenu] = useState(false);

  const { i18n, t } = useTranslation(["home"]);
  const handleChange = (e) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
  };

  const handleLogin = () => {
    setIsOpened(true);
    setIsReg(false);
    setIsLogin(true);
    setMenu(false);
  };
  const handleReg = () => {
    setIsOpened(true);
    setIsReg(true);
    setIsLogin(false);
    setMenu(false);
  };

  return (
    <nav className="navbar">
      <header className="nav_top">
        <div className="nav_top_content">
          <div className="nav_top-left">
            <Link to="/" className="nav_logo1">
              <img src={logo} alt="" />
            </Link>
            <select name="" id="" value={i18n.language} onChange={handleChange}>
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
            </select>
            <NavLink>{t("О магазине")}</NavLink>
            <NavLink>{t("Условия доставки")}</NavLink>
          </div>
          <div className="nav_top-right">
            <NavLink>
              +998 (99) <b>123 45 67</b>
            </NavLink>
          </div>
        </div>
      </header>
      <main className="nav_main">
        <div className="nav_main_content">
          <Link to="/" className="nav_logo">
            <img src={logo} alt="" />
          </Link>
          <button className="nav_dash">
            <img src={dash} alt="" />
            <span>{t("Каталог")}</span>
          </button>
          <div
            onClick={() => {
              setMenu(true);
            }}
            className="nav_mini_menu"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
          </div>
          <div className={menu ? "nav_mini_holder active" : "nav_mini_holder"}>
            <div className="mini_holder_top">
              <Link to="/" className="nav_logo1">
                <img src={logo} alt="" />
              </Link>
              <select
                name=""
                id=""
                value={i18n.language}
                onChange={handleChange}
              >
                <option value="ru">RU</option>
                <option value="en">EN</option>
                <option value="uz">UZ</option>
              </select>
              <div onClick={() => {
                setMenu(false)
              }} className="mini_holder_close">
                <FontAwesomeIcon icon={faX} />
              </div>
            </div>
            <div className="mini_holder_user">
              <img src={user2} alt="" />
              <span onClick={handleLogin}>Вход</span>
              <span onClick={handleReg}>Регистрация</span>
            </div>
            <div className="mini_holder_pages">
              <NavLink>
                <FontAwesomeIcon icon={faBars} />
                Каталог товаров
              </NavLink>
              <NavLink>
                <img src={shop} alt="" />О магазине
              </NavLink>
              <NavLink>
                <img src={list} alt="" />
                Условия доставки
              </NavLink>
              <div className="mini_holder_log">
                <img src={logout} alt="" />
                <span>выйти и аккаунта </span>
              </div>
            </div>
          </div>
          <form action="" className="nav_form">
            <input type="text" placeholder={t("поиск товаров на сайте")} />
            <button type="submit">
              <img src={search} alt="" />
              <span>{t("Поиск")}</span>
            </button>
          </form>
          <div className="nav_main_content_left">
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
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
