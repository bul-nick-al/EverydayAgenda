/**
 * Created by Nastya on 15.04.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import styles from './styles';

const TextAddContainer = ({image, children}) => (
    <View style={styles.mainContainer}>
        <View style={styles.textAddContainer}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../../res/images/icons/text-document.png')}/>
        </View>
    </View>
);

export default TextAddContainer;
