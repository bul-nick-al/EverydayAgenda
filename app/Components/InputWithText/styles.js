import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        width: '85%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor:'$white',
        marginBottom: 15
    },

    label: {
        color: '$white',
        fontSize: 20,
        fontWeight: '300',
    },

    input: {
        paddingTop: 15,
        color: '$white',
        fontSize: 15,
        fontWeight: '300',
        paddingHorizontal: 15,
        paddingBottom: 5,


    }
});
