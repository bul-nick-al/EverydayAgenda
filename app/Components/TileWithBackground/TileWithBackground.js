/**
 * Created by Nastya on 14.04.2018.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Tile} from 'react-native-elements'
import {Dimensions} from "react-native"

const TileWithBackground = ({text, image, onPress}) => (
        <Tile
              imageSrc={image}
              title={text}
              featured
              onPress={onPress}
              titleStyle={styles.text}
              width={Dimensions.get('window').width * 0.45}
        />

);


export default TileWithBackground;