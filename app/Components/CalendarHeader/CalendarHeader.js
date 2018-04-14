import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles';
import {ButtonWithIcon} from "../ButtonWithIcon/";
import {TextInputMask} from 'react-native-masked-text'
import moment from 'moment';
import {connect} from "react-redux";

class CalendarHeader extends Component {
    static propTypes = {};

    // constructor(props){
    //     super(props);
    //     {onPress} = props
    // }

    render() {
        return (
            <View style={styles.header}>
                <ButtonWithIcon image={require('../../res/images/buttons/left-arrow.png')}/>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.touchable}>
                        <Text style={styles.date}>
                            {this.props.date}
                        </Text>
                    </TouchableOpacity>
                </View>
                <ButtonWithIcon image={require('../../res/images/buttons/right-arrow.png')}/>
            </View>
        );
    }
}



mapStateToProps = (state) => {
    let date = '';
    switch (state.calendar.date) {
        case (moment(new Date()).format('YYYY-MM-DD')): {
            date = 'Today';
            break;
        }
        case (moment(new Date().setDate(new Date().getDate()-1)).format('YYYY-MM-DD')): {
            date = 'Yesterday';
            break;
        }
        default: date = moment(new Date(state.calendar.date)).format('MMMM D, YYYY');
    }
    return ({
        date: date
    });
};

export default connect(mapStateToProps)(CalendarHeader);