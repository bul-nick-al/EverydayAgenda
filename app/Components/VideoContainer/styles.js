/**
 * Created by Nastya on 12.04.2018.
 */
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const maxHeight = Dimensions.get('window').height / 2;

export default EStyleSheet.create({
    videoContainer: {
        padding: 15,
    },

    video: {
        borderRadius: 7,
        overflow: 'hidden'

    },
    vid: {
        height: maxHeight,
        width: '100%',
    },

});