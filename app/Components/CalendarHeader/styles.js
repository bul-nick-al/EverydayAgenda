import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    header: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '$white',
        flex: 0.10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15
    },

    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    touchable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    date: {
        color: '$white',
        fontSize: 20,
        fontWeight: '300',
        fontFamily: '$fontAvenir',
    }
});