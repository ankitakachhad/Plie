import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventListing from '../screens/bottamtabs/event';
import TabNavigator from '../globle/customBottamTab/customBottamTab';
import Login from '../screens/auth';

const Stack = createStackNavigator();

const MainRouter = () => {
    return (

        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="EventListing" component={EventListing} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>

    );
};

export default MainRouter;



