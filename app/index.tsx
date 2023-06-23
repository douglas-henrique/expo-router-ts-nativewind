import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { bg, lightButton, textcolor, darkButton } from '../utils/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import EntypoIcons from '@expo/vector-icons/Entypo'
import useCountdown from "../hooks/useCountdown";

export default function Page() {
  const { start, secondsLeft } = useCountdown()

  return (
    <SafeAreaView className="flex flex-1 justify-center" style={{ backgroundColor: bg }}>
      <View className="flex h-96 justify-center items-center">
        <View className="flex flex-row items-center justify-center border-2 h-12 w-1/3 rounded-full" style={{ backgroundColor: lightButton }}>
          <Ionicons name="flower-outline" size={20} color={textcolor} />
          <Text className="ml-1" style={{ color: textcolor }}>FOCUS</Text>
        </View>
        <Text className="font-black mt-20" style={{ color: textcolor, fontSize: 100 }}>
          {secondsLeft}
        </Text>
        <View className="flex flex-row mt-20 items-center justify-center  h-auto w-full ">
          <TouchableOpacity className="flex justify-center items-center h-14 rounded-2xl  w-16" style={{ backgroundColor: lightButton }}>
            <EntypoIcons name="dots-three-horizontal" size={20} color={textcolor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start(60)} className="flex justify-center items-center h-14 w-20 ml-5 rounded-2xl" style={{ backgroundColor: darkButton }}>
            <Ionicons name="play" size={20} color={textcolor} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => start(60)} className="flex justify-center items-center h-14 w-16  ml-5 rounded-2xl" style={{ backgroundColor: lightButton }}>
            <Ionicons name="reload" size={20} color={textcolor} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
