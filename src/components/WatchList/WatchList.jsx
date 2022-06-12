import * as coinApi from '../../utilities/coin-service'
import { useState, useEffect } from 'react'
import './WatchList.css'

const WatchList = () => {
  const [watch, setWatch] = useState();
  const [coin, setCoins] =useState();
  const [refresh, setRefresh] = useState(true);
  useEffect(() =>  {
    const getWatchList = async () => {
      const watch = await coinApi.watchList();
      setWatch(watch);
    };
    getWatchList();
  }, [refresh] );

async function deleteCoin(id) {
  const remove = await coinApi.deleteCoin(id);
  // const updateCoin = coin.map(coin => coin._id !== remove.Coin);
  setRefresh(!refresh)
  // setCoins(updatedCoins);
  // navigator('/watchList')
}
  
  return (
    <>
    {/* <button onClick={deleteCoin}>Remove</button> */}
    {watch && watch.map(coin => <p className='render' >{coin.name} | ${coin.price} | {coin.cap} | {coin.hour}
    <button className='watch-btn' setRefresh={refresh} onClick={() => deleteCoin(coin._id)}>Remove</button>
    </p> )}
    </>
  )
}

export default WatchList