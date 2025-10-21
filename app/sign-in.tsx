import React from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const Signin = () => {

const handleLogin = () => {}

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Eeevents!
          </Text>
          <Text className="text-3xl text-center uppercase font-rubik-bold text-black-400 mt-3">
            Your event {"\n"}
            <Text>starts here</Text>
          </Text>

          <TouchableOpacity  onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-md w-full py-4 mt-10"> 
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
