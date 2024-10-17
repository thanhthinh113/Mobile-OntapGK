import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Screen03() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, margin:10}}>
        <View style={{ flex: 6, justifyContent:"center", alignItems:"center",backgroundColor:"pink" }}>
        <Image  source={require("../image/big.png")}></Image>

        </View>
        <View style={{ flex: 1, justifyContent:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:20}}>Pina Mountain</Text>

        </View>
        <View style={{ flex: 1, flexDirection:"row"}}>
          <Text style={{ fontSize:16,fontWeight:"bold",color:"grey", marginRight:30}}>15% OFF|350$</Text>
          <Text style={{ fontSize:16,fontWeight:"bold",textDecorationLine:"line-through"}}>449$</Text>
        </View>
        <View style={{ flex: 2}}>
        <Text style={{ fontSize:16,fontWeight:"bold", paddingBottom:20 }}>Decription</Text>
        <Text style={{fontSize:16,fontWeight:"bold",color:"grey" }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
        </View>
        
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{backgroundColor:"red", height:50, borderRadius:30,justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"white", fontSize:18,fontWeight:"bold"}}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
