import React from 'react';
import {View, Text} from 'react-native';
import MenuSvg from '../../assets/svg/menu.svg';

export const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <MenuSvg />
      <Text style={{color: '#000'}}>Home Screen</Text>
    </View>
  );
};
