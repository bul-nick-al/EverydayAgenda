
import React, { Component,  } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
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

    // $outline: 1
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            isFetching: true
        };
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((value) => {
            this.setState({
                token: value,
                isFetching: false
            });
        })
    }


    render() {

        if (this.state.isFetching)
            return (
                <BluredBackground/>
            );
        else {
            if (this.state.token !== null)
                return (
                    <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                        <BluredBackground>
                            <Text>
                                {this.state.token}
                            </Text>
                            <Tabs/>
                        </BluredBackground>
                    </View>
                );
            else
                return (
                    <Login/>
                );
        }
    }
}

export default App;
