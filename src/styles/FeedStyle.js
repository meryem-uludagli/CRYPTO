import {StyleSheet} from 'react-native';

const FeedStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  logo: {
    width: 33,
    height: 40,
  },
  hamburgerContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  searchButton: {
    position: 'absolute',
    top: 100,
    width: '100%',
    alignItems: 'center',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: '80%',
    height: 50,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 30,
    fontSize: 16,
    color: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    width: 20,
    height: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  category: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 16,
    backgroundColor: '#333',
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  cardList: {
    paddingHorizontal: 15,
  },
  card: {
    width: '100%',
    backgroundColor: '#222',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    top: 180,
  },
  cardImage: {
    width: 400,
    height: 200,
  },
  cardInfo: {
    padding: 10,
  },
  cardOwner: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  cardPrice: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default FeedStyle;
