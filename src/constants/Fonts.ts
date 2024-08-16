import {isIOS} from '../utils/platformUtil';

export const fontFamilies = {
  MONTSERRAT: {
    light: isIOS() ? 'Montserrat-Light' : 'MontserratLight',
    normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    bold: isIOS() ? 'Montserrat-SemiBold' : 'MontserratSemiBold',
  },
};