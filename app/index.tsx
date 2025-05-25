import * as React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import homeImage from '../assets/images/home/03.jpg';


const { width, height } = Dimensions.get('window');

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <View className="flex-1 bg-gray-50">
      {/* Status Bar Spacer */}
      <View className="h-15" />
      
      {/* Main Content */}
      <View className="flex-1 px-6  items-center justify-between pt-10">
        {/* Title */}
        <Animated.View 
          entering={FadeInUp.delay(200)}
          className="items-center mb-5"
        >
          <Text className="text-4xl font-bold text-slate-800 text-center leading-8">
            Upload Your Prescription{'\n'}And After Collect!
          </Text>
          
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

        {/* Page Indicators */}
        <Animated.View 
          entering={FadeInUp.delay(600)}
          className="flex-row items-center my-5"
        >
          <View className="w-6 h-2 rounded-full bg-slate-800 mx-1" />
          <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
          <View className="w-2 h-2 rounded-full bg-gray-300 mx-1" />
        </Animated.View>

        {/* Description */}
        <Animated.View 
          entering={FadeInUp.delay(800)}
          className="items-center mb-10"
        >
          <Text className="text-base text-gray-500 text-center leading-6">
            Labore w culpa excepteur culpa{'\n'}occaecat ex nisi mollit.
          </Text>
        </Animated.View>
      </View>

      {/* Bottom Section */}
      <Animated.View 
        entering={FadeInUp.delay(1000)}
        className="px-6 pb-10 items-center"
      >
        <Button 
          className="bg-slate-800 w-full h-16 rounded-xl justify-center items-center mb-5"
          onPress={() => console.log('Get Started pressed')}
        >
          <Text className="text-white text-lg font-semibold">
            Get Started
          </Text>
        </Button>
        
        {/* Home Indicator */}
        <View className="w-33 h-1 bg-black rounded-sm opacity-30" />
      </Animated.View>
    </View>
  );
}


