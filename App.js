import React from 'react';
import {Provider} from 'react-redux';
import store from '/src/store/store';

import Routes from '/src/routes';
import {LogBox} from "react-native";
import {MenuProvider} from 'react-native-popup-menu';
import {Settings} from 'react-native-fbsdk-next';

LogBox.ignoreAllLogs();

const App = () => {
    // Ask for consent first if necessary
    // Possibly only do this for iOS if no need to handle a GDPR-type flow
    Settings.initializeSDK();
    return (
        <Provider store={store}>
            <MenuProvider>
                <Routes/>
            </MenuProvider>
        </Provider>
    );
};

export default App;
