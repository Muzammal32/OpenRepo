// Library
import axios from 'axios';
// Store
import store from '/src/store/store';
// Server Url
import url from '../server';

const  getJwt = () => {
    const {auth} = store.getState();
    if (auth && auth.token) {
        return "Bearer " + auth.token;
    }

    return '';
};

const getLocale = () => {
    const {language} = store.getState();
    if(language && language.locale) {
        return language.locale;
    }
    return "en";
};

const getLoginOptions = () => {
    return {
        headers: {
            "Accept-Language": getLocale()
        }
    }
};

const getOptions = () => {
    return {
        headers: {
            "Authorization": getJwt(),
            "Accept-Language": getLocale()
        }
    }
};

const prepareUrl = (api) => {
    const urll = `${url}${api}`
    return urll;
};

const wrapper = {
    get: (api) => axios.get(prepareUrl(api), getOptions()),
    post: (api, formData = {}) => axios.post(prepareUrl(api), formData, getOptions()),
    put: (api, formData = {}) => axios.put(prepareUrl(api), formData, getOptions()),
    delete: (api) => axios.delete(prepareUrl(api), getOptions()),
    patch: (api, formData = {}) => axios.patch(prepareUrl(api), formData, getOptions()),
    login: (api, formData = {}) => axios.post(prepareUrl(api), formData, getLoginOptions())
};

export default wrapper;
