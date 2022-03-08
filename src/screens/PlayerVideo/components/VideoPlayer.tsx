// @ts-ignore
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Video, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {PlayerControls, ProgressBar} from './index';
import {SvgXml} from "react-native-svg";


interface State {
  fullscreen: boolean;
  play: boolean;
  currentTime: number;
  duration: number;
  showControls: boolean;
}

export const VideoPlayer: React.FC = ({url}) => {

  const videoRef = React.createRef();
  const [state, setState] = useState({
    fullscreen: false,
    play: false,
    currentTime: 0,
    duration: 0,
    showControls: true,
  });

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);

    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

  return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={showControls}>
          <View>
            <Video
                ref={videoRef}
                source={{
                  uri: url,
                }}
                style={state.fullscreen ? styles.fullscreenVideo : styles.video}
                controls={false}
                resizeMode={'contain'}
                onLoad={onLoadEnd}
                onProgress={onProgress}
                onEnd={onEnd}
                paused={!state.play}
            />
            {state.showControls && (
                <View style={styles.controlOverlay}>
                  <TouchableOpacity
                      onPress={handleFullscreen}
                      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                      style={styles.fullscreenButton}>
                    {state.fullscreen ?
                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M18 3h2v4h4v2h-6v-6zm6 12v2h-4v4h-2v-6h6zm-18 6h-2v-4h-4v-2h6v6zm-6-12v-2h4v-4h2v6h-6z"/></svg>`}  />:
                        <SvgXml xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M24 9h-2v-4h-4v-2h6v6zm-6 12v-2h4v-4h2v6h-6zm-18-6h2v4h4v2h-6v-6zm6-12v2h-4v4h-2v-6h6z"/></svg>`}  />
                    }
                  </TouchableOpacity>
                  <PlayerControls
                      onPlay={handlePlayPause}
                      onPause={handlePlayPause}
                      playing={state.play}
                      showPreviousAndNext={false}
                      showSkip={true}
                      skipBackwards={skipBackward}
                      skipForwards={skipForward}
                  />
                  <ProgressBar
                      currentTime={state.currentTime}
                      duration={state.duration > 0 ? state.duration : 0}
                      onSlideStart={handlePlayPause}
                      onSlideComplete={handlePlayPause}
                      onSlideCapture={onSeek}
                  />
                </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
  );

  function handleOrientation(orientation: string) {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
        ? (setState(s => ({...s, fullscreen: true})), StatusBar.setHidden(true))
        : (setState(s => ({...s, fullscreen: false})),
            StatusBar.setHidden(false));
  }

  function handleFullscreen() {
    state.fullscreen
        ? Orientation.unlockAllOrientations()
        : Orientation.lockToLandscapeLeft();
  }

  function handlePlayPause() {
    // If playing, pause and show controls immediately.
    if (state.play) {
      setState({...state, play: false, showControls: true});
      return;
    }

    setState({...state, play: true});
    setTimeout(() => setState(s => ({...s, showControls: false})), 2000);
  }

  function skipBackward() {
    videoRef.current.seek(state.currentTime - 15);
    setState({...state, currentTime: state.currentTime - 15});
  }

  function skipForward() {
    videoRef.current.seek(state.currentTime + 15);
    setState({...state, currentTime: state.currentTime + 15});
  }

  function onSeek(data: OnSeekData) {
    videoRef.current.seek(data.seekTime);
    setState({...state, currentTime: data.seekTime});
  }

  function onLoadEnd(data: OnLoadData) {
    setState(s => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
    }));
  }

  function onProgress(data: OnProgressData) {
    setState(s => ({
      ...s,
      currentTime: data.currentTime,
    }));
  }

  function onEnd() {
    setState({...state, play: false});
    videoRef.current.seek(0);
  }

  function showControls() {
    state.showControls
        ? setState({...state, showControls: false})
        : setState({...state, showControls: true});
  }
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    justifyContent:'center',
    alignSelf:'center',
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenButton: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  controlOverlay: {
    position: 'absolute',
    bottom: 0,
    top:0,
    left: 0,
    right: 0,
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
});
