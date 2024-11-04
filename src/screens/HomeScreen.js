import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold">Heyo!</Text>
      <Text className="text-base my-2">Test</Text>
      <TouchableOpacity 
        className="bg-blue-500 p-3 rounded-md mt-2"
        onPress={() => navigation.navigate('Second')}
      >
        <Text className="text-white text-base">Go to Second Page</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}