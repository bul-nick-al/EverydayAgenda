/**
 * Created by Nastya on 14.04.2018.
 */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

global.SampleVar = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';

let text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.';
const TextNote = ({children, text}) => (
    <View style={styles.textContainer1}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    </View>
);


export default TextNote;