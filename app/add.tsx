import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

export default function AddNumbersScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    
    if (!a.trim()) {
        setResult(null);
        setError('Please enter first number');
    } else if (!b.trim()) {
        setResult(null);
        setError('Please enter second number');
    } else {
        
        if (!isNaN(num1) && !isNaN(num2)) {
            setError('');
            setResult(num1 + num2);
        } else {
            setResult(null);
            setError('Only numbers are allowed');
    }
    }

  };

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-b from-white to-indigo-100 px-6">
      <Text className="text-2xl font-bold text-indigo-900 mb-6">Add Two Numbers</Text>

        {error ? (
          <Text className="text-red-500 text-m text-center mb-2">{error}</Text>
        ) : null}


      <View className="w-full space-y-4">

        {/* First Number Input */}

        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm mb-5">
          <FontAwesome name="hashtag" size={20} color="#555" />
          <TextInput
            placeholder="Enter first number"
            value={a}
            onChangeText={setA}
            keyboardType="numeric"
            className="flex-1 ml-3 text-base"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Second Number Input */}

        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm mb-2">
          <FontAwesome name="hashtag" size={20} color="#555" />
          <TextInput
            placeholder="Enter second number"
            value={b}
            onChangeText={setB}
            keyboardType="numeric"
            className="flex-1 ml-3 text-base"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* sum display */}
        {result !== null && (
          <View className="mt-4 items-center">
            <Text className="text-2xl font-bold text-indigo-900 mb-5">Result= {result}</Text>
          </View>
        )}

        {/* Calculate Btn */}

        <Pressable
          onPress={calculate}
          className="bg-indigo-900 py-3 rounded-lg mt-2 active:opacity-80 shadow"
        >
          <Text className="text-white text-center font-semibold text-lg">Calculate</Text>
        </Pressable>

      </View>
    </View>
  );
}
