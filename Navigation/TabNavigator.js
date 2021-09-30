import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab=createBottomTabNavigator()

const BottomTabNavigator=()=>{
    return(
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name==='Feed'){
          iconName=focused
          ?'book'
          :'book-outline'
        }
        else if(route.name==='CreateStory'){
          iconName=focused
          ?'create'
          :'create-outline'
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
    })}
    tabBarOptions={{
      activeTintColor:'blue',
      inactiveTintColor:'red'
    }}>
    <Tab.Screen name="Feed" Component={Feed}/>
    <Tab.Screen name="CreateStory" Component={CreateStory}/>

    </Tab.Navigator> 
    )
}

export default BottomTabNavigator