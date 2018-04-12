import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import BluredBackground from "../Components/BluredBackground/BluredBackground";
import Login from "./Login";
import {isUserLoggedIn} from "../actions/authentication";
import Text from "react-native-elements/src/text/Text";
import {Tabs} from "../Config/router";
import {SafeAreaView} from "react-native";

class Authentication extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        isLogged: PropTypes.bool
    };

    componentDidMount() {
        this.props.dispatch(isUserLoggedIn());

    }

    render() {
        if (this.props.isFetching) {
            return (
                <BluredBackground>
                    <Text>
                        hiiiii
                    </Text>
                </BluredBackground>
            )
        }
        else {
            if (this.props.isLogged)
                return (
                    <BluredBackground image={require('../images/2.jpg')}>
                        <SafeAreaView style={{flex:1}}>
                        <Tabs/>
                        </SafeAreaView>
                    </BluredBackground>
                );
            else
                return (
                    <Login/>
                );
        }
    }
}

const mapStateToProps = (state) => {
    let token = state.token ? state.token : '';
    return {
        isFetching: state.authentication.isFetching,
        isLogged: state.authentication.logged,
        token: token
    }
};

export default connect(mapStateToProps)(Authentication);