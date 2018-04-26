import {currentDateString} from "./date";

const serverName = 'http://10.90.137.88:8080/';
import store from '../config/store';

export const authorizeUser = (login, password) => {
    return fetch(serverName + `auth/signin/login=${login}&password=${password}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                console.log('authorization failed');
                return {token: 'fail'}
            }
        })
        .then((responseJson) => {
            return responseJson.Token;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const loadImpressionFromServer = (date = store.getState().calendar.date) => {

    return fetch(serverName + `impression/date=${date}`, {
        method: 'GET',
        headers: {
            'Authorization': store.getState().authentication.token
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            console.log('impression load failed', response);
            return {token: 'fail'}
        }
    })
        .then((responseJson) => {
            return {
                exists: responseJson.Exists,
                imageid: generateImageRequest(responseJson.Imageid),
                videoid: generateVideoRequest(responseJson.Videoid),
                text: responseJson.Text
            };
        })
        .catch((error) => {
            console.error(error);
        });
};

export const generateImageRequest = (imageid) => {
    return (serverName + `getimage/token=${store.getState().authentication.token}&imageid=${imageid}`)
};

export const generateVideoRequest = (videoid) => {
    // return (serverName + `getvideo/token=${store.getState().authentication.token}&videoid=${videoid}`)
    return videoid

};

export const sendText = (text, date = currentDateString()) => {
    fetch(serverName + `savetext/date=${date}/text=${text}`, {
        method: 'PUT',
        headers: {
            'Authorization': store.getState().authentication.token,
        },
    }).then((response) => {
        console.warn(response)
    }).catch((error) => {
        console.log(error);
    });
};

export const sendImage = (uri, date = currentDateString()) => {
    var formData = new FormData();
    var photo = {
        uri: uri,
        type: 'type/jpeg',
        name: 'test',
    };
    formData.append('photo', photo);
    fetch(serverName + `saveimage/date=${date}`, {
        method: 'PUT',
        headers: {
            'Authorization': store.getState().authentication.token
        },
        body: formData,

    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error);
    });
};

export const sendVideo = (uri, date = currentDateString()) => {
    var formData = new FormData();
    var video = {
        uri: uri,
        type: 'video/mp4',
        name: 'test',
    };
    formData.append('video', video);
    fetch(serverName + `savevideo/date=${date}`, {
        method: 'PUT',
        headers: {
            'Authorization': store.getState().authentication.token
        },
        body: formData,

    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error);
    });
};

export const loadStoryPreview = (date) => {
    console.log(store.getState().authentication.token);
    return fetch(serverName + `getstories/date=${date}`, {
        method: 'GET',
        headers: {
            'Authorization': store.getState().authentication.token
        }
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            console.log('preview load failed');
            return {token: 'fail'}
        }
    })
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
};


performFetch = () => {


    var ImagePicker = require('react-native-image-picker');

    var options = {
        title: 'Select Avatar',
        customButtons: [
            {name: 'fb', title: 'Choose Photo from Facebook'},
        ],
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = {uri: response.uri};
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source,
                uri: response.uri
            });

            var formData = new FormData();
            let pictureSource = require('../res/images/backgrounds/1.jpg');
            if (pictureSource) {
                console.log(this.state.uri);

                var photo = {
                    uri: this.state.uri,
                    type: 'type/jpeg',
                    name: 'test',
                };
                formData.append('photo', photo);
                console.warn(formData)
            }
            console.warn(formData);
            fetch('http://10.91.51.235:8080/', {
                method: 'PUT',
                body: formData,
            }).then((response) => response.json())
                .then((responseJson) => {
                    // Perform success response.
                    console.log(responseJson);
                }).catch((error) => {
                console.log(error);
            });
        }
    });

};