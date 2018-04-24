const serverName = 'http://192.168.0.105:8080/';
import store from '../config/store';

export const loadImpressionFromServer = (date) => {
    return fetch(serverName+`impression/userid=${store.getState().authentication.token}&date=${date}`)
};

export const generateImageRequest = (imageid) => {
    return (serverName+`getimage/userid=${store.getState().authentication.token}&imageid=${imageid}`)
};

export const generateVideoRequest = (videoid) => {
    return (serverName+`getvideo/userid=${store.getState().authentication.token}&videoid=${videoid}`)
}