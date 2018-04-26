import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {ScrollView} from 'react-native';
import Modal from 'react-native-modalbox';
import EStyleSheet from 'react-native-extended-stylesheet';
import {PhotoAddContainer} from "../Components/PhotoAddContainer";
import {VideoAddContainer} from "../Components/VideoAddContainer";
import {TextAddContainer} from "../Components/TextAddContainer";
import {ButtonWithBorders} from "../Components/ButtonWithBorders";

class ImpressionEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoSource: null,
            videoSource: null,
            text: null,
            isEditOpened: false,
        }
    }

    handleTextEditShown = () => {
        this.refs.modal.open();
    };

    handleSavePress = () => {
        this.refs.modal.close();
    };

    handlePressPhoto = () => {
        var ImagePicker = require('react-native-image-picker');

        var options = {
            title: 'Select photo',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = {uri: response.uri};

                this.setState({
                    photoSource: source,
                });
            }
        });
    };

    handlePressVideo = () => {
        var ImagePicker = require('react-native-image-picker');

        var options = {
            title: 'Select video',
            mediaType: 'video',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else {
                let source = {uri: response.uri};

                this.setState({
                    videoSource: source,
                });
            }
        });
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
                <Modal
                    style={styles.modal}
                    position={"center"}
                    ref={"modal"}
                    isDisabled={this.state.isEditOpened}
                >
                    <View>
                        <Text style={styles.title}>Tell us about your day</Text>
                        <TextInput
                            defaultValue={"Hello"}
                            multiline={true}
                            style={styles.input}
                            underlineColorAndroid='white'
                            onChangeText={(value) => this.setState({text: value})}
                            value={this.state.text}
                        />
                    </View>
                    <View
                        style={{position: 'absolute', left: 0, right: 0, bottom: 10}}
                    >
                        <ButtonWithBorders
                            text={'Save'}
                            onPress={this.handleSavePress}
                        />
                    </View>
                </Modal>
                <ScrollView>
                    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <PhotoAddContainer
                                onPress={this.handlePressPhoto}
                                imageSrc={this.state.photoSource}
                            />
                            <VideoAddContainer
                                onPress={this.handlePressVideo}
                                videoSrc={this.state.videoSource}
                            />
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TextAddContainer
                                onPress={() => this.handleTextEditShown()}
                                text={this.state.text}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{marginBottom: 15}}
                >
                    <ButtonWithBorders
                        text="SUBMIT"
                        onPress={this.props.press}
                    />
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    modal: {
        height: 250,
        width: 300,
        backgroundColor: '$backgroundFilter',
        borderRadius: 10,
    },
    input: {
        paddingHorizontal: 20,
        fontFamily: '$fontAvenir',
        fontSize: 18,
        color: '$white',
    },
    title: {
        paddingTop: 10,
        textAlign: 'center',
        fontFamily: '$fontAvenir',
        fontSize: 20,
        color: '$white',
    },
});


export default ImpressionEdit;