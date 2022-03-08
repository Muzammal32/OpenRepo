// Server Base Url
export const API_BASE_URL_DEV = 'https://befulfilled.thewebjobs.us/';
export const API_BASE_URL_PROD = 'https://befulfilled.thewebjobs.us/';
// Pre & Port Fix
export const API_URL_PREFIX = 'api/';
export const API_URL_VERSION = 'v1/';
// Modules
const AUTH_PRE_FIX = '';
const JOURNAL_PRE_FIX = '';
const PRODUCTS_PRE_FIX = '';
const CONTENT_PRE_FIX = '';
const GENERAL_PRE_FIX = '';

// Authentication
export const AUTH_LOGIN = AUTH_PRE_FIX + 'user/login';
export const AUTH_SOCIAL_LOGIN = AUTH_PRE_FIX + 'social/setup';
export const AUTH_REGISTER = AUTH_PRE_FIX + 'user/register';
export const AUTH_REQUEST_OTP = AUTH_PRE_FIX + 'send/sms';
export const AUTH_CHECK_EMAIL = AUTH_PRE_FIX + 'unique/email/';
export const AUTH_CHECK_PHONE = AUTH_PRE_FIX + 'unique/phone/';
export const AUTH_GET_USER = AUTH_PRE_FIX + 'user';
export const AUTH_SET_PROFILE = AUTH_PRE_FIX + 'user/update/profile';
export const AUTH_GET_TOKEN = AUTH_PRE_FIX + 'verify-token';

export const AUTH_RESET_PHONE = AUTH_PRE_FIX + 'reset/password/sms';
export const AUTH_RESET_EMAIL = AUTH_PRE_FIX + 'reset/password/email';
export const AUTH_RESET = AUTH_PRE_FIX + 'password/reset';
export const GET_CONFIGURATION = AUTH_PRE_FIX + 'configuration';
export const SET_CONFIGURATION = AUTH_PRE_FIX + 'configuration/update';


export const JOURNAL_WEEKLY_GOALS = JOURNAL_PRE_FIX + 'goals/week';
export const JOURNAL_TAKE_NOTES = JOURNAL_PRE_FIX + 'notes/create';
export const JOURNAL_NOTES_LIST = JOURNAL_PRE_FIX +  'notes';
export const JOURNAL_CREATE_GOAL = JOURNAL_PRE_FIX +  'goals/create';
export const JOURNAL_CREATE_DAY = JOURNAL_PRE_FIX +  'day/create';
export const JOURNAL_GET_DAY = JOURNAL_PRE_FIX +  'day';
export const JOURNAL_DAYS_QUESTION = JOURNAL_PRE_FIX +  'questions';
export const JOURNAL_CREATE_FOCUS = JOURNAL_PRE_FIX +  'focus/create';
export const JOURNAL_GET_FOCUS = JOURNAL_PRE_FIX +  'score-card';
export const JOURNAL_GET_STATS = JOURNAL_PRE_FIX +  'goals/stats';
export const JOURNAL_GET_DASHBOARD = JOURNAL_PRE_FIX +  'dashboard';

export const PRODUCTS_LIST = PRODUCTS_PRE_FIX +  'products';
export const ORDERS_LIST = PRODUCTS_PRE_FIX +  'order';
export const ADD_TO_CART = PRODUCTS_PRE_FIX + 'shopping-cart/create';
export const GET_CART = PRODUCTS_PRE_FIX + 'shopping-cart';
export const ADD_ADDRESS = PRODUCTS_PRE_FIX + 'address/create';
export const GET_ADDRESS = PRODUCTS_PRE_FIX + 'address';
export const TRANSACTIONS_LIST = PRODUCTS_PRE_FIX +  'transaction';
export const CHECKOUT = PRODUCTS_PRE_FIX +  'checkout';



export const CONTENT_LIBRARY_LIST = CONTENT_PRE_FIX + 'content-library';
export const FLIP_THE_SWITCH = CONTENT_PRE_FIX + 'flip-the-switch/';
export const PODCASTS = CONTENT_PRE_FIX + 'podcasts/';

export const FAQ = GENERAL_PRE_FIX + 'faq';
export const TERMS_AND_CONDITIONS = GENERAL_PRE_FIX + 'terms-and-conditions';
export const CONTACT_US = GENERAL_PRE_FIX + 'contact/us';
export const FEEDBACK = GENERAL_PRE_FIX + 'feedback/create';
export const BUG_REPORT = GENERAL_PRE_FIX + 'bug/report';
export const DAILY_CHECKLIST = GENERAL_PRE_FIX + 'daily-check-question';
export const ANSWER_DAILY_CHECKLIST = GENERAL_PRE_FIX + 'user-daily-check-question/create';



