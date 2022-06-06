import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

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
  console.log(coin)
  return (
    <>    
    <div>{id}</div>
    <p> {coin.coingecko_rank} </p>
    </>
  )
}

export default CoinDetails