import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AddressScreen from '../../screens/AddressScreen';
import AgreementScreen from '../../screens/AgreementScreen';
import AvatarAndPhoneScreen from '../../screens/AvatarAndPhoneScreen';
import CreateAccountScreen from '../../screens/CreateAccountScreen';
import EmailPasswordResetScreen from '../../screens/EmailPasswordResetScreen';
import InviteScreen from '../../screens/InviteScreen';
import LoginScreen from '../../screens/LoginScreen';
import OtpScreen from '../../screens/OtpScreen';
import PasswordResetSelectionScreen from '../../screens/PasswordResetSelectionScreen';
import PhonePasswordResetScreen from '../../screens/PhonePasswordResetScreen';
import PhoneVerificationScreen from '../../screens/PhoneVerificationScreen';
import PhoneVerificationResetScreen from '../../screens/PasswordResetSelectionScreen/PhoneVerificationResetScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import ResetPasswordVerificationScreen from '../../screens/ResetPasswordVerificationScreen';
import PasswordResetSelectedScreen from '../../screens/PasswordResetSelectionScreen/PasswordResetSelected';
import {connect} from "react-redux";
import OnBoardingScreen from "../../screens/OnBoardingScreen";


const Stack = createStackNavigator();

const AuthNavigator = (props) => {
    return (
        <Stack.Navigator mode="modal">
            {!props.firstTime ?
                <Stack.Screen
                    name="Onboarding"
                    component={OnBoardingScreen}
                    options={{headerShown: false}}
                />:
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
            }
            <Stack.Screen
                name="CreateAccount"
                component={CreateAccountScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="Agreement"
                component={AgreementScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="Invite Partner"
                component={InviteScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="Avatar"
                component={AvatarAndPhoneScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="OTP"
                component={OtpScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="PhoneVerification"
                component={PhoneVerificationScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Address"
                component={AddressScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                }}
            />
            <Stack.Screen
                name="ResetSelection"
                component={PasswordResetSelectionScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                    title: 'Reset'
                }}
            />
            <Stack.Screen
                name="ResetSelected"
                component={PasswordResetSelectedScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                    title: 'Reset'
                }}
            />
            <Stack.Screen
                name="EmailReset"
                component={EmailPasswordResetScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                    title: 'Reset'
                }}
            />
            <Stack.Screen
                name="PhoneReset"
                component={PhonePasswordResetScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                    title: 'Reset'
                }}
            />
            <Stack.Screen
                name="PhoneVerificationReset"
                component={PhoneVerificationResetScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTintColor: 'black',
                    title: 'Reset'
                }}
            />
            <Stack.Screen
                name="ResetVerification"
                component={ResetPasswordVerificationScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

const mapStateToProps = (state) => {
    return {
        firstTime: state.auth.firstTime
    };
};
export default connect(mapStateToProps, {})(AuthNavigator);
