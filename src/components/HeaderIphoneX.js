/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {isIphoneX} from 'react-native-iphone-x-helper';

import {View, Platform} from 'react-native';

export function HeaderIphoneX() {
  const iPhone = isIphoneX();
  return (
    <View
      style={{
        display: Platform.OS === 'ios' ? 'flex' : 'none',
        height: iPhone ? 45 : 20,
        backgroundColor: 'purple',
      }}
    />
  );
}
