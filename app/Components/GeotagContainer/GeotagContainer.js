/**
 * Created by Nastya on 15.04.2018.
 */
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MapView from 'react-native-maps';

const GeotagContainer = ({children}) => (
    <View style={styles.geotagContainer1}>
        <View style={styles.mapContainer}>
            {/*<MapView*/}
            {/*initialRegion={{*/}
            {/*latitude: 37.78825,*/}
            {/*longitude: -122.4324,*/}
            {/*latitudeDelta: 0.0922,*/}
            {/*longitudeDelta: 0.0421,*/}
            {/*}}*/}
            {/*/>*/}
        </View>
    </View>
);

export default GeotagContainer;