import React from 'react';
import {
    StatusBar,
    View
} from 'react-native';

import styles from './style';
import {colors} from "../../constants";
import Loading from "../../components/Loader";
import {connect} from "react-redux";
import VideoPlayer from "react-native-video-controls";
import {SafeAreaView} from "react-navigation";

const PlayerVideo = (props) => {
    const {navigation, route} = props;
    const {url} = route.params;
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.BLACK}/>
            <Loading loading={false}/>
            {console.log(url)}
            <VideoPlayer
                source={{uri: url}}
                navigator={navigation}
                tapAnywhereToPause={true}
                paused={true}
                style={{flex:1}}
                onError={(e) => console.log('dfsfsdf')}
                onEnd={()=> navigation.goBack(null)}
            />
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    return {

    };
};
export default connect(mapStateToProps, {})(PlayerVideo);



