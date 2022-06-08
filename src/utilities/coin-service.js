import sendRequest from "./send-request";
const BASE_URL = '/api/coins';

export function search(term) {
    return sendRequest(`${BASE_URL}/search`, 'POST', term);
}

export function getCoins() {
    return sendRequest(`${BASE_URL}/getCoins`);
}