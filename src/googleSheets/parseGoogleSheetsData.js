import { compareDesc } from 'date-fns';
import { parseDate } from '../utils/date';
import { calculatePriceAfterTaxes, getPriceFromString, unformat } from '../utils/money';


const parseWorker = (rawString) => rawString;

const createOperation = (name) => {
    const originalPrice = getPriceFromString(name);
    const priceAfterTaxes = calculatePriceAfterTaxes(originalPrice, 0.4);

    return Object.freeze({
        name,
        originalPrice,
        priceAfterTaxes
    });
}

const parseOperations = (rawString, date) => rawString
    .split(';,')
    .map(createOperation);

const parsePriceCell = (priceString) => {
    return unformat(priceString)
}

const transformRow = (row, i) => Object.freeze(
    {
        id: i,
        date: parseDate(row.date),
        dateFormatted: row.date,
        operations: parseOperations(row.procedures),
        worker: parseWorker(row.worker),
        totalPriceBeforeTaxes: parsePriceCell(row.totalPriceBeforeTaxes),
        totalPriceAfterTaxes: parsePriceCell(row.totalPriceAfterTaxes)
    }
);

const parseGoogleSheetData = (dataSet) => {
    return dataSet
        .map(transformRow)
        .sort((a, b) => compareDesc(a.date, b.date));
}

export default parseGoogleSheetData;