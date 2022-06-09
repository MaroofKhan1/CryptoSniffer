const Coin = require ('../../models/watchList')
const fetch = require ('node-fetch')


module.exports={
    search,
    coins,
    details,
    addCoin
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

async function details(req, res) {
    const url =`https://api.coingecko.com/api/v3/coins/${id}`
    const response = await fetch(url);
    const data = await response.json()
    res.json(data)
}

async function addCoin(req, res) {
    const coin = await Coin.findOne({_id:req.body._id})
    // console.log(coin)
    if (coin) {
        let coinUser = coin.user.includes(req.user._id)
        if (coinUser) return
        coin.user.push(req.user._id)
        await coin.save()
        res.json(coin)
    } else {
        req.body.user = req.user._id
        const newCoin = new Coin(req.body)
        await newCoin.save()
        res.json(newCoin)
    }

}
