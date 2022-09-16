const format = (text, price, currencySymbol = '€') => {
    return `${text} (${currencySymbol}${price.toFixed(2)})`
}

export default format;