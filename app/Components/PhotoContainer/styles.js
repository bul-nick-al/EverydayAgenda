/**
 * Created by Nastya on 07.04.2018.
 */
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const maxHeight = Dimensions.get('window').height / 2;

export default EStyleSheet.create({
    photoContainer: {
        // width: 600,
        padding: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        //
        height: maxHeight,
        width: '100%'
    },
});