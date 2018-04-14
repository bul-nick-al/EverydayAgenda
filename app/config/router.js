import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImpressionEdit from '../screens/ImpressionEdit'
import Stories from '../screens/Stories'
import Impression from "../screens/Impression";
import {CalendarHeader} from '../Components/CalendarHeader'
import CalendarScreen from "../screens/CalendarScreen";

const onCalendarPress = () => this.navigate('CalendarScreen');

const HomeStack = StackNavigator(
    {
        Impression: {
            screen: Impression,
            navigationOptions: {
                header: (props)=>(<CalendarHeader editable={false} onPress={() => props.navigation.navigate('CalendarScreen')}/>)
            },
        },

        CalendarScreen: {
            screen: CalendarScreen,
            navigationOptions: {
                header: ()=>null
            },
        },
    },
    {
        mode: 'modal',
        cardStyle: { backgroundColor: 'transparent' },
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: 'transparent',
            }
        }),
    },
);

export const Tabs = TabNavigator({
    Stories: {
        screen: Stories,
        navigationOptions: {
        },

    },
    Impression: {
        screen: HomeStack
    },
},
    {
        initialRouteName: 'Impression',
        tabBarComponent: ()=>null,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false,

    });

