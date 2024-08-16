import {StyleSheet} from 'react-native';
import {colors} from '../../constants/Colors';
import { fontFamilies } from '../../constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },

  headlineContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center'
  },

  headlineImage: {
    width: 38,
    height: 38,
  },

  headlineText: {
    fontSize: 40,
    color: colors.white,
    left: 10,
    fontFamily: fontFamilies.MONTSERRAT.bold
  },

  pokemonContainer: {
    width: '90%',
    flex: 1,
    backgroundColor: colors.white,
    height: 500,
    borderRadius: 20,
    marginTop: '5%',
    justifyContent: 'center'
  },
});
