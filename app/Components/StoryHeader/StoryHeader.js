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
import {dateChange, nextDate, previousDate} from "../../actions/calendar";

class StoryHeader extends Component {

    onHeaderPress = ()=>{
        // console.warn(this.props.dateRaw);
        this.props.dispatch(dateChange(this.props.dateRaw));
        this.props.navigation.goBack(null);
        setTimeout(()=>this.props.navigation.goBack(), 500);
    };
    static propTypes = {};
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.onHeaderPress} style={styles.touchable}>
                        <Text style={styles.date}>
                            {this.props.date}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



mapStateToProps = (state) => {
    let date = formatDateStringForCalender(state.stories.date);
    return ({
        date: date,
        dateRaw: state.stories.date
    });
};

export default connect(mapStateToProps)(StoryHeader);