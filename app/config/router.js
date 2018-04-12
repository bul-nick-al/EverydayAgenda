import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImpressionEdit from '../screens/ImpressionEdit'
import Stories from '../screens/Stories'
import Impression from "../screens/Impression";
import {CalendarHeader} from '../Components/CalendarHeader'

const HomeStack = StackNavigator(
    {
        Impression: {
            screen: ImpressionEdit,
            navigationOptions: {
                header: ()=>(<CalendarHeader/>)
            },
        },
    },
    {
        mode: 'card',
        cardStyle: { backgroundColor: 'transparent' },
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: 'transparent',
            }
        }),
    }
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

