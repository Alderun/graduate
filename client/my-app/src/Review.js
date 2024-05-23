import { useState, useEffect } from "react"
import { IntlProvider, FormattedMessage } from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'
import Header from './Header'
import Footer from './Footer'
import stars from './photo/rating.png'
import './css/Review.css'


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
            <div className="title">Отзывы</div>
            <div className="card">
                <div className="rating">
                    <div className="ratText">5/5</div>
                    <img loading="lazy" src={stars} className="cardPhoto"></img>
                </div>
                <div className="textPlace">
                    <div className="description">Потрясающий оздоровительный центр! От момента входа до выхода все было идеально. Персонал дружелюбный и профессиональный, массаж невероятно расслабляющий, обстановка шикарная. Определенно вернусь снова и буду рекомендовать друзьям!</div>
                </div>
            </div>
            <div className="card">
                <div className="rating">
                    <div className="ratText">4/5</div>
                    <img loading="lazy" src={stars} className="cardPhoto"></img>
                </div>
                <div className="textPlace">
                    <div className="description">Очень приятный опыт! Персонал вежливый и профессиональный. Массаж помог расслабиться и снять напряжение. Обстановка в центре приятная и расслабляющая. Единственный минус – чуть высоковата цена, но в целом рекомендую!</div>
                </div>
            </div>
            <div className="card">
                <div className="rating">
                    <div className="ratText">3/5</div>
                    <img loading="lazy" src={stars} className="cardPhoto"></img>
                </div>
                <div className="textPlace">
                    <div className="description">Сеанс массажа был средним. Обслуживание нормальное, но ничего особенного. Ожидал большего релакса и пользы. В целом, неплохо, но есть куда расти. Возможно, попробую еще раз в будущем.</div>
                </div>
            </div>
            <div className="card">
                <div className="rating">
                    <div className="ratText">2/5</div>
                    <img loading="lazy" src={stars} className="cardPhoto"></img>
                </div>
                <div className="textPlace">
                    <div className="description">Опыт был не на высоте. Центр не оправдал моих ожиданий: чистота оставляла желать лучшего, и обстановка была неуютной. Массаж был посредственным, и я не почувствовал значительного улучшения.</div>
                </div>
            </div>
            <div className="card">
                <div className="rating">
                    <div className="ratText">1/5</div>
                    <img loading="lazy" src={stars} className="cardPhoto"></img>
                </div>
                <div className="textPlace">
                    <div className="description">Очень разочарован визитом в этот оздоровительный центр. Персонал был невежлив, и оборудование выглядело устаревшим. Никакого расслабления или удовольствия от сеанса массажа не получил. Не рекомендую.</div>
                </div>
            </div>
            <Footer />
        </IntlProvider>
    );
}

export default Service;