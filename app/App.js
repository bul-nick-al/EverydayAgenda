
import React, { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import {Tabs } from './screens/router';

class App extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                <ImageBackground
                    style={{flex: 1, height: undefined, width: undefined}}
                    source={require('./images/1.jpg')}
                    resizeMode='cover'
                >
                    <Tabs/>
                </ImageBackground>
            </View>
        );
    }
}

export default App;
