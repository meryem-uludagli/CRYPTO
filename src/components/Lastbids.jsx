import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import getBidsAction from '../redux/action/BidsActions';
import LastbidsStyle from '../styles/LastbidsStyle';

const Lastbids = () => {
  const dispatch = useDispatch();
  const {bids, status, error} = useSelector(state => state.bids);
  const [ethAmount, setEthAmount] = useState(8);

  useEffect(() => {
    dispatch(getBidsAction({}));
  }, [dispatch]);

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

  const images = [
    require('../assets/images/Avatar.png'),
    require('../assets/images/Avatar2.png'),
    require('../assets/images/Avatar3.png'),
    require('../assets/images/Avatar5.png'),
    require('../assets/images/Avatar5.png'),
  ];

  return (
    <View style={LastbidsStyle.container}>
      <Text style={LastbidsStyle.title}>Last Bids</Text>
      {(bids ?? []).length === 0 ? (
        <Text style={{color: 'white', textAlign: 'center'}}>
          No bids available
        </Text>
      ) : (
        <FlatList
          data={bids}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={LastbidsStyle.bidList}
          renderItem={({item, index}) => (
            <View style={LastbidsStyle.bidItem}>
              <Image
                source={images[index % images.length]}
                style={LastbidsStyle.avatar}
              />
              <View style={LastbidsStyle.bidInfo}>
                <Text style={LastbidsStyle.bidder}>{item.name}</Text>
                <Text style={LastbidsStyle.username}>{item.username}</Text>
              </View>

              <View style={LastbidsStyle.amountContainer}>
                <Text style={LastbidsStyle.amount}>{item.bidAmount}</Text>
                <Text style={LastbidsStyle.change}>{item.change}</Text>
              </View>
            </View>
          )}
        />
      )}
      <View style={LastbidsStyle.footer}>
        <View style={LastbidsStyle.ethControl}>
          <TouchableOpacity
            onPress={() => setEthAmount(prev => Math.max(0, prev - 1))}>
            <Text style={LastbidsStyle.ethButton}>-</Text>
          </TouchableOpacity>
          <Text style={LastbidsStyle.ethAmount}>{ethAmount} ETH</Text>
          <TouchableOpacity onPress={() => setEthAmount(prev => prev + 1)}>
            <Text style={LastbidsStyle.ethButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={LastbidsStyle.bidButton}>
          <Text style={LastbidsStyle.bidButtonText}>Make a bid</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Lastbids;
