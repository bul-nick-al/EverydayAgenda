/**
 * Created by Nastya on 26.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native';
import {ButtonWithBorders} from '../ButtonWithBorders'
import color from 'color';

import styles from './styles';

const AddText = (props) => {
    const {onOkPress} = props;

    return (
        <View
            style={styles.addTextContainer}
        >
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                {...props}
            />
            <ButtonWithBorders
                text={OK}
                onPress={onOkPress}
            />
        </View>
    );
};