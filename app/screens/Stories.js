import React , { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import TextUnderlined from "../Components/TextUnderlined/TextUnderlined";
import TileWithBackground from "../Components/TileWithBackground/TileWithBackground";
import GridView from 'react-native-super-grid';

class Stories extends Component {

    state = {
        stories: [["Day ago", 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png'], ['Month ago', 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png'],
            ["Year ago", 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png'], ["Forever ago", 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png']]
    }



    render() {
            return (
                <ScrollView style={{flex: 1, backgroundColor: 'transparent'}}>
                    <TextUnderlined text="Stories"
                    />
                    <GridView
                        items={this.state.stories}
                        renderItem={item => (<TileWithBackground
                            text = {item[0]}
                            image = {{'uri': item[1]}}
                        />)}
                    />
                </ScrollView>
            )
    }
}


export default Stories;
