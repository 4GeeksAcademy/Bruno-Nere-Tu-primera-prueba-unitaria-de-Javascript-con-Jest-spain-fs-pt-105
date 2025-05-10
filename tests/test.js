const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("../src/app");


test("3.5 EUR = 3.745 USD", () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test("10 USD = 1462.62 JPY", () => {
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62, 2);
});

test("1000 JPY  = 5.56 GBP", () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2);
});