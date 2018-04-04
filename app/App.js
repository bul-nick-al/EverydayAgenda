
import React, { Component,  } from 'react';
import { View, AsyncStorage } from 'react-native';
import {Tabs } from './Config/router';
import { BluredBackground } from '../app/Components/BluredBackground/'
import EStyleSheet from 'react-native-extended-stylesheet';
import Login from '../app/screens/Login'

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
});

class App extends Component {
    render() {
        if (AsyncStorage.getItem('token') !== null)
            return (
                <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                    <BluredBackground>
                        <Tabs/>
                    </BluredBackground>
                </View>
            );
        else
            return Login;
    }
}

export default App;
