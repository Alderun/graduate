import { useState } from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'
import Header from './Header'
import Footer from "./Footer"


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
            <Footer />
        </IntlProvider>
    );
}

export default Main;