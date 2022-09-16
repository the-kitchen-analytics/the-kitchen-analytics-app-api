import config from "./config";
import parseGoogleSheetData from "./parseGoogleSheetsData";

const buildFetchUrl = ({ baseUrl, sheetNames, apiKey, valueRenderOption, dateTimeRenderOption }) => {

    const params = new URLSearchParams();

    params.set('ranges', sheetNames.data);
    params.set('key', apiKey);

    if (valueRenderOption) {
        params.set('valueRenderOption', valueRenderOption);
    }

    if (dateTimeRenderOption) {
        params.set('dateTimeRenderOption', dateTimeRenderOption);
    }

    return `${baseUrl}/?${params.toString()}`;
}

const getAll = async () => {
    const response = await fetch(buildFetchUrl(config));
    const rawData = await response.json();
    return parseGoogleSheetData(rawData);
}

const append = async (data) => {

}

const googleSheetsService = {
    getAll,
    append
}

export default googleSheetsService;

