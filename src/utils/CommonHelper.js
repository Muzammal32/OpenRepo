// Libraries
import _ from 'lodash';
import {RFValue} from "react-native-responsive-fontsize";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Dimensions} from "react-native";


// Url Maker
export const urlMaker = (url, params) => {
    let counter = 1;
    const parameters = [];
    _.forIn(params, (val, key) => {
        parameters.push((counter === 1 ? '?' : '&') + key + '=' + val);
        counter++;
    });
    return url + parameters.join('');
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export const validateMobileNumber = (mobile) => {
    const re = /^((\+92)|(0092)|(088))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    return re.test(mobile);
}
export const validateCNIC = (cnic) => {
    const re = /^\d{5}-\d{7}-\d{1}$/;
    return re.test(cnic);
}

export const dateFormat = (date) =>{
    let d = new Date(date);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()
}

export const dateFormatApi = (date) =>{
    let d = new Date(date);
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return d.getFullYear()+"-"+months[d.getMonth()]+"-"+d.getDate()
}

export const dayFormat = (date) =>{
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
    let d = new Date(date);
    return days[d.getDay()];
}

const deviceHeight = Dimensions.get('screen').height;

export const FontScale = (fontSize = 0, height = height ) => {
    return RFValue(fontSize, deviceHeight);
};

export const ScreenScale = (fontSize = 0, height = height ) => {
    return RFValue(fontSize, deviceHeight);
};

export const ScreenScaleHorizontal = (size, height = height ) => {
    return wp(size);
};

export const ScreenScaleVertical = (size, height = height ) => {
    return hp(size);
};
