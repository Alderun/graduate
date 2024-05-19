import { useState } from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'
import Header from './Header'
import Footer from './Footer'
import mainPageGirl from './photo/mainPageGirl.jpg'
import './css/Main.css'


function Main() {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value)
        localStorage.setItem('locale', value)
    }

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.RUSSIAN
    }

    return (
        <IntlProvider messages={messages[currentLocale]} locale={currentLocale} defaultLocale={LOCALES.RUSSIAN}>
            <Header currentLocale={currentLocale} handleChange={handleChange} />
            <div className="main-container">
                <div className="image-container">
                    <img loading="lazy" src={mainPageGirl} alt="Main Page Girl" className="imgMain" />
                </div>
                <div className="content-container">
                    <div className="text-group">
                        <div className="divider" />
                        <div className="titleUp">Укрепление здоровья</div>
                        <div className="divider" />
                    </div>
                    <div className="title">Оздоровительный центр Serene</div>
                </div>
            </div>
            <Footer />
        </IntlProvider>
    );
}

export default Main;