const Coin = require ('../../models/watchList')
const fetch = require ('node-fetch')
// const watchList = require ('../../models/watchList')


module.exports={
    search,
    coins,
    details,
    addCoin,
    watchList,
    deleteCoin
}

async function deleteCoin(req, res) {
    const removeCoin = await Coin.findByIdAndDelete(req.params.id)
    console.log(removeCoin)
    res.json(removeCoin);
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
    const coin = await Coin.findOne({name:req.body.name})
    if (coin) {
        let coinUser = coin.users.includes(req.user._id)
        if (coinUser) return
        coin.users.push(req.user._id)
        await coin.save()
        res.json(coin)


    } else {
        req.body.users = req.user._id
        const newCoin = new Coin(req.body)
        // newCoin.users.push(req.user._id)
        await newCoin.save()
        res.json(newCoin)
    }

}

 
async function watchList(req, res) {
    const coins = await Coin.find({users:{'$in':[req.user._id]}})
    res.json(coins)
}