import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

// Screens
import Search from '../../screens/bottamtabs/search';
import EventListing from '../../screens/bottamtabs/event';
import Profile from '../../screens/bottamtabs/profile';
import Favourite from '../../screens/bottamtabs/favourite';
import { Fontfamily } from '../../constants/fontFamily';
// import { Fontfamily } from '../../constants/fontfamily';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,

        },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let label;

          if (route.name === 'Event') {
            iconSource = require('../../assets/images/event.png');
            label = 'Events';
          } else if (route.name === 'Search') {
            iconSource = require('../../assets/images/search.png');
            label = 'Search';
          } else if (route.name === 'Favourite') {
            iconSource = require('../../assets/images/favourite.png');
            label = 'Favourite';
          } else if (route.name === 'Profile') {
            iconSource = require('../../assets/images/profile.png');
            label = 'Profile';
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center',flex:1,}}>
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  marginTop: 10,
                  tintColor: focused ? '#000000' : '#A9A9A9',
                }}

              />
              <Text
                style={{
                  color: focused ? '#000000' : '#A9A9A9',
                  fontSize: 10,
                  fontFamily: Fontfamily.regular,
                  minWidth: 60,
                  textAlign: 'center',
                  height:12,
                }}

              >
                {label}
              </Text>
            </View>
          );
        }
      })
      }
    >
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Event" component={EventListing} />
      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
