import React from "react";
import "./Footer.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import gplay from "../../assets/img/gplay.png";
import app from "../../assets/img/app.png";
import click from "../../assets/img/click.png";
import humo from "../../assets/img/humo.png";
import visa from "../../assets/img/visa.png";
import uzcard from "../../assets/img/uzcard.png";
import payme from "../../assets/img/payme.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n, t } = useTranslation(["home"]);
  return (
    <nav className="footer">
      <div className="footer_top">
        <div className="footer_block">
          <h1 className="footer_title">{t("Покупателям")}</h1>
          <div className="footer_list">
            <Link>{t("Как сделать заказ")}</Link>
            <Link>{t("Способы оплаты")}</Link>
            <Link>{t("Доставка")}</Link>
            <Link>{t("Возврат товара")}</Link>
            <Link>{t("Возврат денежных средств")}</Link>
            <Link>{t("Правила продажи")}</Link>
            <Link>{t("Вопросы и ответы")}</Link>
          </div>
        </div>
        <div className="footer_block">
          <h1 className="footer_title">{t("Партнерам")}</h1>
          <div className="footer_list">
            <Link>{t("Продавайте на ТОП-ИТ")}</Link>
            <Link>{t("Перевозчикам")}</Link>
            <Link>{t("Откройте пункт выдачи")}</Link>
          </div>
        </div>
        <div className="footer_block">
          <h1 className="footer_title">{t("Компания")}</h1>
          <div className="footer_list">
            <Link>{t("О нас")}</Link>
            <Link>{t("Реквизиты")}</Link>
            <Link>{t("Пресс-центр")}</Link>
            <Link>{t("Контакты")}</Link>
            <Link>{t("Вакансии")}</Link>
          </div>
        </div>
        <div className="footer_block">
          <h1 className="footer_title">{t("Наши проекты")}</h1>
          <div className="footer_list">
            <Link>{t("ЗОЖ и спорт")}</Link>
            <Link>{t("Детям")}</Link>
            <Link>{t("Трудоустройство")}</Link>
          </div>
        </div>
        <div className="footer_block">
          <h1 className="footer_title">{t("Мобильные устройства")}</h1>
          <div className="footer_list">
            <Link>
              <img src={gplay} alt="" />
            </Link>
            <Link>
              <img src={app} alt="" />
            </Link>
            <div className="footer_min_title">{t("Мы в соцсетях")}</div>
            <div className="footer_soc">
              <Link>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="footer_copyright">
          {t(
            "2021-2022 ©ТОП-ИТ. Все права защищены. Указанная стоимость товаров и условия их приобретения действительны по состоянию на текущую дату. Сайт разработан"
          )}{" "}
          <span>{t("iTeach")}</span>
        </p>
        <div className="footer_block_payments">
          <Link>
            <img src={click} alt="" />
          </Link>
          <Link>
            <img src={humo} alt="" />
          </Link>
          <Link>
            <img src={visa} alt="" />
          </Link>
          <Link>
            <img src={uzcard} alt="" />
          </Link>
          <Link>
            <img src={payme} alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
