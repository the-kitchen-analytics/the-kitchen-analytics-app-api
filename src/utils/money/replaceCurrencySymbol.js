const CURRENCY_CHAR_REGEX = /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/;


const replaceCurrencySymbol = (priceString, replacement = '') => {
    if (!priceString) {
        return '';
    }

    return priceString.replace(CURRENCY_CHAR_REGEX, replacement);
}

export default replaceCurrencySymbol;