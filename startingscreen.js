import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AppButton from './startingbutton';
const StartingScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
    <Text style={HomeScreenStyles.heading}>WowFit</Text>
    <Image source={require("./startingEmoji.png")}
        style={HomeScreenStyles.Logo}/>
      <Text style={HomeScreenStyles.welcomeText}>Plan your first workout!</Text>
     <AppButton title={'Create account'}  onPress={() => {navigation.navigate("Create Account")}}></AppButton>
      <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.accountText}>Have an account ?</Text>
      <TouchableOpacity onPress={() => { navigation.navigate("Log in")}}>
        <Text style={HomeScreenStyles.link}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};
const HomeScreenStyles = StyleSheet.create({
  heading: {
    color: '#0E0F0F',
    position: 'absolute',
    height: 32,
    left: 150,
    right: 147,
    top: 40,
    fontFamily: 'SF Pro Display',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  Logo: {
    position: 'absolute',
    width: 130,
    height: 170,
    left: 146,
    top: 150,
    alignItems: 'center',
  },
  welcomeText: {
    position: 'absolute',
    width: 327,
    height: 32,
    left: '50%',
    marginLeft: -163.5,
    top: '50%',
    marginTop: 130,
    fontFamily: 'SF Pro Display',
    fontWeight: 'normal',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  link:{
    color:"#0066b2",
    marginLeft: 5, 
     fontSize:16,
     marginTop:565
  },
  accountText:{
    fontSize: 16, 
    marginLeft:120,
    marginTop:565
     },
container: {
      flexDirection: 'row', 
       alignItems:"center"

  }
});
export default StartingScreen;
