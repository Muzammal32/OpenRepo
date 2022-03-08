import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const imagePath = '../assets/images';
const iconPath = '../assets/icons';
const extension = '.png';

export const images = {
  WALKTHROUGH_STAGE_ONE: require(`${imagePath}/Walkthrough_1${extension}`),
  WALKTHROUGH_STAGE_TWO: require(`${imagePath}/Walkthrough_2${extension}`),
  WALKTHROUGH_STAGE_THREE: require(`${imagePath}/Walkthrough_3${extension}`),
  WALKTHROUGH_STAGE_FOUR: require(`${imagePath}/Walkthrough_4${extension}`),
  LOGO: require(`${imagePath}/BeFulfilled_logo-${extension}`),
  VIDEO: require(`${imagePath}/video${extension}`),
  CART: require(`${imagePath}/cart${extension}`),
  CARD: require(`${imagePath}/visa${extension}`)
};

// Endpoints
export const auth = {
  REGISTER: '/user/register',
  LOGIN: '/user/login',
  SEND_SMS: '/send/sms',
};

export const icons = {
  CAMERA: require(`${iconPath}/ic_camera${extension}`),
  CHECKMARK: require(`${iconPath}/ic_checkmark${extension}`),
  DROP_DOWN: require(`${iconPath}/ic_drop_down${extension}`),
  EYE: require(`${iconPath}/ic_eye${extension}`),
  FACEBOOK: require(`${iconPath}/ic_fb${extension}`),
  FORWARD_ARROW: require(`${iconPath}/ic_forward_arrow${extension}`),
  GOOGLE: require(`${iconPath}/ic_google${extension}`),
  MESSAGE_OPEN: require(`${iconPath}/ic_message_open${extension}`),
  PHONE: require(`${iconPath}/ic_phone${extension}`),
  PLUS: require(`${iconPath}/ic_plus${extension}`),
  CROSS: require(`${iconPath}/ic_cross${extension}`),
  SEARCH: require(`${iconPath}/ic_search${extension}`),
  FINGERPRINT: require(`${iconPath}/ic_fingerprint${extension}`),
  TAKENOTE: require(`${iconPath}/ic_takenote${extension}`),
  WEEKLY_GOAL: require(`${iconPath}/ic_weeklygoal${extension}`),
  CREATE_DAY: require(`${iconPath}/ic_createday${extension}`),
  NOTE_HEADER: require(`${iconPath}/ic_note${extension}`),
  BIG_BIN: require(`${iconPath}/ic_bin${extension}`),
  SMALL_BIN: require(`${iconPath}/ic_detailbin${extension}`),
  DOTS: require(`${iconPath}/ic_dots${extension}`),
  IMAGE_MODAL: require(`${iconPath}/ic_image${extension}`),
  STORAGE_MODAL: require(`${iconPath}/ic_storage${extension}`),
  LAMP: require(`${iconPath}/ic_lamp${extension}`),
  EDIT: require(`${iconPath}/ic_edit${extension}`),
  NOTIFICATION: require(`${iconPath}/ic_notification${extension}`),
  OPTION: require(`${iconPath}/options${extension}`),
  FILTER: require(`${iconPath}/ic_filter${extension}`),
  CUP: require(`${iconPath}/ic_cup${extension}`),
  ADD: require(`${iconPath}/add${extension}`),
  SETTINGS: require(`${iconPath}/Settings${extension}`),
  MENU: require(`${iconPath}/Doint_menu${extension}`),
  UPLOAD: require(`${iconPath}/Upload_icon${extension}`),
  CARD_ICON: require(`${iconPath}/card_icon${extension}`),
  PENCIL: require(`${iconPath}/pencil${extension}`),
};

export const colors = {
  PRIMARY: '#2B2E34',
  WHITE: 'white',
  BLACK: 'black',
  SILVER: '#C8C7C7',
  DOVE_GRAY: '#696969',
  NOBEL: '#B4B4B4',
  BON_JOUR: '#E9E6E6',
  BACKGROUND_CLR: '#F9F9F9',
  DATE_COLOR: '#B4B4B4'
};

export const theme = {
  SINGLE_FLEX: {
    flex: 1,
  },
  ROW: {
    flexDirection: 'row',
  },
  ICON_DIMEN: {
    height: hp(1),
    width: wp(3),
  },
  CENTER: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  TOUCH_OPACITY: 0.8,
};

export const fonts = {
  BLACK: 'Poppins-Black', // 900
  BLACK_ITALIC: 'Poppins-BlackItalic', // 900
  EXTRA_BOLD: 'Poppins-ExtraBold', // 800
  EXTRA_BOLD_ITALIC: 'Poppins-ExtraBoldItalic', // 800
  BOLD: 'Poppins-Bold', // 700
  BOLD_ITALIC: 'Poppins-BoldItalic', // 700
  SEMIBOLD: 'Poppins-SemiBold', // 600
  SEMIBOLD_ITALIC: 'Poppins-SemiBoldItalic', // 600
  MEDIUM: 'Poppins-Medium', // 500
  MEDIUM_ITALIC: 'Poppins-MediumItalic', // 500
  REGULAR: 'Poppins-Regular', // 400
  LIGHT: 'Poppins-Light', // 300
  LIGHT_ITALIC: 'Poppins-LightItalic', // 300
  EXTRA_LIGHT_ITALIC: 'Poppins-ExtraLightItalic', // 200
  ITALIC: 'Poppins-Italic', // 100
  THIN: 'Poppins-Thin', // 100
  THIN_ITALIC: 'Poppins-ThinItalic', // 100
};
