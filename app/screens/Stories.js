import React , { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import ButtonWithBorders from "../Components/ButtonWithBorders/ButtonWithBorders";
import {AsyncStorage} from "react-native";
import PhotoContainer from "../Components/PhotoContainer/PhotoContainer";

class Stories extends Component{

    performFetch = () => {


        var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
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
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                    uri: response.uri
                });

                var formData = new FormData();
                let pictureSource = require('../res/images/backgrounds/1.jpg');
                if (pictureSource) {

                    var photo = {
                        uri: this.state.uri,
                        type: 'type/jpeg',
                        name: 'test',
                    };
                    formData.append('photo', photo);
                    console.warn(formData)
                }
                fetch('https://dzesov.me/', {
                    method: 'POST',
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

    }



    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent:'center'}}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 100,
                        color: 'white'
                    }}
                >
                    Hello
                </Text>
            </View>
        )
    }
}


export default Stories;
