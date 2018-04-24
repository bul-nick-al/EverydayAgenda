/**
 * Created by Nastya on 07.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles'

const PhotoContainer = ({ children, photoURL=''}) => {
    return(
        <View style={styles.photoContainer}>
            <Image resizeMode="cover" style={styles.image} source={{'uri': photoURL}}/>
        </View>
    );
};

export default PhotoContainer;

