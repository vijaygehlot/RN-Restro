import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemDetailCard from '../components/ItemDetailCard';

const Details = ({navigation, route}) => {
  console.log('route Details', route);

  return <ItemDetailCard data={route.params.dishInfo} />;
};

export default Details;

const styles = StyleSheet.create({});
