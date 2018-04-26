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
            videoSource: null,
            text: null,
            isEditOpened: false,
        }
    }

    handleTextEditShown = () => {
        this.refs.modal.open();
    } ;

    handleSavePress = () => {
        console.warn(this.state.text);
        this.refs.modal.close();
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
                    <Text style={styles.title}>Tell us about your day</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='white'
                        onChangeText={(value) => this.setState({text: value})}
                        value={this.state.text}
                    />
                    <ButtonWithBorders
                        text={'Save'}
                        onPress={this.handleSavePress}
                    />
                </Modal>
                <ScrollView>
                    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <PhotoAddContainer/>
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
                        <View>
                            <ButtonWithBorders text="SUBMIT" onPress={this.props.press}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    modal:{
        height: 250,
        width: 300,
        backgroundColor: '$backgroundFilter',
        borderRadius: 10,
    },
    input: {
        // flex: 1,
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