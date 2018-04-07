import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '$white',
        borderRadius: 10
    },
    text: {
        color: '$white',
        fontSize: 25,
        paddingHorizontal: 30,
        paddingBottom:5,
        fontWeight: '300',
    },
});
