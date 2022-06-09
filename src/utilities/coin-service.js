import sendRequest from "./send-request";
const BASE_URL = '/api/coins';

export function search(term) {
    return sendRequest(`${BASE_URL}/search`, 'POST', term);
}

export function getCoins() {
    return sendRequest(`${BASE_URL}/getCoins`);
}

export function details() {
    return sendRequest(`${BASE_URL}/details`);
}

export function add(coin) {
    return sendRequest(`${BASE_URL}/addCoin`, 'POST', coin);
}

