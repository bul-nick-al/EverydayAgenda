import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from './styles';
import {ButtonWithIcon} from "../ButtonWithIcon/";
import {TextInputMask} from 'react-native-masked-text'
import moment from 'moment';
import {connect} from "react-redux";
import {
    formatDateStringForCalender
} from "../../utils/date";
import {nextDate, previousDate} from "../../actions/calendar";

class CalendarHeader extends Component {
    static propTypes = {};

    // constructor(props){
    //     super(props);
    //     {onPress} = props
    // }
    nextDayClicked = () => {
        this.props.dispatch(nextDate());
    };

    previousDayClicked = () => {
        this.props.dispatch(previousDate());
    };

    render() {
        return (
            <View style={styles.header}>
                <ButtonWithIcon image={require('../../res/images/buttons/left-arrow.png')}
                                onPress ={this.previousDayClicked}/>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.touchable}>
                        <Text style={styles.date}>
                            {this.props.date}
                        </Text>
                    </TouchableOpacity>
                </View>
                <ButtonWithIcon image={require('../../res/images/buttons/right-arrow.png')}
                                onPress ={this.nextDayClicked}/>
            </View>
        );
    }
}



mapStateToProps = (state) => {
    let date = formatDateStringForCalender(state.calendar.date);
    return ({
        date: date
    });
};

export default connect(mapStateToProps)(CalendarHeader);