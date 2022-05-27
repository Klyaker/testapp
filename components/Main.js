import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Main ({navigation}) {

  const [photoes, SetPhotoes] = useState([]);
  let ACCES_KEY = 'xFkIa5SdSoDfNW1z4B2yj-_n11bG-BrxVvRKnYHMk2k';

  useEffect(() => {
    fetch('https://api.unsplash.com/photos?page=1&client_id='+ACCES_KEY)
    .then(res => res.json())
    .then(data => SetPhotoes(data))
  }, [])


  return (
    <View style={styles.container}>
      {photoes.map((photos) => (
       <View photos={photos} 
       
       key={photos.id}
       >
         
         <h1>{photos.user.username}</h1>
         <TouchableOpacity onPress={() => navigation.navigate('FullPict', photos)}>
            <Image source={{
           position:'relative',
           display:'flex',
           width:350,
           height:300,
           uri:photos.urls.small
         }}/>
        </TouchableOpacity>
       </View>
        
        
        
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    marginBottom:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});