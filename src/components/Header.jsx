import {StyleSheet, Text, View, Image} from 'react-native';
import {Hambug} from '../assets/icons/Hambug';
import FeedStyle from '../styles/FeedStyle';

const Header = () => {
  return (
    <View>
      <View style={FeedStyle.logoContainer}>
        <Image
          style={FeedStyle.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>

      <View style={FeedStyle.hamburgerContainer}>
        <Hambug />
      </View>
    </View>
  );
};

export default Header;
