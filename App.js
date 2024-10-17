import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Screen01 from './views/Screen01';
import Screen02 from './views/Screen02';
import Screen03 from './views/Screen03';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01} options={{headerShown:false}}/>
        <Stack.Screen name='Screen02' component={Screen02} options={{headerShown:false}}/>
        <Stack.Screen name='Screen03' component={Screen03} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


