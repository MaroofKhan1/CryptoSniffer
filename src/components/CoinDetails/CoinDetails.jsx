import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
import './CoinDetails.css'
// import WatchList from '../WatchList/WatchList'
// import Coins from '../Coins/Coins'
import * as coinApi from '../../utilities/coin-service'
import WatchList from '../WatchList/WatchList'

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
    console.log(props.coins)
    async function watchList() {
      const coinObject = {
        price: newCoin.current_price,
        image: newCoin.image,
        hour: newCoin.high_24h,
        volume: newCoin.circulating_supply,
        cap: newCoin.total_supply
      }
      const addCoin = await coinApi.add(coinObject)
      console.log(addCoin)
    }


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
              <button onClick={watchList}>ADD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <WatchList /> */}
    </>
  )
}

export default CoinDetails











// import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import {useState, useEffect} from 'react'
// import './CoinDetails.css'
// import * as coinAPI from '../../utilities/coin-service';
// import Coins from '../Coins/Coins'

// export default function CoinDetails() {

  
  
//   // const CoinDetails = (props) => {
//     //     const [coin, setCoin] = useState({})
//     // const url =`https://api.coingecko.com/api/v3/coins/${id}`
//     // axios.get().then((res) => {
//       //   setCoin(res.data)
//       // }).catch((error) => {
//         // })
//         // }, [] )
//         const {id} = useParams();
//         console.log(id)
//         const [details, setDetails] = useState([])
//         useEffect(() => {
//           const getDetails = async () => {
//             const details = await coinAPI.search({id});
//             setDetails(details);
//           }
//           getDetails()
//         }, [])
        
//         return (
//           <>
//       <div className='coin-container'>
//         <div className='content'>
//           <h1 className='name'>{details.name}</h1>
//         </div>
//         <div className='content'>
//           <div className='rank'>
//             <span className='rank-btn'>RANK # {details.market_cap_rank} </span>
//           </div>
//           <div className='details' >
//             <div className='coin-heading'>
//             {details.image ? <img src={details.image.small} alt='' /> : null }
//             </div>
//             <div className='coin-price'>
//               {/* <h1>{coin.market_data.current_price}</h1> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   ); 
// }
  
  
  
