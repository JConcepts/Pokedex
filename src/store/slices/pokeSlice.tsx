import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { Pokemon as PokemonType } from '../../types/index';

const initialState= {
    pokemonList: [] as Array<PokemonType>,
    selectedPokemon: null
}

export const pokeSlice = createSlice({
    name: "poke", 
    initialState, 
    reducers: {
        setPokemonList: (state, action: PayloadAction<Array<PokemonType>>) => {
            state.pokemonList = action.payload
        },
        setSelectedPokemon: (state, action) =>{
            state.selectedPokemon = action.payload;
        },
    }
})

export const {setPokemonList, setSelectedPokemon} = pokeSlice.actions;

export const getPokemonList = (state) => state.pokemonList;
export const getSelectedPokemon = (state) => state.selectedPokemon;

export default pokeSlice.reducer;