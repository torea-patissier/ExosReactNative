// Exercice 1
import React, { useState } from "react";
import { View, StyleSheet, Text,FlatList } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {

  const obj = [
    {id: "1", name: "Stanz", age: 45},
    {id: "2", name: "Francine", age: 45},
    {id: "3", name: "hayley", age: 18},
    {id: "4", name: "Steve", age: 14},
    {id: "5", name: "Roger", age: 1020},
    {id: "6", name: "Klaus", age: 30},
  ]

  const [family, setFamily] = useState(obj);

  const result = ({item}) =>(

    <View style={styles.list}>
      <Text style={styles.textList}>{item.name}</Text>
    </View>
  )


  return (
    <View
    style={styles.container}
    >

      <FlatList
      data={obj}
      renderItem={result}
      keyExtractor={ item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
    // justifyContent:'space-around',
  },
  
  list: {
    backgroundColor:'deepskyblue',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    padding:10,
    // flexGrow:1, // Permet à l'élément enfant de s'étirer sur l'écran
  },
  textList: {
    fontSize:40,
  },
});
