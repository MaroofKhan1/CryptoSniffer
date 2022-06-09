import * as coinApi from '../../utilities/coin-service'
import { useState, useEffect } from 'react'
import './WatchList.css'

const WatchList = () => {
  const [watch, setWatch] = useState()
  useEffect(() =>  {
    const getWatchList = async () => {
      const watch = await coinApi.watchList();
      setWatch(watch);
    };
    getWatchList();
  }, [] );
  return (
    <>
    {watch && watch.map(coin => <p>{coin.name} {coin.price} {coin.cap} </p> )}
    </>
  )
}

export default WatchList