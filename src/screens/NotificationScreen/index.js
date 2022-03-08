import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';;
import {images} from "../../constants";
import CustomButton from "../../components/CustomButton";


const Card = ({type}) =>{

    return (
        <>
            {type === 'friend_request' &&
                <View style={styles.card}>
                    <View style={styles.friend_section}>
                        <View style={styles.date_container}>
                            <Text style={styles.dateText}>Jan 1, 2021</Text>
                            <Text style={styles.dateText}>12:30 PM</Text>
                        </View>
                        <View style={styles.invitationView}>
                            <Text style={styles.invitationText}>invitations</Text>
                        </View>
                        <Text style={styles.bodyText}>Yea! You got a new accountability request from </Text>
                        <View style={styles.profileView}>
                            <Image source={images.VIDEO} imageStyle={styles.image_section} style={styles.image_section}/>
                            <View style={styles.profileViewDetail}>
                                <Text style={styles.name}>Jakob Aminoff</Text>
                                <Text style={styles.detail}>Florida</Text>
                            </View>
                        </View>
                        <CustomButton
                            buttonContainerStyle={styles.btn}
                            buttonTextStyle={styles.btnText}
                            title={'Add to Cart'}
                            onPress={()=>{}}
                        />
                    </View>
                </View>
            }
            {type === 'activity' &&
                <TouchableOpacity style={styles.card} activeOpacity={0.9}>
                    <View style={styles.activity_section}>
                        <View style={styles.date_container}>
                            <Text style={styles.dateText}>Jan 1, 2021</Text>
                            <Text style={styles.dateText}>12:30 PM</Text>
                        </View>
                        <Text style={styles.nameText}>
                            Jakob Aminoff
                            <Text style={styles.detailText}> joined a  partner to see your activity.</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            }
        </>
    )
};

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={[{type:'friend_request'},{type:'activity'},{type:'activity'},{type:'activity'}]}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${item.title}_${index}`}
                renderItem={({item}) => {
                    return (
                        <Card title={''} description={''} image={''} goTo={''} tag={'free'} type={item.type}/>
                    );
                }}
            />
        </View>
    );
};

export default NotificationScreen;
