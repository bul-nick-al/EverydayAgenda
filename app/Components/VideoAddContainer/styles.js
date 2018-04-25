/**
 * Created by Nastya on 15.04.2018.
 */
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const maxWidth = Dimensions.get('window').width / 2;
const maxH = maxWidth;

export default EStyleSheet.create({
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
    },
    image: {
        flex: 1,
        height: 90,
        width: 90,
    },
});
