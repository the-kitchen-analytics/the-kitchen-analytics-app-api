import googleSheetsApi from "./googleSheetsApi";
import parseGoogleSheetsData from "./parseGoogleSheetsData";
import formatGoogleSheetsData from "./formatGoogleSheetsData";

const getDocInfo = () => {
    console.debug('googleSheetsService.getDocInfo()');
    return googleSheetsApi.getDocInfo();
}

const getAll = async () => {
    console.debug('googleSheetsService.getAll()');
    return parseGoogleSheetsData(await googleSheetsApi.getAll());
}

const append = (data) => {
    console.debug('googleSheetsService.append', data);
    return googleSheetsApi.addRow(formatGoogleSheetsData(data))
}

const googleSheetsService = {
    getDocInfo,
    getAll,
    append
}

export default googleSheetsService;

