import { useState, useEffect } from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'
import Header from './Header'
import Footer from './Footer'
import mainPageGirl from './photo/mainPageGirl.jpg'
import styles from './css/Main.css'


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
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <img loading="lazy" src={mainPageGirl} alt="Main Page Girl" className={styles.imgMain} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textGroup}>
                        <div className={styles.divider} />
                        <div className={styles.titleUp}>Укрепление здоровья</div>
                        <div className={styles.divider} />
                    </div>
                    <div className={styles.title}>Оздоровительный центр Serene</div>
                </div>
            </div>

            <Footer />
        </IntlProvider>
    );
}

export default Main;