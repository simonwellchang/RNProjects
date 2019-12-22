/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, View, Text, Image, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// 客制Navigator Title
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./images/app_icon.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

/**
 * navigate() 如果對象不存在，就產生一個新的
*/
class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // headerTitle instead of title
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button
          onPress={navigation.getParam('increaseCount')}
            title="+1"
            color={Platform.OS === 'ios' ? '#000' : null}
        />
      ),
      headerLeft: () => (
        <Button
          onPress={() => alert('點到左邊的按鈕!')}
            title="左邊按鈕"
            color="#000"
        />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  };

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details!"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: '詳細頁面',
            });
          }}
        />
      </View>
    );
  }
}

/**
 * push() 每次產生一個新的
 * goBack() 回到上一層
 * popToTop() 回到最初的第一層
*/
class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('otherParam', null),
  //   };
  // };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(itemId)}
        </Text>
        <Text>
          otherParam: {JSON.stringify(otherParam)}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
              otherParam: itemId.toString(),
            })
          }
        />
        <Button
          title="Update the Title"
          onPress={() =>
            this.props.navigation.setParams({
              otherParam: 'Updated!'
            })
          }
        />
        <Button
          title="Go to Back!"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go to Root!"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f8c037',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackImage: <Image
        style={{ width: 20, height: 20 }}
        source={require('./images/star.png')}
        />,
    },
  }
);

export default createAppContainer(AppNavigator);