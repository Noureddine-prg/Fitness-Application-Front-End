import React from 'react';
import {Text , View, Image, Button, Pressable} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/Dashboard/dashboard';
import Profile from '../../screens/Profile/profile';

const Tab = createBottomTabNavigator();

const Navbar = () => 
{
    return(
        <Tab.Navigator screenOptions={{tabBarStyle:{
                position: 'absolute',
                backgroundColor: 'rgba(40, 40, 40, 1)',
                height: 50,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,   
        }}}
        >

            <Tab.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
            <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        
        </Tab.Navigator>
    );
};


export default Navbar


