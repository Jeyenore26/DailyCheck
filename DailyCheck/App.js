import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Krub_200ExtraLight,
  Krub_200ExtraLight_Italic,
  Krub_300Light,
  Krub_300Light_Italic,
  Krub_400Regular,
  Krub_400Regular_Italic,
  Krub_500Medium,
  Krub_500Medium_Italic,
  Krub_600SemiBold,
  Krub_600SemiBold_Italic,
  Krub_700Bold,
  Krub_700Bold_Italic,
} from '@expo-google-fonts/krub';
export default function App() {
  let [fontsLoaded] = useFonts({
    Krub_200ExtraLight,
    Krub_200ExtraLight_Italic,
    Krub_300Light,
    Krub_300Light_Italic,
    Krub_400Regular,
    Krub_400Regular_Italic,
    Krub_500Medium,
    Krub_500Medium_Italic,
    Krub_600SemiBold,
    Krub_600SemiBold_Italic,
    Krub_700Bold,
    Krub_700Bold_Italic,
  });
  
  let fontSize = 10;
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TailwindProvider>
      <View className="h-20 relative bg-green-600">
         <View className="shadow-md fixed w-screen flex items-center bg-base h-20 z-80">
           <View className="container w-full flex justify-between items-center">
             <View className="flex items-center gap-2">
               <View className = 'mt-8'>
                    <Text className= 'mt-12' style={{
              fontSize,
              
              // Note the quoting of the value for `fontFamily` here; it expects a string!
              fontFamily: 'Krub_700Bold_Italic',
            }}>
                      AMAKKU IS SO GAY
                    </Text>
               </View>
             </View>
           </View>
         </View>
        </View>
    </TailwindProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
