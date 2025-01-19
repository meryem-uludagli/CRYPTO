import {StyleSheet, Text, View, Image} from 'react-native';
import {Hambug} from '../assets/icons/Hambug';
import FeedStyle from '../styles/FeedStyle';

const Header = () => {
  return (
    <View>
      {/* Logo */}
      <View style={FeedStyle.logoContainer}>
        <Image
          style={FeedStyle.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>

      {/* Hamburger Icon */}
      <View style={FeedStyle.hamburgerContainer}>
        <Hambug />
      </View>
    </View>
  );
};

export default Header;
