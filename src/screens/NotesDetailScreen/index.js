import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {colors, icons} from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {deleteNotes, getNotes} from '../../store/journal/journal-actions';
import {dateFormat, dayFormat, ScreenScale} from "../../utils/CommonHelper";
import Icon from "../../components/Icon";

const NotesDetailScreen = (props) => {
  const { route } = props
  const {
    params: { data },
  } = route;

  const deleteMyNote = (data) =>{
    props.deleteNotes(data.id, (res)=>{
      if (res.success){
        Alert.alert("Be Fulfilled", res.message);
        props.navigation.navigate("My Notes")
      }
    });
  };

  return (
    <ScrollView style={{backgroundColor:colors.BACKGROUND_CLR}}>
      <View style={styles.notesContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.text}>{data.title_notes}</Text>
          <TouchableOpacity onPress={() => deleteMyNote(data)}>
            <Icon name={'delete_icon'} size={ScreenScale(16)} color={'#B4B4B4'} style={{alignSelf:'flex-end'}}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.note}>{data.notes_description}</Text>
        <View style={styles.notesDateContainer}>
          <Text style={styles.note}>{"Created At : "+dayFormat(data.created_at)+" , "+dateFormat(data.created_at)}</Text>
        </View>
      </View>
    </ScrollView>
  );
};


const mapStateToProps = (state) => {
  return {
    processing: state.journal.processing,
  };
};
export default connect(mapStateToProps, {getNotes, deleteNotes})(NotesDetailScreen);

