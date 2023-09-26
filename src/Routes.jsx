import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {LightTheme} from './styles/theme';

import LandingScreen from './screens/landing/LandingScreen';
import ScannerScreen from './screens/scanner/ScannerScreen';

const Stack = createNativeStackNavigator();
const theme = LightTheme;

const Routes = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
