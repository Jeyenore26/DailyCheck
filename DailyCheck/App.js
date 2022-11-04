import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
    <View className="h-20 relative bg-green-600">
       <View className="shadow-md fixed w-screen flex items-center bg-base h-20 z-80">
         <View className="container w-full flex justify-between items-center">
           <View className="flex items-center gap-2">
             <View className = 'mt-8'>
             <Text className = 'text-white  mt-8'>
                 Earth
               </Text>
             </View>
           </View>
         </View>
       </View>
      </View>
  </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
