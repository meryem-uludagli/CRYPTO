import {Add, Heart, Profile, Setting2} from 'iconsax-react-native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

const nftData = [
  {id: '1', image: require('../../assets/images/NFTone.png')},
  {id: '2', image: require('../../assets/images/NF.png')},
  {id: '3', image: require('../../assets/images/NFTthree.png')},
  {id: '4', image: require('../../assets/images/NFTto.png')},
];

const PerfilScreen = () => {
  return (
    <LinearGradient colors={['#1E1A3C', '#100F1F']} style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={require('../../assets/images/Avatar.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Profile size={18} color="white" variant="Bold" />
          </TouchableOpacity>
        </View>
        <Text style={styles.username}>FeuX</Text>
        <Text style={styles.handle}>@feuxdesign</Text>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>24</Text>
          <Text style={styles.statLabel}>NFTs</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>1.2K</Text>
          <Text style={styles.statLabel}>Takipçi</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>356</Text>
          <Text style={styles.statLabel}>Takip Edilen</Text>
        </View>
      </View>

      <FlatList
        data={nftData}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.nftContainer}
        renderItem={({item}) => (
          <View style={styles.nftCardContainer}>
            <Image source={item.image} style={styles.nftCard} />
            <TouchableOpacity style={styles.likeButton}>
              <Heart size={20} color="white" variant="Bold" />
            </TouchableOpacity>
          </View>
        )}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  profileSection: {alignItems: 'center', marginBottom: 20, marginTop: 20},
  profileImageWrapper: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderColor: '#6A0DAD',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#6A0DAD',
    borderRadius: 15,
    padding: 5,
  },
  username: {color: 'white', fontSize: 26, fontWeight: 'bold', marginTop: 10},
  handle: {color: '#BBB', fontSize: 16, marginTop: 5},
  followButton: {
    backgroundColor: '#6A0DAD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15,
  },
  followButtonText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
  },
  statItem: {alignItems: 'center'},
  statValue: {color: 'white', fontSize: 22, fontWeight: 'bold'},
  statLabel: {color: '#BBB', fontSize: 14, marginTop: 5},
  nftContainer: {alignItems: 'center'},
  nftCardContainer: {
    backgroundColor: '#282546',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  nftCard: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 15,
  },
  likeButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    padding: 5,
  },
});

export default PerfilScreen;
