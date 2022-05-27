import React from "react";
import { View, Image, StyleSheet} from 'react-native';



export default function FullPict ({route}) {

    return (
        <View>
          <Image source={{
           position:'relative',
           display:'flex',
           height:'100vh',
           width:'100wh',
           uri:route.params.urls.small
         }}/>
          
          
        </View>
    );
}

const styles = StyleSheet.create({
  full:{
    marginTop:20,
    fontSize:16,
    textAlign:'center',
    color:'#f55151'
  },

  header: {
    fontSize:25,
    marginTop:25
  },

  image: {
    width:'100%',
    height:200,
  }
});