/**
 * Created by Nastya on 14.04.2018.
 */
import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from "react-native";

export default EStyleSheet.create({
    divider: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '$white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginTop: 15
    },
    text: {
        color: '$white',
        flex: 1,
        fontSize: 25,
        fontWeight: '300',
        fontFamily: '$fontAvenir',
        marginBottom: 0
    },
});