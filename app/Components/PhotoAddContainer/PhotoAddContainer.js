/**
 * Created by Nastya on 15.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import PhotoUpload from 'react-native-photo-upload';

const PhotoAddContainer = ({image, children}) => (
    <View style={styles.mainContainer}>
        <View style={styles.photoAddContainer}>
            <PhotoUpload>
                <Image resizeMode="contain" style={styles.image} source={require('../../res/images/icons/picture.png')}/>
                {/*<Text>Photo</Text>*/}
            </PhotoUpload>
        </View>
    </View>
);

export default PhotoAddContainer;
