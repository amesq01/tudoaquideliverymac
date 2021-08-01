/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {
  View,
  Text,
  Platform,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome5';

export function Login() {
  const [color, SetColor] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: 'purple',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image
          source={{
            uri: 'https://img2.gratispng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg',
          }}
          style={{width: 40, height: 40, borderRadius: 50}}
        />
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          Tudo Aqui Delivery
        </Text>
        <Image
          source={{
            uri: 'https://ps.w.org/bc-menu-cart-woo/assets/icon-256x256.png?rev=2092058',
          }}
          style={{width: 40, height: 40, borderRadius: 50}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 5,
          justifyContent: 'space-between',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'gray',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <Icon name="map-marker-alt" size={20} color="gray" />
            <Text style={{marginLeft: 5, fontSize: 12}}>
              200, Rua Godofredo Viana
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text style={{marginRight: 5}}>ON</Text>
            <Icon name="clock" size={20} color="gray" />
          </View>
        </View>
        <View
          style={{
            height: 'auto',
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
          }}>
          <Icon name="home" size={20} color="gray" />
        </View>
      </View>

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['green', 'red', 'blue']}
        style={{height: StyleSheet.hairlineWidth}}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,

        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 10,
          }}>
          {/* BOTAO RETIRE */}
          <TouchableOpacity
            style={{
              backgroundColor: color ? 'purple' : 'rgba(0,0,0, 0.4)',
              padding: 10,
              borderRadius: 5,
              width: '40%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => SetColor(true)}>
            <Icon name="map-pin" size={20} color="white" />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: 10,
              }}>
              Retire
            </Text>
          </TouchableOpacity>
          {/* BOTAO RETIRE AQUI */}

          {/* BOTAO RECEBA */}

          <TouchableOpacity
            style={{
              backgroundColor: color ? 'gray' : 'purple',
              padding: 10,
              borderRadius: 5,
              flexDirection: 'row',
              width: '45%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => SetColor(false)}>
            <Icon name="home" size={20} color="white" />
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: 10,
              }}>
              Receba
            </Text>
          </TouchableOpacity>
          {/* BOTAO RECEBA */}
        </View>
        <View></View>
      </ScrollView>
      <View style={{height:45}}></View>
    </View>
  );
}
