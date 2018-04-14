import React, {Component} from 'react';
import {View} from 'react-native';
import {BluredBackground} from '../../app/Components/BluredBackground/'
import InputWithText from "../Components/InputWithText/InputWithText";
import {ButtonWithBorders} from "../Components/ButtonWithBorders/";
import {TouchableText} from "../Components/TouchableText/";
import {Logo} from '../Components/Logo';

class Login extends Component {


    render() {
        return (

            <BluredBackground image={require('../res/images/backgrounds/login-background.jpg')}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Logo/>
                    <InputWithText text="Username"/>
                    <InputWithText text="Password"/>
                    <ButtonWithBorders text="Login" onPress={this.props.press}/>
                    <TouchableText text="If you have an account please Sign Up"/>
                </View>
            </BluredBackground>
        );
    }
}

export default Login;