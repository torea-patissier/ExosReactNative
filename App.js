// Exercice 1
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App() {

  const obj = [
    {id: "1", name: "Stan", age: 45},
    {id: "2", name: "Francine", age: 45},
    {id: "3", name: "hayley", age: 18},
    {id: "4", name: "Steve", age: 14},
    {id: "5", name: "Roger", age: 1020},
    {id: "6", name: "Klaus", age: 30},
  ]

  const [family, setFamily] = useState(obj);


  return (
    <View
    style={styles.container}
    >
      {
        family.map((member) => {
          //member représente chaque objet de la const obj ({id: "1", name: "Stan", age: 45})
          return(
            <View
            style={styles.list}
            key={member.id}
            >
              <Text
              >{member.name} | {member.age} ans</Text>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'stretch',
    // justifyContent:'flex-end',
    
  },

  list: {
    backgroundColor:'deepskyblue',
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    padding:10,
  }
});
