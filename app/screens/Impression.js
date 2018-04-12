import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {PhotoContainer} from '../Components/PhotoContainer';
import {VideoContainer} from "../Components/VideoContainer";

class Impression extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
                <ScrollView>
                    <PhotoContainer/>
                    <VideoContainer/>
                </ScrollView>
            </View>
        )
    }
}

export default Impression;