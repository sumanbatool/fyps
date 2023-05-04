import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity ,StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './button'

const SigninScreen=(props)=>{
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {navigation}=props;
return(
  <View>
  <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={TextStyles.email}
      />
      <TextInput
        secureTextEntry={!isPasswordVisible}
        style={TextStyles.password}
        placeholder='Password'
      />
      <TouchableOpacity
        style={{ position: 'absolute', top: 185, right: 32 }}
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
      >
        <Icon
          name={isPasswordVisible ? 'eye' : 'eye-slash'}
          size={20}
          color="gray"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("Forgot Password")}}>
      <Text style={TextStyles.forgotText}>
      Forgot Password?
      </Text>
      </TouchableOpacity>
            <Button title={"Log in"} />
  </View>
);
}
const TextStyles = StyleSheet.create({
  email: {
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
  },
  password: {
    position: 'absolute',
    height: 48,
    left: 24,
    right: 24,
    top: 172,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E5E6',
    borderRadius: 8,
    paddingLeft: 10,
  },
 
  forgotText: {
    position: 'absolute',
    height: 48,
    left: 24,
    right: 24,
    bottom: 528,
    top:248,
    borderRadius: 48,
    color:"blue",
    textAlign:"center"
  },

});

export default SigninScreen;
