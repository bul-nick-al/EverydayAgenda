import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Text,} from 'react-native-elements';
import {BluredBackground} from '../Components/BluredBackground'
import {PhotoContainer} from '../Components/PhotoContainer'

class Impression extends Component {
    render() {
        return (
            <BluredBackground image={require('../images/5.jpg')}>
                <ScrollView>
                    <PhotoContainer>
                        <Text> Photo </Text>
                    </PhotoContainer>
                </ScrollView>
            </BluredBackground>
        )
    }
}

export default Impression;