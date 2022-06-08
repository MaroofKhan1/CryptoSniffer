import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './CoinDetails.css'
// import Coins from '../Coins/Coins'

const CoinDetails = (props) => {
    const [coin, setCoin] = useState({})
    const {id} = useParams()
    const url =`https://api.coingecko.com/api/v3/coins/${id}`
    // useEffect (() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
    })
  // }, [] )
  return (
    <>
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1 className='name'>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>RANK # {coin.market_cap_rank} </span>
          </div>
          <div className='details' >
            <div className='coin-heading'>
            {coin.image ? <img src={coin.image.small} alt='' /> : null }
            </div>
            <div className='coin-price'>
              {/* <h1>{coin.market_data.current_price}</h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CoinDetails