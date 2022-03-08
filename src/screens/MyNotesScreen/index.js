import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {colors, icons} from '../../constants';
import {connect} from 'react-redux';
import {deleteNotes, getNotes, getNotesPagination} from '../../store/journal/journal-actions';
import {dateFormat, dayFormat, ScreenScale} from "../../utils/CommonHelper";
import Icon from "../../components/Icon";
import Divider from "../../components/Divider";

const MyNotesScreen = (props) => {

    const {navigation, numberOfColumns = 2} = props;
    const [hasScroll, setHasScrolled] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getNoteList();
        });
    }, []);

    const getNoteList = () => {
        props.getNotes((res) => {});
    };

    const onRefresh = () =>{
        getNoteList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.notesPagination.next !== null) {
            split = props.notesPagination.next.split("notes");
            props.getNotesPagination(props.notesList, split[1], ()=>{});
        }
    };

    const onScroll = () => {
        setHasScrolled(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.WHITE}/>
            {props.notesList.length > 0 ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    initialNumToRender={10}
                    data={props.notesList}
                    numColumns={numberOfColumns}
                    style={{flex: 1}}
                    onRefresh={onRefresh}
                    keyExtractor={(item, index) => `${item.title}_${index}`}
                    onEndReachedThreshold={0}
                    onEndReached={LoadMoreRandomData}
                    ListFooterComponent={() =>
                        props.isNotesLoadingMore ? (
                            <ActivityIndicator size="large" color={colors.BLACK} />
                        ) : (
                            <View />
                        )
                    }
                    renderItem={({item}) => {
                        return (
                            <MyNotes
                                item={item}
                                props={props}
                                onPress={() =>
                                    navigation.navigate('Note Details', {
                                        data: item,
                                    })
                                }
                            />
                        );
                    }}
                />
            ) : (
                <View>
                    <Divider vertical={6} />
                    <View style={styles.inputMainContainer}>
                        <Text style={styles.daysContainer}> No Notes Found!</Text>
                    </View>
                    <Divider vertical={6} />
                </View>
            )}
        </View>
    );
};

const MyNotes = ({item, onPress, props}) => {

    const getNoteList = (message) => {
        props.getNotes((res) => {
            if (res.success){
                Alert.alert("Be Fulfilled", message)
            }
        });
    };

    const deleteMyNote = (data) =>{
        props.deleteNotes(data.id, (res)=>{
            if (res.success){
                getNoteList(res.message)
            }
        });
    };

    return (
        <TouchableOpacity style={styles.notesContainer} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Text style={styles.text}>{item.title_notes}</Text>
                <TouchableOpacity onPress={() => deleteMyNote(item)}>
                    <Icon name={'delete_icon'} size={ScreenScale(18)} color='#B4B4B4' style={{alignSelf:'flex-end'}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.noteContainer}>
                <Text style={styles.note}>{item.notes_description.slice(0, 100)}</Text>
            </View>
            {item.notes_description.length > 100 && (
                <View style={styles.dots}>
                    <Image source={icons.DOTS}/>
                </View>
            )}
            <View style={styles.noteContainer}>
                <Text style={styles.note}>{"Created At : "+dayFormat(item.created_at)+" , "+dateFormat(item.created_at)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        isNotesLoadingMore: state.journal.isNotesLoadingMore,
        notesList: state.journal.notesList,
        notesPagination: state.journal.notesPagination
    };
};
export default connect(mapStateToProps, {getNotes, getNotesPagination, deleteNotes})(MyNotesScreen);
