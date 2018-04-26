import React , { Component } from 'react';
import { ScrollView, View, Image, Text, ImageBackground } from 'react-native';
import TextUnderlined from "../Components/TextUnderlined/TextUnderlined";
import TileWithBackground from "../Components/TileWithBackground/TileWithBackground";
import GridView from 'react-native-super-grid';
import {connect} from "react-redux";
import {AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import CalendarScreen from "./CalendarScreen";
import {generateImageRequest, loadStoryPreview} from "../utils/clienRest";
import {loadStory, loadStroiesPreview} from "../actions/stories";
import {formatDateStringForCalender} from "../utils/date";

class Stories extends Component {


    componentWillMount(){
        this.props.dispatch(loadStroiesPreview());

    }

    onPreviewPress(date){
        this.props.dispatch(loadStory(date));
        this.props.navigation.navigate('Story', {date: date});

    }

    state = {
        stories: [["Day ago", 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png'], ['Month ago', 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png'],
            ["Year ago", 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png'], ["Forever ago", 'https://cdn-images-1.medium.com/max/1600/1*O5e4-dHGufM97GcAITeX6Q.png']]
    };


    render() {
            return (
                <ScrollView style={{flex: 1, backgroundColor: 'transparent'}}>
                    <TextUnderlined text="Stories"
                    />
                    <GridView
                        items={this.props.previews}
                        renderItem={item => (<TileWithBackground
                            text = {formatDateStringForCalender(item.date)}
                            image = {{'uri': generateImageRequest(item.imageid)}}
                            onPress={() => this.onPreviewPress(item.date)
                            }
                        />)}
                    />
                </ScrollView>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        previews: state.stories.previews
    }
};

export default connect(mapStateToProps)(Stories);
