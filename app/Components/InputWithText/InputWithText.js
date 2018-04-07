import PropTypes from 'prop-types';
import React from 'react';
import { Text,  View, TextInput } from 'react-native';

import styles from './styles';

const InputWithText = ({ text}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {text}
            </Text>
            <TextInput style={styles.input} underlineColorAndroid='transparent' selectionColor={'white'}/>
        </View>
    )
}


InputWithText.propTypes = {
};

export default InputWithText;
