import React, { useEffect } from 'react';
import logo from './photo/Logo1.png'
import { FormattedMessage } from 'react-intl'
import './css/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="blockFooter workTime">
                <a><FormattedMessage id="noDaysOff" /></a>
                <a>10:00-23:00</a>

            </div>
            <div className="blockFooter company">
                <img loading="lazy" src={logo} className="logo" alt='logo' />
                <a><FormattedMessage id="companyName" /></a>

            </div>
            <div className="blockFooter contact">
                <a href="https://yandex.by/maps/157/minsk/house/Zk4YcwJmQUYBQFtpfXVwcX9hYQ==/?ll=27.556837%2C53.910325&z=16.59" target="_blanc"><FormattedMessage id="addressName" /></a>
                <a href="tel:+375441234567">+375441234567</a>
                <a href="mailto:sereneCenter@mail.ru">sereneCenter@mail.ru</a>
            </div>
        </footer>
    )
}

export default Footer