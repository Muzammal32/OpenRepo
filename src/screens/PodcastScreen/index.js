import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image, Modal,
    StatusBar,
    Text, TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors,} from "../../constants";
import Loading from "../../components/Loader";
import {connect} from "react-redux";
import {
    getPodcast,
    getPodcastPagination
} from "../../store/contentlibrary/content-actions";
import PlayerScreen from "../PlayerAudio";
import {ScreenScale} from "../../utils/CommonHelper";
import {SearchBar} from "react-native-elements";
import Icon from "../../components/Icon";

const Card = ({data, props}) =>{
    return (
        <View style={styles.card}>
            <View style={styles.audio_section}>
                <Image source={{uri: data.thumbnail}} imageStyle={styles.image_section2} style={styles.image_section2}/>
                <View style={styles.description_audio}>
                    <Text style={styles.dateAudio}>{data.date}</Text>
                    <Text style={styles.descriptionTextAudio}>
                        {data.title}
                    </Text>
                </View>
            </View>
            <PlayerScreen audio={data.media} />
        </View>
    )
};

const ModalIcons = ({ name, size, onPress, style, color }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.borderTouchable}>
            <View style={[styles.modalIcon, style]}>
                <Icon name={name} size={size} color={color} />
            </View>
        </TouchableOpacity>
    );
};

const Podcast = (props) => {
    const {navigation} = props;
    const [modalVisibleSearch, setModalVisibleSearch] = useState(false);
    const [search, setSearch] = useState('');

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <View style={{marginRight: 20}}>
                    <ModalIcons
                        style={{paddingVertical: 8}}
                        name={'search_icon'}
                        size={20}
                        color={'black'}
                        onPress={() => setModalVisibleSearch(!modalVisibleSearch)}
                    />
                </View>
            ),
        });
    }, [navigation]);



    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getContentList();
        });
    }, []);

    const getContentList = () => {
        props.getPodcast(search,(res) => {});
    };

    const onRefresh = () =>{
        getContentList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.podcastsPagination.next !== null) {
            split = props.podcastsPagination.next.split("podcasts");
            props.getPodcastPagination(props.podcastsList, split[1], search,()=>{});
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
                            onClear={()=>searchData()}
                            onBlur={()=> searchData()}
                        />
                    </View>
                </View>
            </Modal>
            <View contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.homeText}>Total You have {props.podcastsList.length} Podcasts</Text>
                <FlatList
                    data={props.podcastsList}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    initialNumToRender={10}
                    onRefresh={onRefresh}
                    onEndReachedThreshold={0}
                    onEndReached={LoadMoreRandomData}
                    ListFooterComponent={() =>
                        props.isProcessingMore ? (
                            <View style={{marginBottom: ScreenScale(50)}}>
                                <ActivityIndicator size="large" color={colors.BLACK} />
                            </View>
                        ) : (
                            <View style={{marginBottom: ScreenScale(50)}}/>
                        )
                    }
                    numColumns={1}
                    contentContainerStyle={{paddingHorizontal: 1}}
                    keyExtractor={(item, index) => `${item.title}_${index}`}
                    renderItem={({item}) => {
                        return (
                            <Card data={item} props={props}/>
                        );
                    }}
                />
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.content.processing,
        isProcessingMore: state.content.isProcessingMore,
        podcastsList: state.content.podcastsList,
        podcastsPagination: state.content.podcastsPagination
    };
};
export default connect(mapStateToProps, {getPodcast, getPodcastPagination})(Podcast);



