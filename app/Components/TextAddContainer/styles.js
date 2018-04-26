/**
 * Created by Nastya on 15.04.2018.
 */
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const maxWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $buttonBackgroundColorbase: '$backgroundFilter',
    $buttonBackgroundColorModifier: 0.1,
    mainContainer: {
        padding: 15,
        width: maxWidth,
    },
    textAddContainer: {
        padding: 15,
        borderRadius: maxWidth / 2,
        backgroundColor: '$backgroundFilter',
        alignItems: 'center',
        width: maxWidth - 30,
        height: maxWidth - 30,
    },
    image: {
        flex: 1,
        height: 90,
        width: 90,
    },
    text: {
        fontFamily: '$fontAvenir',
        fontSize: 20,
        color: '$white',
        height: 90,
        width: 90,
        textAlign: 'center',
    },
});
