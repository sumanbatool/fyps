import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
const AppButton = ({ title,onPress}) => (
 <TouchableOpacity style={styles.appButtonContainer} onPress={onPress}>
 <Text style={styles.appButtonText}>{title}</Text>
</TouchableOpacity>
);
const styles = StyleSheet.create({
appButtonContainer: {
position: 'absolute',
height: 58,
left: 98,
right: 91,
bottom: 114,
backgroundColor: '#1B5DEC',
borderRadius: 48,
top:500,
},
appButtonText: {
fontSize: 22,
color: "#fff",
fontWeight: "bold",
alignSelf: "center",
paddingTop:11,
}
});
export default AppButton;