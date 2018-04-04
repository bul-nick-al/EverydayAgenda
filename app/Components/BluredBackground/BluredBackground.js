import React from 'react';
import {ImageBackground, Platform, View} from 'react-native';
import styles from './styles'
const BluredBackground = ({children}) => (
        <ImageBackground
            style={styles.image}
            source={require('../../images/login-background.jpg')}
            resizeMode='cover'
            blurRadius={Platform.OS === 'ios' ? 2 : 1}
        >
            <View style={styles.filter}>
                {children}
            </View>
        </ImageBackground>
);

export default BluredBackground;