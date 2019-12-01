import React, {Component} from 'react'
import classes from './BeerList.module.scss'
import BeerItem from '../../components/BeerItem/BeerItem'

class BeerList extends Component {
    state = {
        beer: [
            {id: 1, title: 'Боярский стаут', description: 'Тёмный и плотный сорт пенного с шоколадными и кофейными нотами на послевкусие.', image: 'https://sun9-50.userapi.com/c855536/v855536071/7a22c/nfQ3evGvtqw.jpg'},
            {id: 2, title: 'Клон Бойлерного', description: 'Наша крафтовая версия знаменитого пенного напитка. Светлый фильтрованный лагер.', image: 'https://sun9-66.userapi.com/c849024/v849024071/1c2578/mA_SVdudoqg.jpg'},
        ],
    }


    render() {
        return (
            <div className={classes['BeerList']}>
                <div className={['container']}>
                    <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Список певчанских</h1>
                    <div className={['row']}>
                        { this.state.beer.map((beer, id) => {
                            return (
                                <BeerItem
                                    key={id}
                                    beer={beer}
                                />
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}

export default BeerList