import './css/Header.css';
import logo from './photo/Logo1.png';
import { FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'

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
                <img
                    loading="lazy"
                    src={logo}
                    className="logo"
                />
                <div className="nav">
                    <button className="button">
                        <span><FormattedMessage id="main" /></span>
                    </button>
                    <button className="button">
                        <span><FormattedMessage id="services" /></span>
                    </button>
                    <button className="button">
                        <span><FormattedMessage id="reviews" /></span>
                    </button>
                    <button className="button">
                        <span><FormattedMessage id="contacts" /></span>
                    </button>
                    <button className="button">
                        <span><FormattedMessage id="news" /></span>
                    </button>
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
                <button className="button profile">
                    <span><FormattedMessage id="profile" /></span>
                </button>
            </div>
        </header>
    );
}

export default Header;