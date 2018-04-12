import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    header: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor:'$white',
        flex: 0.10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightArrow: {

    },

    leftArrow: {
        flex:1,
        width: 100,
        height: 100
    },

    date: {

    }
});