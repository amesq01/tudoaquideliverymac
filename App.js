/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {getBottomSpace, isIphoneX} from 'react-native-iphone-x-helper';

import {View, StatusBar, Platform} from 'react-native';
import {Login} from './src/screens/Login';
import {HeaderIphoneX} from './src/components/HeaderIphoneX';

export default function App() {
  const iPhone = isIphoneX();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 0,
      }}>
      <HeaderIphoneX />
      <StatusBar barStyle="light-content" backgroundColor="purple" />
      <Login />
    </View>
  );
}
