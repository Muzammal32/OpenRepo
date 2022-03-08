// Library
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoreData = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (err) {
        return err
    }
};

export const getStoreData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(`${key}`);
        if (value !== null) {
            return value
        } else {
            return false
        }
    } catch (err) {
        return err
    }
};

export const checkForJournalStorage = (key) => {
    return new Promise((resolve, reject) => {
        getStoreData(key).then((data) => {
            const values = JSON.parse(data);
            if (values) {
                resolve(values);
            } else {
                resolve(false);
            }
        }).catch(err => {
            reject(err);
        })
    });
};
//check local storage for the login.

export const checkLocalLogin = (key) => {
    return new Promise((resolve, reject) => {
        getStoreData(key).then((data) => {
            let values = JSON.parse(data);
            if (values && values.hasOwnProperty('auth')) {
                if (values.auth) {
                    resolve(values);
                } else {
                    reject(false)
                }
            } else {
                reject(false)
            }
        }).catch((err) => {
            reject(false)
        })
    });

};

export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }
};

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        // remove error
    }
};
