import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import MessageScreen from './screens/MessageScreen';
import MapScreen from './screens/MapScreen';


const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          //} else if (route.name === 'Perfil') {
           // iconName = focused ? 'person' : 'person-outline';
          //} else if (route.name === 'Mensajes') {
           // iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          //} else if (route.name === 'Mapa') {
           // iconName = focused ? 'map' : 'map-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#33883F',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          paddingVertical: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute', 
          left: 0,
          right: 0,
          bottom: 0,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      })}
    >
       <Tab.Screen name="Inicio" component={HomeScreen} />
      {/*<Tab.Screen name="Mensajes" component={MessageScreen} />*/}
      {/*<Tab.Screen name="Mapa" component={MapScreen} />*/}
      {/*<Tab.Screen name="Perfil" component={UserScreen} />*/}
    </Tab.Navigator>
  );
}
