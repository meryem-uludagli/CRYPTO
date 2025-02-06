import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import getBidsAction from '../redux/action/BidsActions';
import LastbidsStyle from '../styles/LastbidsStyle';

const Lastbids = () => {
  const dispatch = useDispatch();
  const {bids, status, error} = useSelector(state => state.bids);

  useEffect(() => {
    dispatch(getBidsAction({}));
  }, [dispatch]);

  console.log('Redux Store Bids:', bids);

  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  if (status === 'failed') {
    return (
      <Text style={{color: 'red', textAlign: 'center'}}>
        Error loading bids: {error}
      </Text>
    );
  }

  return (
    <View style={LastbidsStyle.container}>
      <Text style={LastbidsStyle.title}>Last Bids</Text>
      {bids.length === 0 ? (
        <Text style={{color: 'white', textAlign: 'center'}}>
          No bids available
        </Text>
      ) : (
        <FlatList
          data={bids}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={LastbidsStyle.bidItem}>
              <Text style={LastbidsStyle.bidder}>{item.bidder}</Text>
              <Text style={LastbidsStyle.amount}>{item.amount} ETH</Text>
            </View>
          )}
          nestedScrollEnabled={true}
        />
      )}
    </View>
  );
};

export default Lastbids;
