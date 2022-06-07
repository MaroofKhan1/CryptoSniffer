import React from 'react';
import axios from 'axios'
import { useState, useEffect } from "react";
import './Chart.css'

const Chart = () => {
    const [Chart, setChart] = useState({}) 
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'
    useEffect(() => {
        axios
          .get(url)
          .then((response) => {
            setChart(response.data);
            console.log(response.data[0]);
          })
          .catch((error) => {
          });
      }, [])
  return (
    <div>Chart</div>
  )
}

export default Chart