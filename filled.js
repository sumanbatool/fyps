import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setValidEmail] = useState(false);
  const [isValidPassword, setValidPassword] = useState(false);

  const handleEmailChange = text => {
    setEmail(text);
    // Validate email format
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setValidEmail(emailPattern.test(text));
  };

  const handlePasswordChange = text => {
    setPassword(text);
    // Validate password format
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setValidPassword(passwordPattern.test(text));
  };

  const handleLogin = () => {
    if (isValidEmail && isValidPassword) {
      // Perform login logic
      // ...
      alert('valid email');
    } else {
      // Show error message
      alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailChange}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={handlePasswordChange}
        value={password}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        disabled={!isValidEmail || !isValidPassword}
        // Apply styles from StyleSheet
        style={(!isValidEmail || !isValidPassword) && styles.disabledButton}
        color={styles.button.color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: 'black',
    fontSize: 30,
    width: 300,
    height: 40,
  },
  button: {
    color: 'blue',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default LoginScreen;
