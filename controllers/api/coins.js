const fetch = require ('node-fetch')


module.exports={
    search
}

async function search(req, res) {
    const {term} = req.body
    const url = `https://api.coingecko.com/api/v3/search?query=${term}`
    const response = await fetch(url);
    const data = await response.json()
    res.json(data)
}


