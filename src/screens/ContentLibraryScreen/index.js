import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Modal,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors, images} from "../../constants";
import Loading from "../../components/Loader";
import Icon from "../../components/Icon";
import {connect} from "react-redux";
import Divider from "../../components/Divider";
import {getContentLibrary, getContentLibraryPagination} from "../../store/contentlibrary/content-actions";
import {BackgroundImage} from "react-native-elements/dist/config";
import PlayerScreen from "../PlayerAudio";
import {ScreenScale} from "../../utils/CommonHelper";
import {SearchBar} from "react-native-elements";

const ModalIcons = ({ name, size, onPress, style, color }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.borderTouchable}>
            <View style={[styles.modalIcon, style]}>
                <Icon name={name} size={size} color={color} />
            </View>
        </TouchableOpacity>
    );
};

const Card = ({data, props}) =>{

    return (
        <>
            {data.mediaType === 'pdf' &&
            <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() =>  props.navigation.navigate('PDF Viewer', {url: data.media})}>
                <View style={styles.image_section}>
                    <Image source={{uri:data.thumbnail}} style={styles.image}/>
                </View>
                <View style={styles.description_section}>
                    {data.tags.length > 0 && (
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{data.tags.length > 0 && data.tags[0].name}</Text>
                        </View>
                    )}
                    <Text style={styles.dateAudio}>{data.date}</Text>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.content}>
                        {data.description}
                    </Text>
                </View>
            </TouchableOpacity>
            }

            {data.mediaType === 'audio' &&
            <View style={styles.card}>
                <View style={styles.audio_section}>
                    <Image  source={{uri:data.thumbnail}}  imageStyle={styles.image_section2} style={styles.image_section2}/>
                    <View style={styles.description_audio}>
                        <Text style={styles.dateAudio}>{data.date}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.descriptionTextAudio}>{data.description}</Text>
                    </View>
                </View>
                <PlayerScreen audio={data.media} />
            </View>
            }

            {data.mediaType === 'video' &&
            <TouchableOpacity style={styles.card_video} activeOpacity={0.9} onPress={()=> props.navigation.navigate('Video Player', {url: data.media})}>
                <View style={styles.description_section_video}>
                    <BackgroundImage source={{uri:data.thumbnail}} imageStyle={styles.image_section_video} style={styles.image_section_video}>
                        <Icon name={'Vector-5'} size={ScreenScale(60)} color={colors.WHITE} style={styles.image_video}/>
                    </BackgroundImage>
                    <View>
                        <Text style={styles.dateVideo}>{data.date}</Text>
                    </View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.descriptionVideo}>
                        {data.description}
                    </Text>
                </View>
            </TouchableOpacity>
            }
        </>
    )
};

const useStateCallbackWrapper = (initialValue = '', callBack) => {
    const [state, setState] = useState(initialValue);
    useEffect(() => callBack(state), [state]);
    return [state, setState];
};

const ContentLibrary = (props) => {
    const {navigation} = props;
    const [modalVisible, setModalVisible] = useState(false);
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
        props.getContentLibrary(search, type,(res) => {});
    };

    const [type, setType] = useStateCallbackWrapper('', getContentList);

    const onRefresh = () =>{
        getContentList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.contentPagination.next !== null) {
            split = props.contentPagination.next.split("content-library");
            props.getContentLibraryPagination(props.contentList, split[1], search, type, ()=>{});
        }
    };

    const searchData = () => {
        setModalVisibleSearch(false);
        getContentList()
    };

    return (
        <View style={styles.screen}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6} onPress={()=>[setModalVisible(!modalVisible), setType('')]}>
                            <Icon name={'left_icon'} size={ScreenScale(24)} color={colors.DOVE_GRAY}/>
                            <Text style={styles.choiceText}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6} onPress={()=>[setModalVisible(!modalVisible), setType('audio')]}>
                            <Icon name={'audio_icon'} size={ScreenScale(24)} color={colors.DOVE_GRAY}/>
                            <Text style={styles.choiceText}>Audio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6} onPress={()=>[setModalVisible(!modalVisible), setType('video')]}>
                            <Icon name={'video_icon'} size={ScreenScale(24)} color={colors.DOVE_GRAY}/>
                            <Text style={styles.choiceText}>Video</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6} onPress={()=>[setModalVisible(!modalVisible), setType('pdf')]}>
                            <Icon name={'pdf_icon'} size={ScreenScale(24)} color={colors.DOVE_GRAY}/>
                            <Text style={styles.choiceText}>PDF</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <Loading loading={props.processing}/>
            <View style={styles.sub_view}>
                <Text style={styles.homeText}>Content Library</Text>
                <View style={styles.icon_view}>
                    <ModalIcons
                        style={{paddingVertical: 11, paddingHorizontal: 2}}
                        name={'left_icon'}
                        size={ScreenScale(22)}
                        color={'black'}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                    <Divider horizontal={10}/>
                    <ModalIcons
                        style={{paddingVertical: 11}}
                        name={'search_icon'}
                        size={ScreenScale(22)}
                        color={'black'}
                        onPress={() => setModalVisibleSearch(!modalVisibleSearch)}
                    />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={props.contentList}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    initialNumToRender={10}
                    onRefresh={onRefresh}
                    onEndReachedThreshold={16}
                    onEndReached={LoadMoreRandomData}
                    ListFooterComponent={() =>
                        props.isProcessingMore ? (
                            <View style={{marginBottom: ScreenScale(20)}}>
                                <ActivityIndicator size="large" color={colors.BLACK} />
                            </View>
                        ) : (
                            <View style={{marginBottom: ScreenScale(20)}}/>
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
        contentList: state.content.contentList,
        contentPagination: state.content.contentPagination
    };
};
export default connect(mapStateToProps, {getContentLibrary, getContentLibraryPagination})(ContentLibrary);

