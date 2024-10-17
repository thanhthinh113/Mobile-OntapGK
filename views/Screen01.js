import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Button, Image, TouchableOpacity } from "react-native";

export default function Screen01() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1, margin:10}}>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>A premium online store for{"\n"} sporter andtheir stylish choice</Text>
        </View>
        <View style={{flex:3, backgroundColor:"pink",alignItems:"center",justifyContent:"center", borderRadius:40}}>
          <Image source={require('../image/big.png')}></Image>
        </View>
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}> POWER BIKE{"\n"}SHOP</Text>
        </View>
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"red",width:"90%", height:"40%", borderRadius:20,justifyContent:"center",alignItems:"center"}}
            onPress={()=> navigation.navigate("Screen02")}
          >
              <Text style={{color:"white", fontSize:18,fontWeight:'bold'}}>Get Started</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}
