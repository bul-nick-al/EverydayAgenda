import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {PhotoContainer} from '../PhotoContainer';
import {VideoContainer} from "../VideoContainer";
import {TextNote} from "../TextNote";
import {GeotagContainer} from "../GeotagContainer";

const Impression = ({photoURL, videoURL, text}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
            <ScrollView>
                {!photoURL.includes('-1')&&<PhotoContainer photoURL={photoURL}/>}
                {(videoURL !== '')&&<VideoContainer videoURL={videoURL}/>}
                {(text !== '')&&<TextNote text={text}/>}
                {/*<GeotagContainer/>*/}
            </ScrollView>
        </View>
    )

}

export default Impression;