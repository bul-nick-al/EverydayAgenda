import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '$white',
        fontSize: 10,
        paddingHorizontal: 30,
        paddingVertical:10,
        fontWeight: '300',
    },
});
