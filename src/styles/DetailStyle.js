import {StyleSheet} from 'react-native';

const DetailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
    bottom: 210,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 10,
  },
});

export default DetailStyle;
