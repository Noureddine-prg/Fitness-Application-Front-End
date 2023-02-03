import React from 'react';
import {Text , View, Image, Button, Pressable} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../screens/Dashboard/dashboard';
import Profile from '../../screens/Profile/profile';
import { Ionicons , SimpleLineIcons } from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();

const iconSize = 30;
let iconColor;

const Navbar = () => 
{
    return(
        <Tab.Navigator screenOptions={{tabBarStyle:{
                position: 'absolute',
                backgroundColor: 'rgba(40, 40, 40, 1)',
                height: 80,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,             
                borderTopWidth: 0,
                paddingTop: 15,                
        }}}>

            <Tab.Screen 
                name="Dashboard" 
                component={Dashboard} 
                options={{
                    headerShown: false, 
                    tabBarShowLabel: false,
                    tabBarIcon: ({color,size, focused}) => (
                        <SimpleLineIcons name="home" size={iconSize} color={iconColor} style={focused ? iconColor = "black" : iconColor = "white" }/>
                    ),
                }}

            />

            <Tab.Screen 
                name="Profile" 
                component={Profile}  
                options={{
                    headerShown: false, 
                    tabBarShowLabel: false,
                    tabBarIcon: ({color , size, focused}) => (
                        <Ionicons name="person-outline" size={iconSize} color={iconColor} style={focused ? iconColor = "black" : iconColor = "white" }/>   
                    ),
                }}
                    
            />



        
        </Tab.Navigator>
    );
};


export default Navbar


