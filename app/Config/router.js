import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ImpressionEdit from '../screens/ImpressionEdit'
import Stories from '../screens/Stories'
import Impression from "../screens/Impression";
// import { Icon } from 'react-native-elements';
export const Tabs = TabNavigator({
    Stories: {
        screen: Stories,
        navigationOptions: {
        },

    },
    Impression: {
        screen: ImpressionEdit,
        navigationOptions: {

        },
    },
},
    {
        // tabBarOptions: {
        //     style: {
        //         height: 0,
        //         overflow:'hidden',
        //     },
        //
        // },

        // initialRouteName: 'Impression',
        tabBarComponent: ()=>null,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false,

    });

