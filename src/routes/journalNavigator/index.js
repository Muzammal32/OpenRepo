import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import CreateDayScreen from '../../screens/CreateDayScreen';
import JournalHomeScreen from '../../screens/JournalHomeScreen';
import MyNotesScreen from '../../screens/MyNotesScreen';
import NotesDetailScreen from '../../screens/NotesDetailScreen';
import SetWeeklyGoalScreen from '../../screens/SetWeeklyGoalScreen';
import TakeNotesScreen from '../../screens/TakeNotesScreen';
import {colors, fonts, icons} from '../../constants';
import OrderJournalScreen from '../../screens/HomeScreen/OrderJournal';
import ChooseOptionScreen from '../../screens/HomeScreen/ChooseOption';
import HomeScreen from '../../screens/HomeScreen';
import FilterScreen from '../../screens/HomeScreen/Filter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from "../../components/Icon";
import DayDataScreen from '../../screens/DayDataScreen';
import ContentLibrary from "../../screens/ContentLibraryScreen";
import FlipTheSwitch from "../../screens/FlipTheSwitchScreen";
import Podcast from "../../screens/PodcastScreen";
import ProductCatalog from "../../screens/ProductCatalogScreen";
import ProductDetails from "../../screens/ProductDetailsScreen";
import ProductOrder from "../../screens/ProductOrdersScreen";
import InviteScreen from "../../screens/InviteScreen";
import ProductCart from "../../screens/ProductCartScreen";
import ProductOrderHistory from "../../screens/ProductOrderHistoryScreen";
import ProductCheckout from "../../screens/ProductCheckoutScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import NotificationSettingScreen from "../../screens/NotificationScreen/NotificationSettings";
import AccountabilityPartnerScreen from "../../screens/AccountabilityPartnerScreen";
import FAQScreen from "../../screens/FAQScreen";
import TermOfUseScreen from "../../screens/TermOfUseScreen";
import BugReportScreen from "../../screens/BugReportScreen";
import GiveFeedBackScreen from "../../screens/GiveFeedBackScreen";
import ContactUsScreen from "../../screens/ContactUsScreen";
import AccountSettingScreen from "../../screens/AccountSettingScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import PaymentMethodScreen from "../../screens/PaymentMethodScreen";
import ChooseJournalScreen from "../../screens/ChooseJournalScreen";
import AddShippingAddressScreen from "../../screens/AddShippingAddressScreen";
import ProductOrderDetailsScreen from "../../screens/ProductOrderDetailsScreen";
import PlayerVideo from "../../screens/PlayerVideo";
import PlayerPdf from "../../screens/PlayerPdf";
import {FontScale, ScreenScale} from "../../utils/CommonHelper";
import NewGoalScreen from "../../screens/SetWeeklyGoalScreen/New Goal";
import AddWeeklyGoal from "../../screens/SetWeeklyGoalScreen/AddWeeklyGoal";

const Tab = createBottomTabNavigator();

function shouldTabBarBeShown(route) {
    switch (route.name) {
        case 'Home':
            return true;
        case 'Journal':
            return true;
        case 'Content Library':
            return true;
        case 'Flip The Switch':
            return true;
        case 'Cart':
            return true;
        default:
            return false;
    }
}


function HomeTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home_icon'
                            : 'home_icon';
                    } else if (route.name === 'Journal') {
                        iconName = focused
                            ? 'journal_icon'
                            : 'journal_icon';
                    } else if (route.name === 'Content Library') {
                        iconName = focused
                            ? 'content_icon'
                            : 'content_icon';
                    } else if (route.name === 'Flip The Switch') {
                        iconName = focused
                            ? 'flip_icon'
                            : 'flip_icon';
                    } else if (route.name === 'Cart'){
                        iconName = focused
                            ? 'cart_icon'
                            : 'cart_icon';
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color}/>;
                },
                tabBarVisible: shouldTabBarBeShown(route),
            })}
            tabBarIcon={{
                size: 10,
            }}

            tabBarOptions={{
                activeTintColor: '#696969',
                inactiveTintColor: '#B4B4B4',
                style: {
                    height: Platform.OS === 'ios' ? 70 : 55,
                    backgroundColor: '#fff',
                    elevation: 100,
                    shadowOpacity: 0.3,
                    borderTopColor: '#70e2b',
                },
                labelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 5,
                    padding: 0,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false, unmountOnBlur: true}}
            />
            <Tab.Screen
                name={'Journal'}
                component={JournalHomeScreen}
                options={({navigation}) => ({
                    headerRight: () => (
                        <TouchableOpacity
                            style={{right: 15}}
                            onPress={() => navigation.navigate('My Notes')}>
                            <Text>All Notes</Text>
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity style={{left: 15}}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    ),
                    unmountOnBlur: true
                })}
            />
            <Tab.Screen
                name={'Content Library'}
                component={ContentLibrary}
                options={{headerShown: false, unmountOnBlur: true}}
            />
            <Tab.Screen
                name={'Flip The Switch'}
                component={FlipTheSwitch}
                options={{headerShown: false, unmountOnBlur: true}}
            />
            <Tab.Screen
                name={'Cart'}
                component={ProductCart}
                options={{headerShown: false, unmountOnBlur: true}}
            />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();
const JournalNavigator = () => (
    <Stack.Navigator
        mode="modal"
        initialRouteName={'ChooseJournal'}
        screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: 'white',
                elevation: 0,
                shadowColor: 'transparent',
            },
            headerTitleStyle: {
                fontFamily: fonts.MEDIUM,
                fontWeight: '400',
                fontSize: FontScale(16),
            },

            headerTintColor: 'black',
        }}>
        <Stack.Screen
            name="Tabs"
            component={HomeTabNavigator}
            options={{headerShown: false, unmountOnBlur: true}}
        />
        <Stack.Screen
            name="OrderJournal"
            component={OrderJournalScreen}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name={"ChooseJournal"}
            component={ChooseJournalScreen}
            options={{headerShown: false}}
            />

        <Stack.Screen
            name="ChooseOption"
            component={ChooseOptionScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{headerShown: false}}
        />

        <Stack.Screen
            name="Take Notes"
            component={TakeNotesScreen}
            options={({navigation}) => ({
                headerRight: () => (
                    <TouchableOpacity
                        style={{right: 15}}
                        onPress={() => navigation.navigate('My Notes')}>
                        <Icon name={'notes_icon'} size={ScreenScale(24)} color={colors.NOBEL}/>
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen name="Set Weekly Goals" component={SetWeeklyGoalScreen}/>
        <Stack.Screen name="New Weekly Goal" component={NewGoalScreen}/>
        <Stack.Screen name="Add Weekly Goal" component={AddWeeklyGoal}/>
        <Stack.Screen
            name="Create Your Day"
            component={CreateDayScreen}
            options={({navigation}) => ({
                headerRight: () => (
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Your Record')}
                        style={{right: 15}}>
                        <Image
                            source={require('../../assets/images/createHeaderIcon.png')}
                        />
                    </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen name="Your Record" component={DayDataScreen}/>
        <Stack.Screen name="My Notes" component={MyNotesScreen}
                      options={({navigation}) => ({
                          headerRight: () => (
                              <TouchableOpacity
                                  style={{right: 15}}
                                  onPress={() => navigation.navigate("Take Notes")}>
                                  <Icon name={'add_icon'} size={ScreenScale(22)} color={colors.NOBEL}/>
                              </TouchableOpacity>
                          ),
                      })}/>
        <Stack.Screen name="Note Details" component={NotesDetailScreen}/>
        <Stack.Screen name="Podcast" component={Podcast}/>
        <Stack.Screen name="Merchandise Store" component={ProductCatalog}
                      options={({navigation}) => ({
                          headerRight: () => (
                              <TouchableOpacity
                                  style={{right: 15}}
                                  onPress={() => navigation.navigate('Tabs',{screen: 'Cart'})}>
                                 <Icon name={'cart_icon'} size={ScreenScale(22)} color={colors.DOVE_GRAY}/>
                              </TouchableOpacity>
                          ),
                      })}/>
        <Stack.Screen name="Product Details" component={ProductDetails}/>
        <Stack.Screen name="My Orders" component={ProductOrder}/>
        <Stack.Screen name="Shopping Cart" component={ProductCart}/>
        <Stack.Screen name="Transaction History" component={ProductOrderHistory}/>
        <Stack.Screen name="Invite Partner" component={InviteScreen}/>
        <Stack.Screen name="Checkout Process" component={ProductCheckout}/>
        <Stack.Screen name="Notifications" component={NotificationScreen}
                      options={({navigation}) => ({
                          headerRight: () => (
                              <TouchableOpacity
                                  style={{right: 15}}
                                  onPress={() => navigation.navigate("Notification Settings")}>
                                  <Image source={icons.SETTINGS}/>
                              </TouchableOpacity>
                          ),
                      })}/>
        <Stack.Screen name="Notification Settings" component={NotificationSettingScreen}/>
        <Stack.Screen name="Accountability Partner" component={AccountabilityPartnerScreen}/>
        <Stack.Screen name="Frequently Asked Questions" component={FAQScreen}/>
        <Stack.Screen name="Terms Of Use" component={TermOfUseScreen}/>
        <Stack.Screen name="Bug Reports" component={BugReportScreen}/>
        <Stack.Screen name="Give Feedback" component={GiveFeedBackScreen}/>
        <Stack.Screen name="Contact Us" component={ContactUsScreen}/>
        <Stack.Screen name="Account Settings" component={AccountSettingScreen}/>
        <Stack.Screen name="My Profile Settings" component={ProfileScreen}/>
        <Stack.Screen name="Payment Methods" component={PaymentMethodScreen}/>
        <Stack.Screen name="Shipping Address" component={AddShippingAddressScreen} />
        <Stack.Screen
            name="Order Details"
            component={ProductOrderDetailsScreen}
        />
        <Stack.Screen
            name="Video Player"
            component={PlayerVideo}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="PDF Viewer"
            component={PlayerPdf}
        />
    </Stack.Navigator>
);
export default JournalNavigator;
