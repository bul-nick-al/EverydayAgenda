import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';
import {PhotoAddContainer} from "../Components/PhotoAddContainer";
import {VideoAddContainer} from "../Components/VideoAddContainer";
import {TextAddContainer} from "../Components/TextAddContainer";
import {ButtonWithBorders} from "../Components/ButtonWithBorders";

class ImpressionEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoSource: null,
            text: null
        }
    }

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

    handlePressTextEdit = () => {
        let text = {Hello};

        this.setState({
            text: source,
        });
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
                <ScrollView>
                    {/*<CalendarHeader/>*/}
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
                                onPress={this.handlePressTextEdit}
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


export
default
ImpressionEdit;