import React from 'react';
import {
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import FeedStyle from '../../styles/FeedStyle';
import {Hambug} from '../../assets/icons/Hambug';
import {Search} from '../../assets/icons/Search';

const FeedScreen = () => {
  const categories = ['All', '3D', '2D', 'GIFs', 'Illustration', 'ETH'];
  const items = [
    {
      id: '1',
      image: require('../../assets/images/NFT.png'),
      owner: 'User1',
      price: '1.5 ETH',
    },
    {
      id: '2',
      image: require('../../assets/images/NFT2.png'),
      owner: 'User2',
      price: '0.8 ETH',
    },
    {
      id: '3',
      image: require('../../assets/images/NFT3.png'),
      owner: 'User3',
      price: '3.2 ETH',
    },
  ];

  const renderItem = ({item}) => (
    <View style={FeedStyle.card}>
      <Image source={item.image} style={FeedStyle.cardImage} />
      <View style={FeedStyle.cardInfo}>
        <Text style={FeedStyle.cardOwner}>Owned by {item.owner}</Text>
        <Text style={FeedStyle.cardPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={FeedStyle.container}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}} // İçeriğin tam ekran sığmasını sağlar
        showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <View style={FeedStyle.logoContainer}>
          <Image
            style={FeedStyle.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>

        {/* Hamburger Icon */}
        <View style={FeedStyle.hamburgerContainer}>
          <Hambug />
        </View>

        {/* Search Bar */}
        <TouchableOpacity style={FeedStyle.searchButton}>
          <View style={FeedStyle.searchInputContainer}>
            <TextInput
              placeholder="Search for..."
              placeholderTextColor="#fff"
              style={FeedStyle.searchInput}
            />
            <Search style={FeedStyle.searchIcon} />
          </View>
        </TouchableOpacity>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={FeedStyle.categoriesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={FeedStyle.category}>
              <Text style={FeedStyle.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Item Cards */}
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false} // FlatList'in kendi kaydırma özelliğini kapatıyoruz
          contentContainerStyle={FeedStyle.cardList}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default FeedScreen;
