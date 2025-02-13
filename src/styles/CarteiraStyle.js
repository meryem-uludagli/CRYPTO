import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

const CarteiraStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    zIndex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  textone: {
    color: Colors.WHITE,
    fontSize: 40,
    fontWeight: '800',
  },
  texttwo: {
    color: Colors.GREEN,
  },
  image: {
    marginLeft: 10,
    width: 180,
    height: 130,
  },
  loadMoreButton: {
    backgroundColor: '#A294F9',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  followText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CarteiraStyle;
