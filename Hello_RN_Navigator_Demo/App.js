/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, View, Text, Image, Platform, StyleSheet } from 'react-native';
// import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeDetailsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>HomeDetailsScreen!</Text>
      </View>
    );
  }
}

class SettingsDetailsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>SettingsDetailsScreen!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>首頁</Text>
        <Button
          title="導到設定頁"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="導到詳細頁"
          onPress={() => this.props.navigation.navigate('HomeDetails')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>設定頁</Text>
        <Button
          title="導到首頁"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="導到詳細頁"
          onPress={() => this.props.navigation.navigate('SettingsDetails')}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  HomeDetails: HomeDetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  SettingsDetails: SettingsDetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={focused ? require('./images/star.png') : require('./images/app_icon.png')}
              style={{ width: 26, height: 26, tintColor: tintColor }}
            />
          )
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={focused ? require('./images/star.png') : require('./images/app_icon.png')}
              style={{ width: 26, height: 26, tintColor: tintColor }}
            />
          )
      }
    }
  })
);
