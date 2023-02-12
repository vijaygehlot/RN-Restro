/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {menu} from '../data/menu';
import Splash from './Splash';
const Menu = ({navigation: {navigate}}) => {
  const [linkLoader, setlinkLoader] = useState(true);
  const handleLinkingAppOpen = () => {
    Linking.getInitialURL()
      .then(response => {
        if (response) {
          console.log('handleLinkingAppOpen', response);

          const pathArray = response
            .split('/')
            .filter(str => str.trim() !== '');

          const linkSlug = pathArray[3];
          console.log('linkSlug TEST-DYN:', linkSlug);
          if (linkSlug !== undefined) {
            const dishData = menu.find(el => el.link === linkSlug);
            console.log('dishData RestroStack', dishData);
            if (dishData !== undefined) {
              setlinkLoader(false);
              // setData(dishData);
              // setLoader(false);
              navigate('Details', {dishInfo: dishData});
            } else {
              setlinkLoader(false);
              return;
            }
          } else {
            setlinkLoader(false);
            return;
          }
        }
        setlinkLoader(false);
      })
      .catch(() => {
        setlinkLoader(false);
      });
  };
  useEffect(() => {
    handleLinkingAppOpen();
  }, []);

  const MenuListItemView = (item, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigate('Details', {dishInfo: item})}>
        <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.subCardView}>
              <Image
                source={{uri: item.pic}}
                resizeMode="contain"
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 50,
                }}
              />
            </View>
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                  //   fontFamily: '',
                  textTransform: 'capitalize',
                }}>
                {item.dish}
              </Text>
              <View
                style={{
                  marginTop: 2,
                  borderWidth: 0,
                  width: '85%',
                }}>
                <Text
                  style={{
                    color: '#252c34',
                    fontSize: 12,
                  }}>
                  {item.ingredient}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 25,
              backgroundColor: '#62c998',
              borderWidth: 0,
              width: 50,
              marginLeft: -30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              {item.price}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  if (linkLoader === true) {
    return <Splash />;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/1.png')} />
      <Text style={styles.appText}>Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={(item, index) => index}
        renderItem={
          ({item, index}) => MenuListItemView(item, index) //this is a main view
        }
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  appText: {
    fontSize: 25,
    fontWeight: '400',
    marginBottom: 10,
    color: 'black',
  },
  logo: {
    height: 150,
    width: 200,
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    // shadowColor: 'gray',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    borderColor: 'lightgray',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
