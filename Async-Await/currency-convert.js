const axios = require('axios');

const getExchangeRate = (from, to) => {
    return axios.get(`http://api.fixer.io/latest?base=${from}`).then((resp) => {
        return resp.data.rates[to];
    })
}

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((resp) => {
        return resp.data.map((country) => {
            return country.name;
        })
    })
}

getExchangeRate('USD', 'EUR').then((rate) => {
    console.log(rate);
})

getCountries('CAD').then((countries) => {
    console.log(countries);
})

const convertCurrency = (from, to, ammount) => {
    return getCountries(to).then((countries) => {
        return getExchangeRate(from, to)
    }).then((rate) => {
        const exchangedAmount = ammount * rate;

        return `${ammount} ${from} is worht ${exchangedAmount} ${to}`
    })
}

// convertCurrency('USD', 'EUR', 1000).then((status) => {
//     console.log(status);
// })

const converCurrentAsync = async (from, to, ammount) => {
    const countries = await getCountries(to);
    const exchangeRate = await getExchangeRate(from, to);
    const exhangedAmmount = ammount * exchangeRate;
    return `${ammount} ${from} is worht ${exhangedAmmount} ${to}`
}

converCurrentAsync('USD', 'EUR', 1000).then((status) => {
    console.log(status);
})