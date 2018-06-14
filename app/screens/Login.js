import React, {Component} from 'react';
import {KeyboardAvoidingView, TouchableWithoutFeedback, View, Keyboard, Text} from 'react-native';
import {BluredBackground} from '../../app/Components/BluredBackground/'
import InputWithText from "../Components/InputWithText/InputWithText";
import {ButtonWithBorders} from "../Components/ButtonWithBorders/";
import {TouchableText} from "../Components/TouchableText/";
import {Logo} from '../Components/Logo';
import EStyleSheet from "react-native-extended-stylesheet";
import {connect} from "react-redux";
import {login} from "../actions/authentication";

class Login extends Component {

    loginClicked = () => {
        this.props.dispatch(login(this.state.username, this.state.password))
    };

    render() {
        return (

            <BluredBackground image={require('../res/images/backgrounds/login-background.jpg')}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
                            <Logo/>
                            <InputWithText text="Username"
                                           onChangeText={(text) => this.setState({username: text})}/>
                            <InputWithText text="Password" secureTextEntry={true}
                                           onChangeText={(text) => this.setState({password: text})}/>
                            <ButtonWithBorders text="Login" onPress={this.loginClicked}/>
                            <View style={styles.signUpContainer}>
                                <Text style={styles.signUpText}> If you don't have an account
                                </Text>
                                <TouchableText style={styles.btnSignUp} text="Sign Up"/>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>

            </BluredBackground>

        );
    }
}

export default connect()(Login);

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyboard: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    signUpText: {
        textAlign: 'center',
        color: '$white',
        fontFamily: '$fontAvenir',
        fontSize: 15,
    },
    btnSignUp: {
        textAlign: 'center',
        color: '$white',
        fontSize: 15,
        paddingVertical: 5,
    },
});