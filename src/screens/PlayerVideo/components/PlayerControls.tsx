// @ts-ignore
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from "../../../constants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
    playing: boolean;
    showPreviousAndNext: boolean;
    showSkip: boolean;
    previousDisabled?: boolean;
    nextDisabled?: boolean;
    onPlay: () => void;
    onPause: () => void;
    skipForwards?: () => void;
    skipBackwards?: () => void;
    onNext?: () => void;
    onPrevious?: () => void;
}

export const PlayerControls: React.FC<Props> = ({
                                                    playing,
                                                    showPreviousAndNext,
                                                    showSkip,
                                                    previousDisabled,
                                                    nextDisabled,
                                                    onPlay,
                                                    onPause,
                                                    skipForwards,
                                                    skipBackwards,
                                                    onNext,
                                                    onPrevious,
                                                }) => (
    <View style={styles.wrapper}>
        {showPreviousAndNext && (
            <TouchableOpacity
                style={[styles.touchable, previousDisabled && styles.touchableDisabled]}
                onPress={onPrevious}
                disabled={previousDisabled}>
                <MaterialCommunityIcons name={"skip-next"} color={colors.PRIMARY} size={40}/>
            </TouchableOpacity>
        )}

        {showSkip && (
            <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
                <MaterialCommunityIcons name={"skip-backward"} color={colors.PRIMARY} size={40}/>
            </TouchableOpacity>
        )}

        <TouchableOpacity
            style={styles.touchable}
            onPress={playing ? onPause : onPlay}>
            {playing ?
                <MaterialCommunityIcons name={"pause-circle-outline"} color={colors.PRIMARY} size={80}/>
                :
                <MaterialCommunityIcons name={"play-circle-outline"} color={colors.PRIMARY} size={80}/>
            }
        </TouchableOpacity>

        {showSkip && (
            <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
                <MaterialCommunityIcons name={"skip-forward"} color={colors.PRIMARY} size={40}/>
            </TouchableOpacity>
        )}

        {showPreviousAndNext && (
            <TouchableOpacity
                style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
                onPress={onNext}
                disabled={nextDisabled}>
                <MaterialCommunityIcons name={"skip-previous"} color={colors.PRIMARY} size={40}/>
            </TouchableOpacity>
        )}
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 3,
    },
    touchable: {
        padding: 5,
    },
    touchableDisabled: {
        opacity: 0.3,
    },
});
