import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './CoinDetails.css'
import * as coinApi from '../../utilities/coin-service'
import DOMPurify from 'dompurify'

const CoinDetails = (props) => {
    const [coin, setCoin] = useState({})
    const {id} = useParams()
    const url =`https://api.coingecko.com/api/v3/coins/${id}`
    useEffect (() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
    })
  }, [] )
  const newCoin = props.coins.find(c => c.id===id)
  console.log(newCoin)
    async function watchList() {
      const coinObject = {
        name: newCoin.name,
        price: newCoin.current_price,
        image: newCoin.image,
        hour: newCoin.high_24h,
        volume: newCoin.circulating_supply,
        cap: newCoin.total_supply
      }
      const addCoin = await coinApi.add(coinObject)
    }
  return (
    // <div>
    <div id='coin-container' className="box animate fadeInUp one">
        <div className='content'>
            <h1>{coin.name}</h1>
        </div>
        <div className='content'>
            <div className='rank'>
                <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
            </div>
            <div className='info'>
                <div className='coin-heading'>
                    {coin.image ? <img src={coin.image.small} alt='' /> : null}
                    <p>{coin.name}</p>
                    {/* {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null} */}
                </div>
                <div className='coin-price'>
                    {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                </div>
            </div>
        </div>
        <div className='content'>
            <table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                        <th>1yr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='content'>
            <div className='stats'>
                <div className='left'>
                    <div className='row'>
                        <h4>24 Hour Low</h4>
                        {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className='row'>
                        <h4>24 Hour High</h4>
                        {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                        </div>
                </div>
                <div className='right'>
                    <div className='row'>
                        <h4>Market Cap</h4>
                        {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className='row'>
                        <h4>Circulating Supply</h4>
                        {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                    </div>
                </div>
            </div>
        </div>
        <div className='content'>
            <div className='about'>
                <h3>About</h3>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                }}>
                </p>
            </div>
            <button className='add-btn' onClick={watchList}>ADD</button>
        </div>
    </div>
// </div>
)
}
export default CoinDetails









  
  
