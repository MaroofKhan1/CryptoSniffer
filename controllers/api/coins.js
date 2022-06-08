const fetch = require ('node-fetch')


module.exports={
    search,
    coins
}

async function search(req, res) {
    const {term} = req.body
    const url = `https://api.coingecko.com/api/v3/search?query=${term}`
    const response = await fetch(url);
    const data = await response.json()
    res.json(data)
}

async function coins(req, res) {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";
    const response = await fetch(url);
    const data = await response.json()
    res.json(data)
}

