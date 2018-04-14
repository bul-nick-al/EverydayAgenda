/**
 * Created by Nastya on 12.04.2018.
 */
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Video from "react-native-video";

const VideoContainer = ({children}) => (
    <View style={styles.videoContainer}>
        <View style={styles.video}>
            <Video style={styles.vid} repeat={true} resizeMode={"cover"}
                   source={require('../../res/videos/test.mp4')}/>
        </View>
    </View>
);

export default VideoContainer;