const express = require('express')
const CurrencyController = require('../controller/currencyController')

const route = express.Router();

route.get('/convertTo', CurrencyController.convertTo);
route.get('/getAllCurrencies', CurrencyController.getAllCurrencies)

module.exports = route;