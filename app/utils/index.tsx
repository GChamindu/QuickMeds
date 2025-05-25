import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {responsiveWidth as rw} from 'react-native-responsive-dimensions';
import {responsiveHeight as rh} from 'react-native-responsive-dimensions';
import {deviceWidth, deviceHeight} from '../constants/sizes';

const responsiveWidth = (number: number, full = false) => {
  if (full) {
    return rw((number / 375) * 100);
  }
  return deviceWidth < 375 ? rw((number / 375) * 100) : number;
};

const responsiveHeight = (number: number, full = false) => {
  if (full) {
    return rh((number / 812) * 100);
  }
  return deviceHeight < 812 ? rh((number / 812) * 100) : number;
};

// Add this new function for font scaling
const responsiveFont = (size: number) => {
  const scaleFactor = Math.min(deviceWidth / 375, 1.2);
  return Math.round(size * scaleFactor);
};

const homeIndicatorHeight = () => {
  const insets = useSafeAreaInsets();
  const {bottom} = insets;
  return bottom;
};

const statusBarHeight = () => {
  const insets = useSafeAreaInsets();
  const {top} = insets;
  return top;
};

const homeIndicatorSettings = () => {
  if (homeIndicatorHeight() !== 0) {
    return 10 + homeIndicatorHeight();
  }
  if (homeIndicatorHeight() === 0) {
    return 20 + homeIndicatorHeight();
  }
};

export const utils = {
  responsiveWidth,
  responsiveHeight,
  responsiveFont, // Add this to exports
  statusBarHeight,
  homeIndicatorHeight,
  homeIndicatorSettings,
};