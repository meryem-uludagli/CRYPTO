import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const FeedStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  logo: {
    width: 33,
    height: 40,
    top: 15,
  },
  hamburgerContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  searchButton: {
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1039',
    borderRadius: 30,
    paddingHorizontal: 15,
    width: '90%',
    height: 50,
    top: 50,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 45,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto',
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 100,
    paddingHorizontal: 10,
    alignItems: 'center',
    bottom: 30,
  },
  category: {
    borderWidth: 1,
    borderColor: '#2d116f',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 22,
    marginRight: 18,
    backgroundColor: '#1a1039',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  cardList: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#1a1039',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardImage: {
    width: width - 170,
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardInfo: {
    padding: 12,
  },
  cardOwner: {
    color: '#ccc',
    fontSize: 14,
    fontWeight: '400',
  },
  cardPrice: {
    marginTop: 6,
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FeedStyle;
