import React, {Component} from 'react';
import {Impression} from "../Components/Impression/";
import {connect} from "react-redux";
import {View} from "react-native";
import ImpressionEdit from "./ImpressionEdit";
import {currentDateString} from "../utils/date";
import TextNote from "../Components/TextNote/TextNote";

class ImpressionScreen extends Component {
    render() {
        if (!this.props.todayImpressionSubmitted && this.props.date === currentDateString()) {

            return (<ImpressionEdit/>)
        }
        else if (this.props.isFetching) {

            return (<View/>)
        }
        else if (this.props.impressionExists){
            console.log(this.props);
            return (<Impression text={this.props.text}
                                photoURL={this.props.photoURL}
                                videoURL={this.props.videoURL}/>)
        }
        else {
            return (<TextNote text='No impression'/>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.impression.isFetching,
        text: state.impression.impression.text,
        photoURL: state.impression.impression.imageid,
        videoURL: state.impression.impression.videoid,
        todayImpressionSubmitted: state.impression.todayImpressionSubmitted,
        date: state.calendar.date,
        impressionExists: state.impression.impressionExists
    }
};

export default connect(mapStateToProps)(ImpressionScreen);