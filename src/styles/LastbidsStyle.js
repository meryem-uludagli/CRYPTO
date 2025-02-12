import {StyleSheet} from 'react-native';

const LastbidsStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'left',
  },
  bidList: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  bidItem: {
    backgroundColor: '#1E1E2A',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    width: '100%',
  },
  amountContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 10,
  },
  amount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  change: {
    fontSize: 14,
    color: '#FF5252',
  },
  bidInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bidder: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  username: {
    color: '#6E44FF',
    fontSize: 14,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  ethControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  ethButton: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
  ethAmount: {
    fontSize: 16,
    color: 'white',
  },
  bidButton: {
    backgroundColor: '#6E44FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bidButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default LastbidsStyle;
