import { StyleSheet, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CLR,
    },
    sub_view:{
        flexDirection:'row',
        padding:'2%',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderBottomWidth:0.3,
        borderColor:colors.NOBEL
    },
    headTextName: {
        alignSelf: 'center',
        marginTop: hp('20%'),
        fontWeight: '300',
        fontSize: FontScale(26),
        fontFamily: fonts.LIGHT,
    },
    homeText:{
        marginLeft: 20,
        alignSelf: 'center',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        textAlign:'center'
    },
    icon_view:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        marginRight: ScreenScale(20),
    },
    borderTouchable:{
        backgroundColor:colors.WHITE,
        paddingHorizontal: ScreenScale(10),
        borderRadius: ScreenScale(10),
        elevation: 3,
        shadowOpacity: 0.1,
        borderWidth: 1,
        borderColor: '#E9E6E6'
    },
    borderTouchable2:{
        margin:'2%'
    },
    headText: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: FontScale(26),
        fontFamily: fonts.MEDIUM,
        textAlign:'center'
    },
    card:{
        marginVertical: 10,
        width: '90%',
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        elevation: 3,
        shadowOpacity:0.2,
        borderRadius: ScreenScale(20)
    },
    image_section:{
        height: ScreenScale(200),
        backgroundColor:colors.SILVER,
        borderTopLeftRadius: ScreenScale(20),
        borderTopRightRadius: ScreenScale(20),
        justifyContent: 'center'
    },
    image:{
        width:'100%',
        height: '100%',
        borderWidth:1,
        borderTopLeftRadius: ScreenScale(20),
        borderTopRightRadius: ScreenScale(20),
    },
    imageText: {
        fontSize: FontScale(24),
        color:colors.WHITE,
        alignSelf:'center'
    },
    description_section:{
        backgroundColor:colors.WHITE,
        borderBottomLeftRadius: ScreenScale(20),
        borderBottomRightRadius: ScreenScale(20),
        justifyContent: 'center',
        padding: ScreenScale(20)
    },
    title:{
        fontSize: FontScale(20),
        color:colors.BLACK,

    },
    tag:{
        paddingHorizontal: ScreenScale(10),
        position:'absolute',
        height: ScreenScale(24),
        backgroundColor:colors.BLACK,
        top: -10,
        left: 10,
        alignItems: "center",
        justifyContent:'center'
    },
    tagText:{
        fontSize: FontScale(12),
        color:colors.WHITE,
    },
    content: {
        marginTop: ScreenScale(14),
        fontSize: FontScale(14),
        color:colors.DOVE_GRAY,
    },
    numberOfLessons:{
        marginTop: ScreenScale(14),
        color:'#B4B4B4',
        fontSize: FontScale(14)
    },
    centeredView: {
        flex: 1,
        marginTop: ScreenScale(45),
        backgroundColor: "rgba(196,196,196,0.8)"
    },
    modalView: {
        margin: ScreenScale(20),
        backgroundColor: "white",
        borderRadius: ScreenScale(20),
        padding: ScreenScale(35),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    viewChoice:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: ScreenScale(10)
    },
    choiceText:{
        fontSize: FontScale(18),
        color:colors.DOVE_GRAY,
        marginLeft: ScreenScale(20)
    },
    audio_section:{
        backgroundColor:colors.WHITE,
        borderTopLeftRadius: ScreenScale(20),
        borderTopRightRadius: ScreenScale(20),
        justifyContent: 'center',
        padding: ScreenScale(20),
        flexDirection:'row'
    },
    image_section2:{
        flex:0.3,

        height: ScreenScale(100),
        width: ScreenScale(100),
        backgroundColor:colors.SILVER,
        borderRadius: ScreenScale(20),
    },
    description_audio:{
        flex:0.7,
        marginLeft: ScreenScale(20)
    },
    descriptionTextAudio:{
        fontSize: 14,
        color: colors.BLACK,
        marginTop:6
    },
    dateAudio:{
        fontSize: 14,
        color: '#B4B4B4',
        marginTop: 5
    },
    audio_player:{
        flex:1,
        backgroundColor:colors.WHITE,
        borderBottomLeftRadius: ScreenScale(20),
        borderBottomRightRadius: ScreenScale(20),
        padding: ScreenScale(20),
        flexDirection:'row',
        alignItems: 'center'
    },
    timeRemainStyle:{
        fontSize: 14,
        color: '#696969',
        alignSelf:'center',
        marginLeft: ScreenScale(10)
    },
    slider: {
        flex:1
    },


    card_video:{
        marginVertical: ScreenScale(10),
        width: '90%',
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        elevation: 3,
        shadowOpacity:0.3,
        borderRadius: ScreenScale(20)
    },
    image_section_video:{
        height: ScreenScale(200),
        backgroundColor:colors.SILVER,
        borderRadius: ScreenScale(20),
        justifyContent: 'center'
    },
    image_video:{
        alignSelf:'center',
        justifyContent:'center',
    },
    imageText_video: {
        fontSize: FontScale(24),
        color:colors.WHITE,
        alignSelf:'center'
    },
    description_section_video:{
        backgroundColor:colors.WHITE,
        borderRadius: ScreenScale(20),
        justifyContent: 'center',
        padding: ScreenScale(20)
    },
    title_video:{
        fontSize: ScreenScale(20),
        color:colors.BLACK,

    },
    dateVideo:{
        fontSize: ScreenScale(14),
        color: '#B4B4B4',
        marginTop: ScreenScale(21)
    },
    descriptionVideo:{
        fontSize: FontScale(14),
        color: '#B4B4B4',
        marginTop: ScreenScale(14)
    },
});
