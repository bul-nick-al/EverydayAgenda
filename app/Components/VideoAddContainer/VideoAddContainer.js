/**
 * Created by Nastya on 15.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableHighlight} from 'react-native';
import Video from 'react-native-video';
import color from 'color';
import styles from './styles';


const VideoAddContainer = (props) => {
    const {onPress, videoSrc} = props;
    const underlayColor = color(styles.$buttonBackgroundColorbase).darken(styles.$buttonBackgroundColorModifier);

    if (videoSrc === null) {
        return (
            <View style={styles.mainContainer}>
                <TouchableHighlight
                    underlayColor={underlayColor}
                    style={styles.videoAddContainer1}
                    onPress={onPress}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={require('../../res/images/icons/video-player.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <TouchableHighlight
                underlayColor={underlayColor}
                style={styles.videoAddContainer2}
                onPress={onPress}
            >
                <Video
                    source={{uri: videoSrc.uri}}
                    style={styles.videoBackground}
                    resizeMode="cover"
                    muted
                />
            </TouchableHighlight>
    </View>
    );
};

VideoAddContainer.propTypes = {
    onPress: PropTypes.func,
    videoSrc: PropTypes.object,
};

export default VideoAddContainer;
