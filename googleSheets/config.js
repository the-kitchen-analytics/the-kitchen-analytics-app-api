import dotenv from 'dotenv';
dotenv.config();

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;
const API_KEY = process.env.GOOGLE_API_KEY;
const SHEET_NAME = process.env.GOOGLE_SHEETS_LIST_ID;

const VALUE_RENDER_OPTION = 'UNFORMATTED_VALUE';
const DATE_TIME_RENDER_OPTION = 'FORMATTED_STRING';

const googleSheetsConfig = Object.freeze({
    apiKey: API_KEY,
    spreadSheetId: SPREADSHEET_ID,
    baseUrl: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values:batchGet`,
    sheetNames: Object.freeze({
        data: SHEET_NAME
    }),
    valueRenderOption: VALUE_RENDER_OPTION,
    dateTimeRenderOption: DATE_TIME_RENDER_OPTION
});

export default googleSheetsConfig;