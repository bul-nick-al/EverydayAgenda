import PropTypes from 'prop-types';
import React from 'react';
import { Text,  View, TextInput } from 'react-native';

import styles from './styles';

const InputWithText = ({text, secureTextEntry = false, onChangeText}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                {text}
            </Text>
            <TextInput onChangeText={onChangeText} style={styles.input} secureTextEntry={secureTextEntry} underlineColorAndroid='transparent' selectionColor={'white'}/>
        </View>
    )
}


InputWithText.propTypes = {
};

export default InputWithText;
