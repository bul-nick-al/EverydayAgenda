/**
 * Created by Nastya on 07.04.2018.
 */
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const maxHeight = Dimensions.get('window').height / 2;

export default EStyleSheet.create({
    photoContainer: {
        padding: 15,
    },
    image: {
        height: maxHeight,
        width: '100%',
        borderRadius: 7
    },
});