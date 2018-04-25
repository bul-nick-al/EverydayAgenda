/**
 * Created by Nastya on 14.04.2018.
 */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TextUnderlined = ({text}) => (

    <View style={styles.divider}>
            <Text style={styles.text}>
                {text}
            </Text>
    </View>
);


export default TextUnderlined;