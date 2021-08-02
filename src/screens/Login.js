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

  //const hamburguer = {{uri:'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg'}};

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
        <Icon name="bars" size={30} color="white" />
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
          paddingBottom:30
       
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
              width: '30%',
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
              width: '30%',
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

        <View style={{height: 250, marginTop: 10}}>
          <ScrollView
            horizontal
            style={{}}
            showsHorizontalScrollIndicator={false}>
            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}
          </ScrollView>
        </View>

        <View
          style={{
            height: 110,
            marginTop: 20,

            width: '100%',
          }}>
          <ScrollView
            horizontal
            style={{flex: 1}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}>
            <View
              style={{
                marginHorizontal: 20,
                borderRadius: 5,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'green'
              }}>
              <Text>Hello testando testando</Text>
            </View>

            <View
              style={{
                backgroundColor: 'green',

                borderRadius: 5,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Hello testando testando</Text>
            </View>

            <View
              style={{
                backgroundColor: 'green',
                marginHorizontal: 20,
                borderRadius: 5,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Hello testando testando</Text>
            </View>
          </ScrollView>
        </View>

        <View style={{height: 250, marginTop: 10}}>
          <ScrollView
            horizontal
            style={{}}
            showsHorizontalScrollIndicator={false}>
            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}

            {/* View de Cada Item */}

            <View
              style={{
                width: 150,
                borderWidth: StyleSheet.hairlineWidth,
                borderRadius: 3,
                marginLeft: 20,
              }}>
              <View
                style={{
                  flex: 1,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: 'https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg',
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{flex: 1.5}}>
                <View
                  style={{
                    padding: 5,
                    flex: 1,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>
                    Big Burguer Bacon com Fritas
                  </Text>
                  <Text style={{fontSize: 12, color: 'gray'}}>
                    2 Carnes, Pão, Queijo, Bacon, Alface, Tomates, Batata Fritas
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    R$ 10,00
                  </Text>
                </View>
              </View>
            </View>
            {/* View de Cada Item */}
          </ScrollView>
        </View>

        <View
          style={{
            height: 110,
            marginTop: 20,

            width: '100%',
          }}>
          <ScrollView
            horizontal
            style={{flex: 1}}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}>
            <View
              style={{
                marginHorizontal: 20,
                borderRadius: 5,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'green'
              }}>
              <Text>Hello testando testando</Text>
            </View>

            <View
              style={{
                backgroundColor: 'green',

                borderRadius: 5,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Hello testando testando</Text>
            </View>

            <View
              style={{
                backgroundColor: 'green',
                marginHorizontal: 20,
                borderRadius: 5,
                width: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Hello testando testando</Text>
            </View>
          </ScrollView>
        </View>
        
      </ScrollView>
      <View style={{height:45, backgroundColor:'#c6c6c6'}}>

      </View>
    </View>
  );
}
