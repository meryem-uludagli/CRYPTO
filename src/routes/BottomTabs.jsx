import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/feedScreen/FeedScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 28, height: 29, marginTop: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={FeedScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/wallet.png')}
              style={{width: 40, height: 40, marginTop: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={FeedScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/Frame.png')}
              style={{width: 40, height: 40, marginTop: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={FeedScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/rank.png')}
              style={{width: 40, height: 40, marginTop: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={FeedScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user.png')}
              style={{width: 40, height: 40, marginTop: 5}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
