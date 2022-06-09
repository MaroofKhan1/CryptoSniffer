// // import React from "react";
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// import { getUser } from "../../utilities/users-service";
// import AuthPage from '../AuthPage/AuthPage';

// import NavBar from "../../components/NavBar/NavBar";
// import Crypto from '../../components/Crypto/Crypto';

// import { useState, useEffect } from "react";
// import './App.css';
// import Coins from '../../components/Coins/Coins';
// import Nav from '../../components/Nav/Nav';
// import CoinDetails from '../../components/CoinDetails/CoinDetails';
// import Chart from '../../components/Chart/Chart';
// import Search from '../../components/Search/Search';
// import * as coinService from '../../utilities/coin-service';
// import WatchList from '../../components/WatchList/WatchList';
// import Home from '../../components/Home/Home';



// function App() {
//   const [coins, setCoins] = useState([]);
//   const [user, setUser] = useState(getUser());
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const navigate = useNavigate();

//   function handleSearch(term) {
//     setSearchTerm(term)
//     getCoin(term)
  
//   }

//   async function getCoin(term) {
//     const coins = await coinService.search({term})
//     navigate(`/${coins.coins[0].id}`)
//     console.log(coins)
//     // const url = `https://api.coingecko.com/api/v3/search?query=${term}`
//     // axios
//     //       .get(url)
//     //       .then((response) => {
//     //           console.log(response)
//     //         Search(response.data);
//     //         console.log(response.data[0]);
//     //       })
//     //       .catch((error) => {
//     //       });
//   }  

//   // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";
//     useEffect(() => {
//       async function coins() {
//         const coins = await coinService.getCoins()
//         setCoins(coins)
//         // navigate(`/${coins.coins[0].id}`)
//       }
//       coins()
//     }, [])
//     return (
//       <main className="App">
//         { user ?
//           <>
//             <NavBar user={user} setUser={setUser} handleSearch={handleSearch} />
//             {/* <Search handleSearch={handleSearch} /> */}
//             <Crypto />
//             <Nav />
//             {/* <WatchList/> */}
//             {/* <CoinItem CoinItem={CoinItem} /> */}
//             <Routes>
//               {/* Route components in here */}
//               <Route path="/Home" element={<Home />} />
//               <Route path="/"  element={<Coins coins={coins} handleSearch={handleSearch} Home={Home} />} />
//               <Route path="/:id" element={<CoinDetails coins={coins} />} />
//               <Route path="/Chart" element={<Chart chart={Chart} />} />
//               <Route path="/WatchList" element={<WatchList WatchList={WatchList} />} />
//             </Routes>
//           </>
//           :
//           <AuthPage setUser={setUser} />
//         }
//       </main>
//     );
//   };
// export default App;