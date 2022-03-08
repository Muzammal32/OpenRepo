import React, {Component} from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/icomoon/selection.json'

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');

export default class Icon extends Component {
    render() {
        return (
            <CustomIcon color={this.props.color} style={this.props.style}
                        size={this.props.size} name={this.props.name}
                        onPress={this.props.onPress} iconStyle={this.props.iconStyle}
                        backgroundColor={this.props.backgroundColor}/>
        );
    }
}
