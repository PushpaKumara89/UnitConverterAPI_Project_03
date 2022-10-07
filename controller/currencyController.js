const CC = require('currency-converter-lt')
const currencyConverter = new CC()

const convertTo = (req, resp) =>{
    currencyConverter.from(req.headers.currencyfrom).to(req.headers.currencyto).amount(parseFloat(req.headers.currencyamount)).convert().then((response) => {
        //console.log(response) //or do something else
        resp.status(200).json({currencyTo:currencyConverter.currencyTo, value:response})
    })
}

const getAllCurrencies = (req, resp) =>{
    const currencies = currencyConverter.currencies;
    resp.status(200).json(currencies)
}

module.exports = {convertTo, getAllCurrencies}

