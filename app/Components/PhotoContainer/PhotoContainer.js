/**
 * Created by Nastya on 07.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles'

const PhotoContainer = ({image, children}) => (
    <View style={styles.photoContainer}>
        {children}
    </View>
);

Container.prorTypes = {
    children: PropTypes.any,
};

export default PhotoContainer;

