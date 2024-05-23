import React, { useEffect } from 'react';
import logo from './photo/Logo1.png'
import { FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { Link } from 'react-router-dom';
import './css/Header.css'

const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2)
    const y = pointerY.toFixed(2)
    const xp = (pointerX / window.innerWidth).toFixed(2)
    const yp = (pointerY / window.innerHeight).toFixed(2)
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--xp', xp)
    document.documentElement.style.setProperty('--y', y)
    document.documentElement.style.setProperty('--yp', yp)
}
document.body.addEventListener('pointermove', syncPointer)

const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Русский', code: LOCALES.RUSSIAN }
]

function Header({ currentLocale, handleChange }) {
    return (
        <header>
            <div className="header">
                <Link to='/main'>
                    <img loading="lazy" src={logo} className="logo" alt='logo' />
                </Link>
                <div className="nav">
                    <Link to='/main'>
                        <button className="button">
                            <span><FormattedMessage id="main" /></span>
                        </button>
                    </Link>
                    <Link to='/service'>
                        <button className="button">
                            <span><FormattedMessage id="services" /></span>
                        </button>
                    </Link>
                    <Link to='/review'>
                        <button className="button">
                            <span><FormattedMessage id="reviews" /></span>
                        </button>
                    </Link>
                    <Link to='/contacts'>
                        <button className="button">
                            <span><FormattedMessage id="contacts" /></span>
                        </button>
                    </Link>
                    <Link to='/news'>
                        <button className="button">
                            <span><FormattedMessage id="news" /></span>
                        </button>
                    </Link>
                </div>
                <div className="button switcher">
                    <span>
                        <select onChange={handleChange} value={currentLocale}>
                            {languages.map(({ name, code }) => (
                                <option key={code} value={code}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <Link to='/sign'>
                    <button className="button profile">
                        <span><FormattedMessage id="profile" /></span>
                    </button>
                </Link>

            </div>
        </header>
    );
}

export default Header;