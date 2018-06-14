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
    videoAddContainer: {
        padding: 15,
        borderRadius: 100,
        width: maxWidth - 30,
        height: maxWidth - 30,
        backgroundColor: '$backgroundFilter',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        height: 90,
        width: 90,
    },
    videoBackground: {
        width: maxWidth,
        height: maxWidth,
    },
});
