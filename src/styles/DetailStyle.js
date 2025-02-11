import {StyleSheet} from 'react-native';

const DetailStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
    top: 40,
  },
  iconClose: {
    position: 'absolute',
    top: 70,
    left: 380,
    zIndex: 10,
  },
  number: {
    color: 'gray',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    right: 150,
    top: 25,
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    right: 80,
    top: 15,
  },
  ownerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E2A',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    top: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  ownedBy: {
    color: '#888',
    fontSize: 14,
  },
  ownerName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  followButton: {
    marginLeft: 'auto',
    backgroundColor: '#6E44FF',
    paddingVertical: 6,
    paddingHorizontal: 19,
    borderRadius: 15,
  },
  followText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1E1E2A',
    borderRadius: 10,
  },
  descriptionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    color: 'gray',
    fontSize: 14,
    lineHeight: 20,
  },
  loadMoreButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#6E44FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6E44FF',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    textAlign: 'center',
  },

  followText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DetailStyle;
