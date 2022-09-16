import { parseISO } from "date-fns";
import _ from "lodash";
import { formatDate } from "../utils/date";
import { format as formatPrice } from '../utils/money';

const formatDateCell = (dateString) => {
    return formatDate(parseISO(dateString));
}

const formatWorkerCell = (worker) => worker;

const formatProcedure = ({ name, priceBeforeTaxes }) => formatPrice(name, priceBeforeTaxes);

const formatProceduresCell = (procedures) => {
    return procedures.map(formatProcedure).join(';,');
}

const formatGoogleSheetsData = (data) => {

    const { date, worker, procedures } = data;

    return Object.freeze({
        date: formatDateCell(date),
        worker: formatWorkerCell(worker),
        procedures: formatProceduresCell(procedures),
        totalPriceBeforeTaxes: _.sumBy(procedures, 'priceBeforeTaxes'),
        totalPriceAfterTaxes: _.sumBy(procedures, 'priceAfterTaxes')
    });
}

export default formatGoogleSheetsData;