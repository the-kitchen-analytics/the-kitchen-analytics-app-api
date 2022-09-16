import googleSheetsApi from "./googleSheetsApi";
import parseGoogleSheetData from "./parseGoogleSheetsData";

const getDocInfo = () => {
    console.debug('googleSheetsService.getDocInfo()');
    return googleSheetsApi.getDocInfo();
}

const getAll = async () => {
    console.debug('googleSheetsService.getAll()');
    return parseGoogleSheetData(await googleSheetsApi.getAll());
}

const append = (data) => {
    console.debug('googleSheetsService.append');
    return googleSheetsApi.addRow(data)
}

const googleSheetsService = {
    getDocInfo,
    getAll,
    append
}

export default googleSheetsService;

