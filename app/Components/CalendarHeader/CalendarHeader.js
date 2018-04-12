import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, View} from "react-native";
import styles from './styles';
import {ButtonWithIcon} from "../ButtonWithIcon/";

class CalendarHeader extends Component {
    static propTypes = {
    };

    render(){
        return (
            <View style={styles.header}>
                <ButtonWithIcon image = {require('../../res/images/buttons/left-arrow.png')}/>
                <Text style={{flex: 10}}>{"date"}</Text>
                <Text style={{flex: 1}}>{">"}</Text>
            </View>
        );
    }
}

export default CalendarHeader;