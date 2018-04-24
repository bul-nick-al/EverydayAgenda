import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native';
import {PhotoAddContainer} from "../Components/PhotoAddContainer";
import CalendarHeader from "react-native-calendars/src/calendar/header/index";
import {VideoAddContainer} from "../Components/VideoAddContainer";
import {TextAddContainer} from "../Components/TextAddContainer";
import {ButtonWithBorders} from "../Components/ButtonWithBorders";
import {Dimensions} from 'react-native';

const maxHeight = Dimensions.get('window').height / 3;

class ImpressionEdit extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent: 'center'}}>
                <ScrollView>
                    {/*<CalendarHeader/>*/}
                    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <PhotoAddContainer/>
                            <VideoAddContainer/>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <TextAddContainer/>
                        </View>
                        <View>
                            <ButtonWithBorders text="SUBMIT" onPress={this.props.press}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ImpressionEdit;