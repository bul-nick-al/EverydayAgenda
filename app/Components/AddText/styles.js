/**
 * Created by Nastya on 26.04.2018.
 */
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 400;
const BORDER_RADIUS = 10;

export default EStyleSheet.create({
    addTextContainer: {
        backgroundColor: '$backgroundFilter',
        width: '85%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
    },
    input: {
        fontFamily: '$fontAvenir',
        fontSize: 20,
        height: INPUT_HEIGHT,
        flex: 1,
        color: '$white',
    },
});