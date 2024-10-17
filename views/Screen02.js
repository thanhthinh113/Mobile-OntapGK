import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useCallback, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function Screen02() {
  const [bike, setBike] = useState([]);
const navigation = useNavigation()
  useFocusEffect(
    useCallback(() => {
      axios
        .get("https://67055f04031fd46a830fb4fb.mockapi.io/bike")
        .then((rp) => setBike(rp.data))
        .catch((err) => console.log(err));
    })
  );
  const displayContent = ({ item }) => {
    return (
        <TouchableOpacity style={{width:"50%"}}
        onPress={()=> navigation.navigate("Screen03")}
        >
             <View style={{backgroundColor:"pink",margin:10,justifyContent:"center",alignItems:"center",borderRadius:15}}>
            <Image source={require("../image/small.png")}></Image>
          <Text style={{fontSize:16,fontWeight:"bold"}}>{item.name}</Text>
          <Text style={{fontSize:16,fontWeight:"bold"}}>$ {item.price}</Text>
        </View>
        </TouchableOpacity>
       
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1}}>
        <View>
          <Text style={{fontSize:18,fontWeight:"bold", marginBottom:20,marginLeft:10}}>The world's Best Bike</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:20}}>
          <Text style={{borderColor:"red",borderWidth:1,width:"25%", borderRadius:4,textAlign:"center"}}>All</Text>
          <Text style={{borderColor:"red",borderWidth:1,width:"25%", borderRadius:4,textAlign:"center"}}>Roadbike</Text>
          <Text style={{borderColor:"red",borderWidth:1,width:"25%", borderRadius:4,textAlign:"center"}}>Mountain</Text>
        </View>
        <View>
          <FlatList
            data={bike}
            keyExtractor={(item) => item.id.toString()}
            renderItem={displayContent}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
