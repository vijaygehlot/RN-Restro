import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/1.png')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 300,
    width: 300,
  },
});
