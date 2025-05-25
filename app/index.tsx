import * as React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { theme } from './constants/colors';
import { utils } from './utils';
import homeImage from '../assets/images/home/03.jpg';


const { width } = Dimensions.get('window');

export default function Screen() {
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.white}}>
      {/* Status Bar Spacer */}
      <View style={{height: utils.responsiveHeight(15)}} />
      
      {/* Main Content */}
      <View style={{
        flex: 1,
        paddingHorizontal: utils.responsiveWidth(24),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: utils.responsiveHeight(40)
      }}>
        {/* Title */}
        <Animated.View 
          entering={FadeInUp.delay(200)}
          style={{alignItems: 'center', marginBottom: utils.responsiveHeight(20)}}
          className="leading-3"
        >
          <Text style={{
            fontSize: utils.responsiveFont(32),
            fontWeight: '700',
            color: theme.colors.darkBlue,
            textAlign: 'center',
            lineHeight: utils.responsiveHeight(40),
            marginBottom: utils.responsiveHeight(10)
          }} className='leading-9'>
            Download Your Prescription{'\n'}And Test Results!
          </Text>
          
          {/* Number Display */}
         
        </Animated.View>


         {/* Illustration */}
         <Animated.View 
          entering={FadeInUp.delay(400)}
          className="flex-1 justify-center items-center w-full max-h-75"
        >
          <Image
            source={homeImage}
            className="w-80 h-62"
            style={{ width: width * 0.8, height: 250 }}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Description */}
        <Animated.View 
          entering={FadeInUp.delay(600)}
          style={{alignItems: 'center', marginBottom: utils.responsiveHeight(40)}}
        >
          <Text style={{
            fontSize: utils.responsiveFont(16),
            color: theme.colors.gray,
            textAlign: 'center',
            lineHeight: utils.responsiveHeight(24)
          }}>
            Labore sunt culpa excepteur culpa{'\n'}occaecat ex nisi mollit.
          </Text>
        </Animated.View>
      </View>

      {/* Bottom Section */}
      <Animated.View 
        entering={FadeInUp.delay(800)}
        style={{
          paddingHorizontal: utils.responsiveWidth(24),
          paddingBottom: utils.responsiveHeight(40),
          alignItems: 'center'
        }}
      >
        <Button 
          style={{
            backgroundColor: theme.colors.darkBlue,
            width: '100%',
            height: utils.responsiveHeight(56),
            borderRadius: utils.responsiveWidth(12),
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: utils.responsiveHeight(20)
          }}
          onPress={() => console.log('Get Started pressed')}
        >
          <Text style={{
            color: theme.colors.white,
            fontSize: utils.responsiveFont(18),
            fontWeight: '600'
          }}>
            Get Started
          </Text>
        </Button>
        
        {/* Home Indicator */}
        <View style={{
          width: utils.responsiveWidth(33),
          height: utils.responsiveHeight(1),
          backgroundColor: theme.colors.black,
          borderRadius: utils.responsiveWidth(1),
          opacity: 0.3
        }} />
      </Animated.View>
    </View>
  );
}