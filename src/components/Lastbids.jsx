import React, {useEffect} from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBids} from '../redux/slice/BidsSlice';

const Lastbids = () => {
  const dispatch = useDispatch();
  const {bids, status} = useSelector(state => state.bids);

  useEffect(() => {
    dispatch(fetchBids());
  }, [dispatch]);

  if (status === 'loading') {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text style={styles.errorText}>Error loading bids</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Bids</Text>
      <FlatList
        data={bids}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.bidItem}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View style={styles.bidInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.amount}>{item.bidAmount}</Text>
              <Text style={styles.change}>{item.change}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Lastbids;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#0D0D0D',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  bidItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  bidInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 14,
    color: '#888',
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  change: {
    fontSize: 12,
    color: 'red',
  },
  loadingText: {
    color: '#fff',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
