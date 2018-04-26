import React, {Component} from 'react';
import {Impression} from "../Components/Impression/";
import {connect} from "react-redux";
import {View} from "react-native";
import ImpressionEdit from "./ImpressionEdit";
import {currentDateString} from "../utils/date";
import TextNote from "../Components/TextNote/TextNote";

class StoryScreen extends Component {
    render() {
        if (this.props.isFetching) {
            return (<View/>)
        } else {
            return (<Impression text={this.props.text}
                                photoURL={this.props.photoURL}
                                videoURL={this.props.videoURL}/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.stories.isStoryFetching,
        text: state.stories.story.text,
        photoURL: state.stories.story.imageid,
        videoURL: state.stories.story.videoid,
        date: state.stories.date,
    }
};

export default connect(mapStateToProps)(StoryScreen);