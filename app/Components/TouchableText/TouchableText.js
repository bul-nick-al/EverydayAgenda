import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const TouchableText = ({ text, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Text style={styles.text}>{text}</Text>
    </View>
    </TouchableOpacity>
);

TouchableText.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default TouchableText;
