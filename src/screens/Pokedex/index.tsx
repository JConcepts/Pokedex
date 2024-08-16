import {View, SafeAreaView, FlatList, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPokemonList,
  setPokemonList,
  setSelectedPokemon,
} from '../../store/slices/pokeSlice';

import Pokeball from '../../assets/images/pokeball.png';

import Loading from '../../components/Loading';
import styles from './styles';
import {colors} from '../../constants/Colors';

const Pokedex = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const pokeList = useSelector(getPokemonList);

  const [loadingMore, setLoadingMore] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headlineContainer}>
        <Image
          style={styles.headlineImage}
          tintColor={colors.white}
          source={Pokeball}
        />
        <Text style={styles.headlineText}>Pokedex</Text>
      </View>
      {/* maybe add search */}
      <View style={styles.pokemonContainer}>
        {pokeList.length == 0 ? <Loading /> : <Text>Pikamones</Text>}
      </View>
    </SafeAreaView>
  );
};

export default Pokedex;
