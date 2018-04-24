import React, {Component} from 'react';
import {Impression} from "../Components/Impression/";
import {connect} from "react-redux";
import {View} from "react-native";
import ImpressionEdit from "./ImpressionEdit";
import {currentDateString} from "../utils/date";

class ImpressionScreen extends Component {
    render() {
        if (!this.props.todayImpressionSubmitted && this.props.date === currentDateString()){
            return (<ImpressionEdit/>)
        }
        else {
            if (this.props.isFetching) {
                return (<View/>)
            } else {
                return (<Impression text={this.props.text}
                                    photoURL={this.props.photoURL}
                                    videoURL={this.props.videoURL}/>)
            }
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
        date: state.calendar.date
    }
};

export default connect(mapStateToProps)(ImpressionScreen);