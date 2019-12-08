import React, {Component} from 'react'
import classes from './BeerList.module.scss'
import BeerItem from '../../components/BeerItem/BeerItem'
import axios from 'axios'
import Loader from '../../components/UI/Loader/Loader'

class BeerList extends Component {
    state = {
        beer: [],
        // beer: [
        //     {id: 1, title: 'Боярский стаут', description: 'Тёмный и плотный сорт пенного с шоколадными и кофейными нотами на послевкусие.', image: 'https://sun9-50.userapi.com/c855536/v855536071/7a22c/nfQ3evGvtqw.jpg'},
        //     {id: 2, title: 'Клон Бойлерного', description: 'Наша крафтовая версия знаменитого пенного напитка. Светлый фильтрованный лагер.', image: 'https://sun9-66.userapi.com/c849024/v849024071/1c2578/mA_SVdudoqg.jpg'},
        // ],
        loading: true,
    }

    renderBeer() {
        return this.state.beer.map((beer, id) =>{
            return (
                <BeerItem
                    key={id}
                    beer={beer}
                    // name={beer.name}
                />
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://api.punkapi.com/v2/beers')

            const beer = []

            Object.keys(response.data).forEach((key, index) =>{
                beer.push({
                    id: key,
                    name: response.data[key].name,
                    tag: response.data[key].tagline,
                    image: response.data[key].image_url,
                })
            })

            console.log(response)
            console.log(beer)

            this.setState({
                beer,
                loading: false
            })
        } catch (e) {
            console.log(e)
        }

    }
    render() {
        return (
            <div className={classes['BeerList']}>
                <div className={['container']}>
                    <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Список певчанских</h1>
                    {
                        this.state.loading
                        ? <Loader />
                        : <div className="row">
                            { this.renderBeer() }
                          </div>
                    }
                </div>
            </div>
        )
    }
}

export default BeerList