import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'

// import { LogBox } from 'react-native';
import Main from './src/components/Main/Main'


export default function App() {
    // LogBox.ignoreLogs(['Remote debugger']);
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}