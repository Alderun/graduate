import React, { useState, useEffect } from 'react';
import './css/Sign.css'

const Sign = () => {


    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>Создать профиль</h1>
                    <input type="text" placeholder="Имя" />
                    <input type="text" placeholder="Фамилия" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Пароль" />
                    <button>Зарегистрироваться</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Войти в профиль</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Пароль" />
                    <a href="#">Забыли пароль?</a>
                    <button>Войти</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>С Возвращением!</h1>
                        <p>Чтобы оставаться на связи с нами, пожалуйста, войдите, используя свои личные данные.</p>
                        <button className="ghost" onClick={handleSignInClick} id="signIn">Регистрация</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Привет!</h1>
                        <p>Введите свои личные данные и начните путешествие вместе с нами</p>
                        <button className="ghost" onClick={handleSignUpClick} id="signUp">Авторизация</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign;
