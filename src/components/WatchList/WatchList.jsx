import * as coinApi from '../../utilities/coin-service'
import { useState, useEffect, useNavigate } from 'react'
import './WatchList.css'

const WatchList = () => {
  const [watch, setWatch] = useState()
  const [coin, setCoins] =useState()
  useEffect(() =>  {
    const getWatchList = async () => {
      const watch = await coinApi.watchList();
      setWatch(watch);
      console.log(watch)
    };
    getWatchList();
  }, [] );

async function deleteCoin() {
  const remove = await coinApi.deleteCoin(coin._id);
  const updateCoin = coin.filter(coin => coin._id !== remove._id);
  // setCoins(updatedCoins);
  navigator('/coin')
}
  
  return (
    <>
    {/* <button onClick={deleteCoin}>Remove</button> */}
    {watch && watch.map(coin => <p className='render' >{coin.name} | ${coin.price} | {coin.cap} | {coin.hour}
    <button className='watch-btn' onClick={deleteCoin}>Remove</button>
    </p> )}
    </>
  )
}

export default WatchList