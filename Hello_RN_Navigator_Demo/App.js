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

class PromoteDetailsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>PromoteDetailsScreen!</Text>
      </View>
    );
  }
}

class TaskDetailsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>TaskDetailsScreen!</Text>
      </View>
    );
  }
}

class MineDetailsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>MineDetailsScreen!</Text>
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
          title="導到分享頁"
          onPress={() => this.props.navigation.navigate('Promote')}
        />
        <Button
          title="導到首頁詳細頁"
          onPress={() => this.props.navigation.navigate('HomeDetails')}
        />
      </View>
    );
  }
}

class PromoteScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>分享</Text>
        <Button
          title="導到任務頁"
          onPress={() => this.props.navigation.navigate('Task')}
        />
        <Button
          title="導到分享詳細頁"
          onPress={() => this.props.navigation.navigate('PromoteDetails')}
        />
      </View>
    );
  }
}

class TaskScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>任務</Text>
        <Button
          title="導到我的頁"
          onPress={() => this.props.navigation.navigate('Mine')}
        />
        <Button
          title="導到任務詳細頁"
          onPress={() => this.props.navigation.navigate('TaskDetails')}
        />
      </View>
    );
  }
}

class MineScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>我的</Text>
        <Button
          title="導到首頁"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="導到我的詳細頁"
          onPress={() => this.props.navigation.navigate('MineDetails')}
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

const PromoteStack = createStackNavigator({
  Promote: PromoteScreen,
  PromoteDetails: PromoteDetailsScreen,
});

const TaskStack = createStackNavigator({
  Task: TaskScreen,
  TaskDetails: TaskDetailsScreen,
});

const MineStack = createStackNavigator({
  Mine: MineScreen,
  MineDetails: MineDetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
          tabBarLabel: '首頁',
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={focused ? require('./images/s_1.png') : require('./images/1.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
      }
    },
    Promote: {
      screen: PromoteStack,
      navigationOptions: {
          tabBarLabel: '分享',
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={focused ? require('./images/s_2.png') : require('./images/2.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
      }
    },
    Task: {
      screen: TaskStack,
      navigationOptions: {
          tabBarLabel: '任務',
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={focused ? require('./images/s_3.png') : require('./images/3.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
      }
    },
    Mine: {
      screen: MineStack,
      navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({ focused, tintColor }) => (
            <Image
              source={focused ? require('./images/s_4.png') : require('./images/4.png')}
              style={{ width: 20, height: 20 }}
            />
          ),
      },
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#f8c037',
      inactiveTintColor: 'grey',
    },
  })
);
