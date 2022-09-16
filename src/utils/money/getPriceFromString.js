import unformat from "./unformat";

const getPriceFromString = (stringWithPrice) => {
    const result = stringWithPrice.match(/€\d+(?:[.,]\d{0,2})?/);

    if (result) {
        return unformat(result[0])
    }

    console.error('Couldn\'t get price from string:', stringWithPrice);
}

export default getPriceFromString;