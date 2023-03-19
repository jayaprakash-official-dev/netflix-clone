import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StepperScreen from '../Screens/StepperScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import FastScreen from '../Screens/FastScreen';
import DownloadScreen from '../Screens/DownloadScreen';
import NewsScreen from '../Screens/NewsScreen';
import {useThemeProvider} from '../Theme/ThemeProvider';
import {
  HomeIcon,
  FireIcon,
  FaceSmileIcon,
  FolderArrowDownIcon,
} from 'react-native-heroicons/outline';
import MovieDetailScreen from '../Screens/MovieDetailScreen';
import SearchScreen from '../Screens/SearchScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigate = () => {
  const {palette} = useThemeProvider();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: palette.secondary,
        },
        tabBarActiveTintColor: palette.tabActiveCol,
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="news"
        component={NewsScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'New & Hot',
          tabBarIcon: ({color, size}) => <FireIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="fast"
        component={FastScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Fast Laughs',
          tabBarIcon: ({color, size}) => (
            <FaceSmileIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="download"
        component={DownloadScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <FolderArrowDownIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="stepper"
        component={StepperScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="landing"
        component={TabNavigate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="movieDetail"
        component={MovieDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;
