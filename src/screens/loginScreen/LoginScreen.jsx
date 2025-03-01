import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LoginStyle from '../../styles/LoginStyle';
import {Profile} from '../../assets/icons/Profile';
import {Password} from '../../assets/icons/Password';

const LoginScreen = ({navigation}) => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('BottomTabs');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={LoginStyle.container}
      resizeMode="cover">
      <View style={LoginStyle.header}>
        <Image
          style={LoginStyle.image}
          source={require('../../assets/images/icone.png')}
        />
        <Text style={LoginStyle.crypto}>
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
        <View
          style={[
            LoginStyle.inputContainer,
            isFocusedLogin && LoginStyle.inputContainerFocused,
          ]}>
          <Profile style={LoginStyle.icon} />
          <TextInput
            style={LoginStyle.input}
            placeholder="Login"
            placeholderTextColor="#7d7d7d"
            onFocus={() => setIsFocusedLogin(true)}
            onBlur={() => setIsFocusedLogin(false)}
          />
        </View>

        <View
          style={[
            LoginStyle.inputContainer,
            isFocusedPassword && LoginStyle.inputContainerFocused,
          ]}>
          <Password style={LoginStyle.icon} />
          <TextInput
            style={LoginStyle.input}
            placeholder="Password"
            placeholderTextColor="#7d7d7d"
            secureTextEntry={true}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
          />
        </View>

        <Text style={LoginStyle.forgotPassword}>Lost password?</Text>
      </View>

      <TouchableOpacity style={LoginStyle.button} onPress={handleLogin}>
        <Text style={LoginStyle.buttonText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default LoginScreen;
