import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity ,StyleSheet,Text} from 'react-native';
import Button from './button'

const ForgotPassword=()=>{
  return(
<View>
<TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={PasswordStyles.username}
      />
 <Button title={"Reset Password"}/>
</View>
  );
}
const PasswordStyles = StyleSheet.create({
  username: {
    position: 'absolute',
    height: 48,
    left: 24,
    right: 24,
    top: 108,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E5E6',
    borderRadius: 8,
    paddingLeft: 10,
  }
})
export default ForgotPassword;