// One euro is:
const rates = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

const fromEuroToDollar = (euros) => euros * rates.USD;
const fromDollarToYen = (dollars) => dollars * (rates.JPY / rates.USD);
const fromYenToPound = (yen) => yen * (rates.GBP / rates.JPY);

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };



