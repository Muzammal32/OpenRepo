// Getting URLS
import * as URLS from './utils/ApiUrls';
// Configurations
import {Config} from './Config';

let url = null;

switch (Config.ENV) {

    case "DEV":
        url = URLS.API_BASE_URL_DEV;
        break;

    case "PROD":
        url = URLS.API_BASE_URL_PROD;
        break;

    default:
        url = URLS.API_BASE_URL_DEV;
        break;
}
url = url + URLS.API_URL_PREFIX + URLS.API_URL_VERSION;

export default url;
