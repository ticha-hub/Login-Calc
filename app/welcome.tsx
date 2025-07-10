import { View, Text, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const { username } = useLocalSearchParams<{ username: string }>();
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-indigo-100 to-white px-6">
      <View className="items-center space-y-4">
        <FontAwesome name="smile-o" size={64} color="indigo" />
        <Text className="text-3xl font-bold text-indigo-900">Welcome, {username}!</Text>
        
        {/* to calc but */}
        <Pressable
          onPress={() => router.push('/add')}
          className="bg-indigo-900 px-6 py-3 rounded-lg shadow-lg mt-6 active:opacity-80"
        >
          <Text className="text-white font-semibold text-lg">Go to Calculator</Text>
        </Pressable>
      </View>
    </View>
  );
}
