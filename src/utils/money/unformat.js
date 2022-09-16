import replaceCurrencySymbol from "./replaceCurrencySymbol"

const unformat = (priceString) => {
    const preparedString = replaceCurrencySymbol(priceString).replace(/,/, '.');
    return parseFloat(preparedString);
}

export default unformat;