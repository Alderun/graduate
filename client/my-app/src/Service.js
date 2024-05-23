import { useState, useEffect } from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'
import Header from './Header'
import Footer from './Footer'
import img from './photo/servicePage.jpg'
import './css/Service.css'


function Service() {
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
            <div className="title">Услуги</div>
            <div className="card">
                <img loading="lazy" src={img} className="cardPhoto"></img>
                <div className="textPlace">
                    <div className="titleText">Сеанс массажа</div>
                    <div className="description">Получите удовольствие и расслабление с нашими профессиональными сеансами массажа, которые помогут снять напряжение, улучшить кровообращение и восстановить гармонию вашего тела и разума.</div>
                    <button className="button"><span>Подробнее</span></button>
                </div>
            </div>
            <div className="card">
                <img loading="lazy" src={img} className="cardPhoto"></img>
                <div className="textPlace">
                    <div className="titleText">Сеанс массажа</div>
                    <div className="description">Получите удовольствие и расслабление с нашими профессиональными сеансами массажа, которые помогут снять напряжение, улучшить кровообращение и восстановить гармонию вашего тела и разума.</div>
                    <button className="button"><span>Подробнее</span></button>
                </div>
            </div>
            <div className="card">
                <img loading="lazy" src={img} className="cardPhoto"></img>
                <div className="textPlace">
                    <div className="titleText">Сеанс массажа</div>
                    <div className="description">Получите удовольствие и расслабление с нашими профессиональными сеансами массажа, которые помогут снять напряжение, улучшить кровообращение и восстановить гармонию вашего тела и разума.</div>
                    <button className="button"><span>Подробнее</span></button>
                </div>
            </div>
            <div className="card">
                <img loading="lazy" src={img} className="cardPhoto"></img>
                <div className="textPlace">
                    <div className="titleText">Сеанс массажа</div>
                    <div className="description">Получите удовольствие и расслабление с нашими профессиональными сеансами массажа, которые помогут снять напряжение, улучшить кровообращение и восстановить гармонию вашего тела и разума.</div>
                    <button className="button"><span>Подробнее</span></button>
                </div>
            </div>
            <div className="card">
                <img loading="lazy" src={img} className="cardPhoto"></img>
                <div className="textPlace">
                    <div className="titleText">Сеанс массажа</div>
                    <div className="description">Получите удовольствие и расслабление с нашими профессиональными сеансами массажа, которые помогут снять напряжение, улучшить кровообращение и восстановить гармонию вашего тела и разума.</div>
                    <button className="button"><span>Подробнее</span></button>
                </div>
            </div>
            <Footer />
        </IntlProvider>
    );
}

export default Service;