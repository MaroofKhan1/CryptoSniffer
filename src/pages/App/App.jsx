// import React from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from "../../utilities/users-service";
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from "../../components/NavBar/NavBar";
import Crypto from '../../components/Crypto/Crypto';
import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';
import Coins from '../../components/Coins/Coins';
import Nav from '../../components/Nav/Nav';


function App() {
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState(getUser());
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
          setCoins(response.data);
          console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])
    return (
      <main className="App">
        { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Crypto />
            <Nav />
            <Coins coins={coins} />
            {/* <CoinItem CoinItem={CoinItem} /> */}
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
        }
      </main>
    );
  };
export default App;
