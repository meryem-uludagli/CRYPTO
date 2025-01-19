import React from 'react';
import {
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import FeedStyle from '../../styles/FeedStyle';
import {Search} from '../../assets/icons/Search';
import Header from '../../components/Header';

const FeedScreen = () => {
  const categories = ['All', '3D', '2D', 'GIFs', 'Illustration', 'ETH'];

  const items = [
    {
      id: '1',
      image: require('../../assets/images/NFT.png'),
      owner: 'Jason',
      price: '1.2 ETH',
    },
    {
      id: '2',
      image: require('../../assets/images/NFT2.png'),
      owner: 'Alice',
      price: '2 ETH',
    },
    {
      id: '3',
      image: require('../../assets/images/NFT3.png'),
      owner: 'Derek',
      price: '0.2 ETH',
    },
  ];

  const renderCategory = ({item}) => (
    <TouchableOpacity style={FeedStyle.category}>
      <Text style={FeedStyle.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <View style={FeedStyle.card}>
      <Image source={item.image} style={FeedStyle.cardImage} />
      <View style={FeedStyle.cardInfo}>
        <Text style={FeedStyle.cardOwner}>Owned by {item.owner}</Text>
        <Text style={FeedStyle.cardPrice}>{item.price}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={FeedStyle.header}>
      <Header />

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
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={FeedStyle.categoriesContainer}
      />
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={FeedStyle.container}
      resizeMode="cover">
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={FeedStyle.cardList}
        ListFooterComponent={<View style={{height: 20}} />}
      />
    </ImageBackground>
  );
};

export default FeedScreen;
