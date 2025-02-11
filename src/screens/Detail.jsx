import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import DetailStyle from '../styles/DetailStyle';
import {Close} from '../assets/icons/Close';
import Lastbids from '../components/Lastbids';

const Detail = ({route, navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* İçeriği kaydırmak için ScrollView */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} // Kaydırma çubuğunu gizler
      >
        {/* Kapatma butonu */}
        <TouchableOpacity
          style={DetailStyle.iconClose}
          onPress={() => navigation.goBack()}>
          <Close />
        </TouchableOpacity>

        {/* Arka Plan Resmi */}
        <ImageBackground
          source={require('../assets/images/bg.jpg')}
          style={DetailStyle.background}
          resizeMode="cover">
          <View style={DetailStyle.contentContainer}>
            {/* NFT Görseli */}
            <Image
              source={require('../assets/images/NFT4.png')}
              style={DetailStyle.image}
            />

            {/* NFT Bilgileri */}
            <Text style={DetailStyle.number}>#2378</Text>
            <Text style={DetailStyle.title}>Cryptopus</Text>

            {/* Sahip Bilgileri */}
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

            {/* Açıklama */}
            <View style={DetailStyle.descriptionContainer}>
              <Text style={DetailStyle.descriptionTitle}>Description</Text>
              <Text style={DetailStyle.descriptionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quas at corrupti! Rem perferendis consectetur placeat
                laudantium, at assumenda labore eum sint delectus quam illum
                possimus illo pariatur sed minus!
              </Text>
            </View>

            {/* Lastbids bileşenini düzgün hizalama */}
            <View style={{flexGrow: 1}}>
              <Lastbids />
            </View>
          </View>

          <View style={{alignItems: 'center', marginBottom: 20}}>
            <TouchableOpacity
              style={DetailStyle.loadMoreButton}
              onPress={() => {
                /* Load More işlemi */
              }}>
              <Text style={DetailStyle.followText}>Loaded More</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Detail;
