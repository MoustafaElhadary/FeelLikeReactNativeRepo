import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import { StyleSheet, Platform, StatusBar } from 'react-native';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: TabNavigator,
    },
    
  } ,
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
}
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator/>;
  }
}