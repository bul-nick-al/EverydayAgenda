import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import ImpressionEdit from '../screens/ImpressionEdit'
import Stories from '../screens/Stories'
import ImpressionScreen from "../screens/ImpressionScreen";
import {CalendarHeader} from '../Components/CalendarHeader'
import CalendarScreen from "../screens/CalendarScreen";
import Impression from "../Components/Impression/Impression";
import StoryScreen from "../screens/StoryScreen";
import {StoryHeader} from "../Components/StoryHeader/";

const onPress = () => this.navigate('CalendarScreen');

const HomeStack = StackNavigator(
    {
        Impression: {
            screen: ImpressionScreen,
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

const StoriesNavigator = StackNavigator(
    {
        Stories: {
            screen: Stories,
            navigationOptions: {
                header: ()=>null
            },
        },

        Story: {
            screen: StoryScreen,
            navigationOptions:{
                header: (props) => (<StoryHeader navigation={props.navigation}/>),
            }
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
        screen: StoriesNavigator,
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

