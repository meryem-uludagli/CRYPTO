import React, {useState} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import LoginStyle from '../../styles/LoginStyle';

const LoginScreen = () => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.header}>
        <Image
          style={LoginStyle.image}
          source={require('../../assets/images/icone.png')}
        />
        <Text style={LoginStyle.text}>
          Crypto<Text style={LoginStyle.span}>®</Text>
        </Text>
      </View>

      <View>
        <Text style={LoginStyle.text}>
          The largest <Text style={LoginStyle.span}>NFT</Text> marketplace in
          the world
        </Text>
      </View>

      <View style={LoginStyle.formContainer}>
        <TextInput
          style={[LoginStyle.input, isFocusedLogin && LoginStyle.inputFocused]}
          placeholder="Login"
          placeholderTextColor="#7d7d7d"
          onFocus={() => setIsFocusedLogin(true)}
          onBlur={() => setIsFocusedLogin(false)}
        />
        <TextInput
          style={[
            LoginStyle.input,
            isFocusedPassword && LoginStyle.inputFocused,
          ]}
          placeholder="Password"
          placeholderTextColor="#7d7d7d"
          secureTextEntry={true}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
        />
        <Text style={LoginStyle.forgotPassword}>Lost password?</Text>
      </View>

      <TouchableOpacity style={LoginStyle.button}>
        <Text style={LoginStyle.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
