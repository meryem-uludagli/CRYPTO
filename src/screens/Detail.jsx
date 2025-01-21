import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import DetailStyle from '../styles/DetailStyle';
import {Close} from '../assets/icons/Close';

const Detail = ({route}) => {
  const {item} = route.params;

  return (
    <View style={DetailStyle.container}>
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={DetailStyle.background}
        resizeMode="cover">
        <Image
          source={require('../assets/images/NFT4.png')}
          style={DetailStyle.image}
        />

        <Close style={DetailStyle.closeIcon} />
      </ImageBackground>
    </View>
  );
};

export default Detail;
