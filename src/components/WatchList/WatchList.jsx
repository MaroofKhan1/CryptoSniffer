import * as coinApi from '../../utilities/coin-service'
import { useState, useEffect } from 'react'

const WatchList = () => {
  const [watch, setWatch] = useState()
  useEffect(() =>  {
    const getWatchList = async () => {
      const watch = await coinApi.watchList();
      setWatch(watch);
    };
    getWatchList();
  }, [] );
  console.log('watch', watch)
  return (

    <>
    <h1>HELLOOOOOOO</h1>
    {watch && watch.map(coin => <p>{coin.name}</p> )}
    </>
  )
}

export default WatchList