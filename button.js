import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ title,onPress }) => (
  <TouchableOpacity style={styleSignUpButton.button} onPress={onPress}>
    <Text style={styleSignUpButton.Text}>{title}</Text>
  </TouchableOpacity>
);
const styleSignUpButton = StyleSheet.create({

  button: {
    position: 'absolute',
    height: 50,
    left: 24,
    right: 24,
    bottom: 42,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#1B5DEC',
    borderRadius: 48,
    paddingHorizontal: 10,
    paddingVertical: 10,
    top: 530,
    boxSizing: 'border-box',
  },
  Text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#1E90FF'
  }
})

export default Button;