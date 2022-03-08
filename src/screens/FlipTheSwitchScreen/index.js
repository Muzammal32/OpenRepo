import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image, Modal,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors} from "../../constants";
import Loading from "../../components/Loader";
import Icon from "../../components/Icon";
import {connect} from "react-redux";
import {BackgroundImage} from "react-native-elements/dist/config";
import {
    getFlipTheSwitch, getFlipTheSwitchPagination
} from "../../store/contentlibrary/content-actions";
import PlayerScreen from "../PlayerAudio";
import {ScreenScale} from "../../utils/CommonHelper";
import {SearchBar} from "react-native-elements";


const ModalIcons = ({name, size, onPress, style, color}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.borderTouchable}>
            <View style={[styles.modalIcon, style]}>
                <Icon name={name} size={size} color={color}/>
            </View>
        </TouchableOpacity>
    );
};

const Card = ({data, props}) => {
    return (
        <>
            {data.mediaType === 'audio' &&
            <View style={styles.card}>
                <View style={styles.audio_section}>
                    <Image source={{uri: data.thumbnail}} imageStyle={styles.image_section2} style={styles.image_section2}/>
                    <View style={styles.description_audio}>
                        <Text style={styles.dateAudio}>{data.date}</Text>
                        <Text style={styles.title}>
                            {data.title}
                        </Text>
                    </View>
                </View>
                <PlayerScreen audio={data.media} />
            </View>}
            {data.mediaType === 'video' &&
            <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={()=> props.navigation.navigate('Video Player', {url: data.media})}>
                <View style={styles.description_section}>
                    <BackgroundImage source={{uri: data.thumbnail}} imageStyle={styles.image_section}
                                     style={styles.image_section}>
                        <Icon name={'Vector-5'} size={ScreenScale(60)} color={colors.WHITE} style={styles.image}/>
                    </BackgroundImage>
                    <View style={styles.tag}>
                        <Text style={styles.dateVideo}>{data.date}</Text>
                    </View>
                    <Text style={styles.title}>
                        {data.title}
                    </Text>
                </View>
            </TouchableOpacity>}
        </>
    )
}

const FlipTheSwitch = (props) => {
    const {navigation} = props;

    const [modalVisibleSearch, setModalVisibleSearch] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getContentList();
        });
    }, []);

    const getContentList = () => {
        props.getFlipTheSwitch(search,(res) => {
        });
    };

    const onRefresh = () => {
        getContentList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.flipTheSwitchPagination.next !== null) {
            split = props.flipTheSwitchPagination.next.split("flip-the-switch");
            props.getFlipTheSwitchPagination(props.flipTheSwitchList, split[1], search, () => {
            });
        }
    };

    const searchData = () => {
        setModalVisibleSearch(false);
        getContentList()
    };


    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <Loading loading={props.processing}/>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisibleSearch}
                onRequestClose={() => {
                    setModalVisibleSearch(!modalVisibleSearch);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <SearchBar
                            platform={'default'}
                            containerStyle={{backgroundColor: colors.WHITE, borderWidth: 1, borderRadius: 10, borderColor: colors.BON_JOUR}}
                            inputContainerStyle={{backgroundColor: colors.WHITE, borderWidth: 0}}
                            lightTheme={true}
                            round={true}
                            value={search}
                            showLoading={false}
                            cancelIcon={true}
                            onChangeText={setSearch}
                            onClear={()=> searchData()}
                            onBlur={()=> searchData()}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.sub_view}>
                <Text style={styles.homeText}>Flip The Switch</Text>
                <View style={styles.icon_view}>
                    <ModalIcons
                        style={{paddingVertical: 11}}
                        name={'search_icon'}
                        size={ScreenScale(22)}
                        color={'black'}
                        onPress={() => {setModalVisibleSearch(true)}}
                    />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={props.flipTheSwitchList}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    initialNumToRender={10}
                    onRefresh={onRefresh}
                    onEndReachedThreshold={0}
                    onEndReached={LoadMoreRandomData}
                    ListFooterComponent={() =>
                        props.isProcessingMore ? (
                            <View style={{marginBottom: ScreenScale(20)}}>
                                <ActivityIndicator size="large" color={colors.BLACK}/>
                            </View>
                        ) : (
                            <View/>
                        )
                    }
                    numColumns={1}
                    contentContainerStyle={{paddingHorizontal: 1}}
                    // columnWrapperStyle={{justifyContent:'space-between'}}
                    keyExtractor={(item, index) => `${item.title}_${index}`}
                    renderItem={({item}) => {
                        return (
                            <Card data={item} props={props}/>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.content.processing,
        isProcessingMore: state.content.isProcessingMore,
        flipTheSwitchList: state.content.flipTheSwitchList,
        flipTheSwitchPagination: state.content.flipTheSwitchPagination
    };
};
export default connect(mapStateToProps, {getFlipTheSwitch, getFlipTheSwitchPagination})(FlipTheSwitch);



