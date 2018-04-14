import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {PhotoContainer} from '../Components/PhotoContainer';
import {VideoContainer} from "../Components/VideoContainer";
import {TextNote} from "../Components/TextNote";

class Impression extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
                <ScrollView>
                    <PhotoContainer/>
                    <VideoContainer/>
                    <TextNote/>
                </ScrollView>
            </View>
        )
    }
}

export default Impression;