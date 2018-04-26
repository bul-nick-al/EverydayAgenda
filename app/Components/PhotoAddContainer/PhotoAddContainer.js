/**
 * Created by Nastya on 15.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableHighlight} from 'react-native';
import color from 'color';
import styles from './styles';

const PhotoAddContainer = (props) => {
    const {onPress, imageSrc} = props;
    const underlayColor = color(styles.$buttonBackgroundColorbase).darken(styles.$buttonBackgroundColorModifier);
    if (imageSrc === null) {
        return (
            <View style={styles.mainContainer}>
                <TouchableHighlight
                    underlayColor={underlayColor}
                    style={styles.photoAddContainer1}
                    onPress={onPress}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={require('../../res/images/icons/picture.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }

    return (
        <View style={styles.mainContainer}>
            <TouchableHighlight
                underlayColor={underlayColor}
                style={styles.photoAddContainer2}
                onPress={onPress}
            >
                <Image
                    resizeMode="cover"
                    style={styles.imageBackground}
                    source={{uri: imageSrc.uri}}
                />
            </TouchableHighlight>
        </View>
    );
};

PhotoAddContainer.propTypes = {
    onPress: PropTypes.func,
    imageSrc: PropTypes.object,
};

export default PhotoAddContainer;
