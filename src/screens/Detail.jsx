import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DetailStyle from '../styles/DetailStyle';
import {Close} from '../assets/icons/Close';
import Lastbids from '../components/Lastbids';

const Detail = ({route}) => {
  const {item} = route.params;

  return (
    <ScrollView style={DetailStyle.container}>
      <TouchableOpacity style={DetailStyle.iconClose}>
        <Close />
      </TouchableOpacity>

      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={DetailStyle.background}
        resizeMode="cover">
        <Image
          source={require('../assets/images/NFT4.png')}
          style={DetailStyle.image}
        />

        <Text style={DetailStyle.number}>#2378</Text>
        <Text style={DetailStyle.title}>Cryptopus</Text>

        <View style={DetailStyle.ownerContainer}>
          <Image
            source={require('../assets/images/Avatar.png')}
            style={DetailStyle.profileImage}
          />
          <View>
            <Text style={DetailStyle.ownedBy}>Owned by</Text>
            <Text style={DetailStyle.ownerName}>Jason</Text>
          </View>
          <TouchableOpacity style={DetailStyle.followButton}>
            <Text style={DetailStyle.followText}>Follow</Text>
          </TouchableOpacity>
        </View>

        <View style={DetailStyle.descriptionContainer}>
          <Text style={DetailStyle.descriptionTitle}>Description</Text>
          <Text style={DetailStyle.descriptionText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quas at
            corrupti! Rem perferendis consectetur placeat laudantium, at
            assumenda labore eum sint delectus quam illum possimus illo pariatur
            sed minus!
          </Text>
        </View>
      </ImageBackground>

      {/* Lastbids bileşeni buraya eklendi */}
      <View style={DetailStyle.bidsContainer}>
        <Lastbids />
      </View>
    </ScrollView>
  );
};

export default Detail;
