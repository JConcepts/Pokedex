import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokedex from '../screens/Pokedex';
import PokemonDetails from '../screens/PokemonDetails';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const PokedexNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Pokedex" component={Pokedex} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PokedexNavigation;
