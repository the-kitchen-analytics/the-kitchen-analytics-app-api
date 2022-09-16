import dotenv from 'dotenv';
dotenv.config();

const {
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SPREADSHEET_LIST_NAME
} = process.env;

const googleSheetsConfig = Object.freeze({
    GOOGLE_SPREADSHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_SPREADSHEET_LIST_NAME
});

export default googleSheetsConfig;