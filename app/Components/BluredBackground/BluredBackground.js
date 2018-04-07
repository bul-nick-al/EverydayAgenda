import React from 'react';
import {ImageBackground, Platform, View} from 'react-native';
import styles from './styles'
const BluredBackground = ({image, children}) => (
        <ImageBackground
            style={styles.image}
            source={image}
            resizeMode='cover'
            blurRadius={Platform.OS === 'ios' ? 3 : 1}
        >
            <View style={styles.filter}>
                {children}
            </View>
        </ImageBackground>
);

export default BluredBackground;