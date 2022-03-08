import React from 'react'
import { View, Image, Text, Slider, TouchableOpacity, Platform, Alert} from 'react-native';
import Sound from 'react-native-sound';
import {colors} from "../../constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default class cdPlayerScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            playState:'paused', //playing, paused
            playSeconds:0,
            duration:0
        }
        this.sliderEditing = false;
    }

    componentDidMount(){
        this.timeout = setInterval(() => {
            if(this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing){
                this.sound.getCurrentTime((seconds, isPlaying) => {
                    this.setState({playSeconds:seconds});
                })
            }
        }, 100);
    }
    componentWillUnmount(){
        if(this.sound){
            this.sound.release();
            this.sound = null;
        }
        if(this.timeout){
            clearInterval(this.timeout);
        }
    }

    onSliderEditStart = () => {
        this.sliderEditing = true;
    }
    onSliderEditEnd = () => {
        this.sliderEditing = false;
    }
    onSliderEditing = value => {
        if(this.sound){
            this.sound.setCurrentTime(value);
            this.setState({playSeconds:value});
        }
    }

    play = async () => {
        if(this.sound){
            this.sound.play(this.playComplete);
            this.setState({playState:'playing'});
        }else{
            const filepath = this.props.audio;

            this.sound = new Sound(filepath, '', (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    // Alert.alert('Notice', 'audio file error. (Error code : 1)');
                    this.setState({playState:'paused'});
                }else{
                    this.setState({playState:'playing', duration:this.sound.getDuration()});
                    this.sound.play(this.playComplete);
                }
            });
        }
    }
    playComplete = (success) => {
        if(this.sound){
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
            this.setState({playState:'paused', playSeconds:0});
            this.sound.setCurrentTime(0);
        }
    }

    pause = () => {
        if(this.sound){
            this.sound.pause();
        }

        this.setState({playState:'paused'});
    }

    getAudioTimeString(seconds){
        const h = parseInt(seconds/(60*60));
        const m = parseInt(seconds%(60*60)/60);
        const s = parseInt(seconds%60);

        return ((m<10?'0'+m:m) + ':' + (s<10?'0'+s:s));
    }

    render(){

        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
        const durationString = this.getAudioTimeString(this.state.duration);

        return (
            <View style={{ flex:1, backgroundColor:colors.WHITE, borderBottomLeftRadius:20, borderBottomRightRadius:20,
                padding: 20, flexDirection:'row', alignItems: 'center'}}>
                {this.state.playState == 'playing' &&
                <TouchableOpacity activeOpacity={0.8} style={{padding: 5}} onPress={this.pause}>
                    <MaterialCommunityIcons name={'pause-circle'} size={30}/>
                </TouchableOpacity>}
                {this.state.playState == 'paused' &&
                <TouchableOpacity activeOpacity={0.8} style={{padding: 5}} onPress={this.play}>
                    <MaterialCommunityIcons name={'play-circle'} size={30}/>
                </TouchableOpacity>
                }
                <Text style={{
                    fontSize: 14,
                    color: '#696969',
                    alignSelf:'center',
                    marginLeft: 10}}>{currentTimeString}</Text>
                <Slider
                    onTouchStart={this.onSliderEditStart}
                    // onTouchMove={() => console.log('onTouchMove')}
                    onTouchEnd={this.onSliderEditEnd}
                    // onTouchEndCapture={() => console.log('onTouchEndCapture')}
                    // onTouchCancel={() => console.log('onTouchCancel')}
                    onValueChange={this.onSliderEditing}
                    value={this.state.playSeconds}
                    maximumValue={this.state.duration}
                    thumbTintColor={'#696969'}
                    maximumTrackTintColor={'#E9E6E6'}
                    minimumTrackTintColor={'#696969'}
                    style={{flex:1, alignSelf:'center', marginHorizontal:Platform.select({ios:5})}}/>
                <Text style={{  fontSize: 14,
                    color: '#696969',
                    alignSelf:'center',
                    marginLeft: 10}}>{durationString} min</Text>
            </View>
        )
    }
}
