/**
 * Created by Nastya on 08.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles'

const Audio = ({children}) => (
    <View style={styles.audio}>
        {children}
    </View>
);

Container.propTypes = {
    children: PropTypes.any,
};

export default PhotoContainer;