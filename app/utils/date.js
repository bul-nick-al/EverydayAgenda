import moment from "moment";

export const stringDateToFormattedString = (date) => dateToFormattedString(new Date(date));
export const dateToFormattedString = (date) => moment(date).format('MMMM D, YYYY');
export const dateToString = (date) => moment(date).format('YYYY-MM-DD');
export const currentDateString = () => moment(new Date).format('YYYY-MM-DD');
export const previousDateString = () => moment(new Date(new Date().getTime() - (24 * 60 * 60 * 1000))).format('YYYY-MM-DD');
export const nextDateString = () => moment(new Date(new Date().getTime() + (24 * 60 * 60 * 1000))).format('YYYY-MM-DD');
export const previousDateStringFromDate = (date) => moment(new Date(new Date(date).getTime() - (24 * 60 * 60 * 1000))).format('YYYY-MM-DD');
export const nextDateStringFromDate = (date) => moment(new Date(new Date(date).getTime() + (24 * 60 * 60 * 1000))).format('YYYY-MM-DD');
export const formatDateStringForCalender = (date) => {
    switch (date) {
        case (dateToString(currentDateString())): {
            return'Today';
        }
        case (previousDateString()): {
            return 'Yesterday';
        }
        default: return stringDateToFormattedString(date);
    }
};