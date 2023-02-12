import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu from '../screens/Menu';
import {menu} from '../data/menu';
import Details from '../screens/Details';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
const Stack = createNativeStackNavigator();

const RestroStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default RestroStack;
