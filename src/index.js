import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux'

import HomeScreen from './containers/home'
import Drawer from './containers/drawer'

const RootNavigator = DrawerNavigator({
    Home: {
	screen: HomeScreen
    }
},{
    drawerPosition: 'right',
    drawerWidth: 120,
    contentComponent: Drawer
});

export default RootNavigator
