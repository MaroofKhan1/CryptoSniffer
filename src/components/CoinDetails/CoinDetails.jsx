import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './CoinDetails.css'

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
  return (
    <>
    <div className='rank'>
        <div className='info'>
    <div>{id}</div>
    <p> {coin.coingecko_rank} </p>
    {coin.image ? <img src={coin.image.small} alt='' /> : null }
        </div>
    </div>    
    </>
  )
}

export default CoinDetails