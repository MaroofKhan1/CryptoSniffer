import React from 'react'
import CoinItem from '../CoinItem/CoinItem'
import './Coins.css'

const Coins = (props) => {
  return (
    <div className="box animate fadeInUp one">
        <div className='divBox'>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name' >Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>
            {props.coins.map(coins => {
              return (
                <CoinItem coins={coins} key={coins.id} />
              )
            })}

        </div>
    </div>
  )
}

export default Coins