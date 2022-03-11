// Exercice 1
import React, { useState } from "react";
import { View, StyleSheet, Text,FlatList, RefreshControl } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {

  const obj = [
    {name: "Stanz", age: 45},
    {name: "Francine", age: 45},
    {name: "hayley", age: 18},
    {name: "Steve", age: 14},
    {name: "Roger", age: 120},
    {name: "Klaus", age: 30},
  ]

  const [family, setFamily] = useState(obj);

  const result = ({item}) =>(
    <View style={styles.list}>

      <Text style={styles.textList}>{item.name} | {item.age}</Text>

    </View>
  )


  return (
    <View
    style={styles.container}
    >

      <FlatList
      data={obj}
      renderItem={result}
      keyExtractor={ (item,index) => index.toString()}
      horizontal={true}
      refreshControl={
        <RefreshControl
        refreshing={true}
        // onRefresh={onRefresh}
        />
      }
      /**
       * Si je n'ai pas d'id alors je me base sur l'index du tableau obj [0] = Stanz,
       * [1] = Francine etc..
       */
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
    // justifyContent:'center',
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
