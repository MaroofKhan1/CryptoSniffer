import React from 'react'
import { Link } from 'react-router-dom'

const CoinItem = (props) => {
  return (
    <Link to={`/${props.coins.id}`} className='coin-line' >
        <p>{props.coins.market_cap_rank}</p>
        <div className='img-symbol' >
          <img src={props.coins.image} alt='' />
          <p>{props.coins.symbol}</p>
        </div>
        <p>{props.coins.current_price}</p>
        <p>{props.coins.price_change_percentage_24h}</p>
        <p>{props.coins.total_volume}</p>
        <p>{props.coins.market_cap}</p>
        
    </Link>
  )
}
export default CoinItem