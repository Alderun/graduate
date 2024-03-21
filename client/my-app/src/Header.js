import * as React from "react";
import './css/Header.css';
import logo from './photo/Logo.jpg';
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

function Header() {
    const locale = LOCALES.RUSSIAN;
    return (
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}>
            <div className="header">
                <img
                    loading="lazy"
                    src={logo}
                    className="logo"
                />
                <div className="nav">
                    <div className="text"><FormattedMessage id="main" /></div>
                    <div className="text"><FormattedMessage id="services" /></div>
                    <div className="text"><FormattedMessage id="reviews" /></div>
                    <div className="text"><FormattedMessage id="contacts" /></div>
                    <div className="text"><p><FormattedMessage id="news" /></p></div>
                    <div className="text"><div>Рус</div>/<div>Eng</div></div>
                </div>
                <button className="profile_button">
                    <FormattedMessage id="profile" />
                </button>
            </div>
        </IntlProvider>
    );
}

export default Header;