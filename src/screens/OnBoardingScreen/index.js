import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Divider from '../../components/Divider';
import {theme} from '../../constants';

import data from './data';
import styles from './styles';
import {connect} from "react-redux";
import {onBoarding} from "../../store/user/user-actions";


/**
 * Onboarding Screen Component
 * @returns JSX
 */
const OnBoardingScreen = (props) => {
    const {navigation} = props;
    const {navigate} = navigation;
    const [pageIndex, setPageIndex] = useState(0);

    const handleSkip = async () => {
        navigate('Login');
        props.onBoarding(true);
    };

    return (
        <>
            <AppIntroSlider
                data={data}
                dotStyle={
                    pageIndex === data.length - 1 ? styles.neutralDot : styles.inActiveDot
                }
                activeDotStyle={
                    pageIndex === data.length - 1
                        ? styles.neutralDot
                        : styles.selectedBorder
                }
                showSkipButton={false}
                scrollEventThrottle={16}
                showNextButton={false}
                showDoneButton={false}
                showPrevButton={false}
                onSlideChange={index => setPageIndex(index)}
                renderItem={({item}) => {
                    return (
                        <SliderView
                            title={item.title}
                            text={item.text}
                            image={item.image}
                            onPress={handleSkip}
                        />
                    );
                }}
            />
            {pageIndex === 3 && <GetStarted onPress={handleSkip}/>}
        </>
    );
};

/**
 * Main component for slider
 * @prop {string} title - title of the feature
 * @prop {string} text - description of the feature
 * @prop {string} image - image to display feature type
 * @returns JSX
 */
const SliderView = ({title, text, image, onPress}) => {
    return (
        <View style={styles.screen}>
            <View>
                <Image source={image} style={styles.image}/>
                <SkipButton onPress={onPress}/>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.header}>{title}</Text>
                <Divider vertical={12}/>
                <Text style={styles.paragraph}>{text}</Text>
            </View>
        </View>
    );
};

/**
 * Get started button component, displays only when last page occurs
 * @prop {func} navigate - function for navigation
 * @returns JSX
 */
const GetStarted = ({onPress}) => {
    return (
        <TouchableOpacity
            style={styles.getStartedButton}
            activeOpacity={theme.TOUCH_OPACITY}
            onPress={onPress}>
            <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
    );
};

/**
 * Skip button component
 * @returns JSX
 */
const SkipButton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.skipButton} onPress={onPress}>
            <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
    );
};

const mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps, {onBoarding})(OnBoardingScreen);
