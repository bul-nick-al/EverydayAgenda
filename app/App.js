import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from "react-redux";
import store from './config/store';
import Authentication from "./screens/Authentication";

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
    $backgroundFilter: '#6E7B8B70',
    $fontAvenir: 'AvenirNext-UltraLight',
});

export default () => (
    <Provider store={store}>
        <Authentication/>
    </Provider>
);

