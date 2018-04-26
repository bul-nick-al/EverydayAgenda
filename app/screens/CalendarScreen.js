import React, {Component} from 'react';
import {Calendar} from "react-native-calendars";
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import {dateChange} from "../actions/calendar";
import {loadImpression} from "../actions/impression";
import ButtonWithBorders from "../Components/ButtonWithBorders/ButtonWithBorders";
import {AsyncStorage} from "react-native";

class CalendarScreen extends Component {
    constructor(props) {
        super(props);
        this.onDayPress = this.onDayPress.bind(this);
    }

    onDayPress(day) {
        this.props.dispatch(dateChange(day.dateString));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View>
                <Calendar
                    onDayPress={this.onDayPress}
                    style={{
                        backgroundColor: 'transparent',
                        margin: 10,
                    }}
                    current={this.props.date}
                    hideExtraDays
                    theme={{
                        backgroundColor: 'transparent',
                        calendarBackground: 'transparent',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#6E7B8B',
                        todayTextColor: 'black',
                        dayTextColor: 'white',
                        monthTextColor: 'white',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                        'stylesheet.calendar.header': {
                            monthText: {
                                color: 'white',
                                fontSize: 20,
                                fontWeight: '300',
                                fontFamily: 'AvenirNext-UltraLight',
                            },
                            header: {
                                borderBottomWidth: StyleSheet.hairlineWidth,
                                borderColor: 'white',
                                paddingVertical: 6,
                                paddingBottom: 17,
                                marginBottom: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingLeft: 0,
                                paddingRight: 0,

                                alignItems: 'center'
                            }
                        },
                        arrowImage: {
                            tintColor: 'white'
                        }
                    }}
                    markedDates={{
                        [this.props.date]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: '#6E7B8B',
                        }
                    }}
                />
                <ButtonWithBorders text='log out'
                onPress={()=>AsyncStorage.clear()}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.calendar.date
    }
};

export default connect(mapStateToProps)(CalendarScreen);