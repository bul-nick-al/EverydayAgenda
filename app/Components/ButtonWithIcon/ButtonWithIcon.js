import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const ButtonWithIcon = ({ image,onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image resizeMode='contain' style={styles.icon} source={image}/>
    </TouchableOpacity>
);

ButtonWithIcon.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
};

export default ButtonWithIcon;
