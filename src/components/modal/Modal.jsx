import React, { useContext, useState } from "react";
import "./Modal.css";
import { Context } from "../../context/ThemeContext";
import { useSignup } from "../../hooks/useSignup";

function Modal() {
  const { isOpened, setIsOpened, isReg, setIsReg, isLogin, setIsLogin } = useContext(Context);

//   sign up  /  log in
  const [mail1, setMail1] = useState("");
  const [pass1, setPass1] = useState("");
  const [name1, setName1] = useState("");

  const [mail2, setMail2] = useState("");
  const [pass2, setPass2] = useState("");
  const [name2, setName2] = useState("");

  const { pending, error, signup } = useSignup();

  const clear = () => {
    setMail1("");
    setPass1("");
    setName1("");
    setMail2("");
    setPass2("");
    setName2("");
  };

  const showData1 = (e) => {
    e.preventDefault();
    signup(mail1, pass1, name1);
    clear();
  };
  const showData2 = (e) => {
    e.preventDefault();
    signup(mail2, pass2, name2);
    clear();
  };
// -----------------------------------------------------
  return (
    <section className={isOpened ? "modal active" : "modal"}>
      <div className="modal_content">
        <div className="modal_top">
          <div
            onClick={() => {
              setIsLogin(false);
              setIsReg(true);
            }}
            className={isReg ? "modal_top_block1 active" : "modal_top_block1"}
          >
            Регистрация
          </div>
          <div
            onClick={() => {
              setIsReg(false);
              setIsLogin(true);
            }}
            className={isLogin ? "modal_top_block2 active" : "modal_top_block2"}
          >
            Вход
          </div>
        </div>
        {isReg ? (
          <form action="" className="modal_holder">
            <input onChange={(e) => {
                setName1(e.target.value)
            }} value={name1} type="text" placeholder="Имя" />
            <input onChange={(e) => {
                setMail1(e.target.value)
            }} value={mail1} type="email" placeholder="Электронная почта" />
            <input onChange={(e) => {
                setPass1(e.target.value)
            }} value={pass1} type="password" placeholder="Пароль" />
            <button onClick={showData1} className={pending ? "form_submit pending" : "form_submit"}>Регистрация</button>
            <p className="form_error">{error}</p>
          </form>
        ) : (
          <form action="" className="modal_holder">
            <input onChange={(e) => {
                setMail2(e.target.value)
            }} value={mail2} type="email" placeholder="Электронная почта" />
            <input onChange={(e) => {
                setPass2(e.target.value)
            }} value={pass2} type="password" placeholder="Пароль" />
            <button className={pending ? "form_submit pending" : "form_submit"}>Вход</button>
          </form>
        )}
        <button
          onClick={() => {
            setIsOpened(false);
          }}
          className={isReg ? "modal_close active" : "modal_close"}
        >
          X
        </button>
      </div>
    </section>
  );
}

export default Modal;
