import React , { Component } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import ImpressionEdit from "./ImpressionEdit";

class Stories extends Component{
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent', justifyContent:'center'}}>
                {/*<Text*/}
                {/*style={{*/}
                {/*textAlign: 'center',*/}
                {/*fontSize: 100,*/}
                {/*color: 'white'*/}
                {/*}}*/}
                {/*>*/}
                {/*Hello*/}
                {/*</Text>*/}
                <ImpressionEdit/>
            </View>
        )
    }
}


export default Stories;
