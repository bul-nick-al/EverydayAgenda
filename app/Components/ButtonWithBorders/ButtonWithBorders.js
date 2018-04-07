import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const ButtonWithBorders = ({ text, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ButtonWithBorders.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ButtonWithBorders;
