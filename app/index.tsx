import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [secure, setSecure] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  //animating the form (fading in) as it appears on app load

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);


  //some basic validation

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter your username');
    } else if (!password.trim()) {
      setError('Please enter your password');
    } else if (password.length < 4) {
      setError('Password must be at least 4 characters');
    } else {
      setError('');
      router.push({ pathname: '/welcome', params: { username } });
    }
  };


  return (
    <Animated.View
      className="flex-1 justify-center items-center bg-gradient-to-br from-indigo-100 to-white px-6"
      style={{ opacity: fadeAnim }}
    >


      <View className="w-full bg-white rounded-xl p-6 shadow-md space-y-4">

        <Text className="text-3xl font-bold text-indigo-900 mb-2 text-center">Login</Text>
        
        {/* error message */}

        {error ? (
          <Text className="text-red-500 text-m text-center mb-2">{error}</Text>
        ) : null}


        {/* username...... */}

        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-5">
          <FontAwesome name="user" size={20} color="#555" />
          <TextInput
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
            className="flex-1 ml-3 text-base text-black"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* password...... */}

        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-2">
          <FontAwesome name="lock" size={20} color="#555" />
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            className="flex-1 ml-3 text-base text-black"
            placeholderTextColor="#aaa"
          />

          {/* show/hide pass toggle */}

          <Pressable onPress={() => setSecure(!secure)}>
            <FontAwesome
              name={secure ? 'eye-slash' : 'eye'} 
              size={20}
              color="#888"
              style={{ marginLeft: 8 }}
            />
          </Pressable>
        </View>

       {/* login buton */}
        
        <Pressable
          onPress={handleLogin}
          className="bg-indigo-900 mt-2 py-3 rounded-lg active:opacity-80"
        >
          <Text className="text-white text-center font-semibold text-lg">Login</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}
