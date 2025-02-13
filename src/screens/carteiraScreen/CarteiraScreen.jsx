import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import CarteiraStyle from '../../styles/CarteiraStyle';
import LastActivities from '../../components/lastActivity';

const CarteiraScreen = () => {
  return (
    <View style={CarteiraStyle.container}>
      <View style={CarteiraStyle.header}>
        <Header />
      </View>

      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={CarteiraStyle.background}
        resizeMode="cover">
        <View style={CarteiraStyle.contentContainer}>
          <View style={CarteiraStyle.containerheader}>
            <View style={CarteiraStyle.textContainer}>
              <Text style={CarteiraStyle.textone}>5.2 ETH</Text>
              <Text style={CarteiraStyle.texttwo}>$10.223,23</Text>
            </View>
            <Image
              source={require('../../assets/images/Group.png')}
              style={CarteiraStyle.image}
            />
          </View>
          <TouchableOpacity
            style={CarteiraStyle.loadMoreButton}
            onPress={() => {}}>
            <Text style={CarteiraStyle.followText}>Add Money</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <LastActivities />
    </View>
  );
};

export default CarteiraScreen;
