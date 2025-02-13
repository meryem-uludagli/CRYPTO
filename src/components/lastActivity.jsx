import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const activities = [
  {
    id: '1',
    wallet: '843.555.0130',
    date: '23.01.2022 13:54',
    eth: '+1.2 ETH',
    usd: '$1,242.88',
  },
  {
    id: '2',
    wallet: '843.555.0130',
    date: '23.01.2022 13:54',
    eth: '+1.2 ETH',
    usd: '$1,242.88',
  },
  {
    id: '3',
    wallet: '843.555.0130',
    date: '23.01.2022 13:54',
    eth: '+1.2 ETH',
    usd: '$1,242.88',
  },
  {
    id: '4',
    wallet: '843.555.0130',
    date: '23.01.2022 13:54',
    eth: '+1.2 ETH',
    usd: '$1,242.88',
  },
  {
    id: '5',
    wallet: '843.555.0130',
    date: '23.01.2022 13:54',
    eth: '+1.2 ETH',
    usd: '$1,242.88',
  },
];

const LastActivities = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedActivities = showAll ? activities : activities.slice(0, 3);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Last Activities</Text>
        <FlatList
          data={displayedActivities}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.activityItem}>
              <View style={styles.activityInfo}>
                <Text style={styles.wallet}>{item.wallet}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.eth}>{item.eth}</Text>
                <Text style={styles.usd}>{item.usd}</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{paddingBottom: 15}}
        />
        <TouchableOpacity
          style={styles.loadMoreButton}
          onPress={() => setShowAll(!showAll)}>
          <Text style={styles.loadMoreText}>
            {showAll ? 'Load Less' : 'Load More'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 15,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  activityInfo: {
    flexDirection: 'column',
  },
  wallet: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  date: {
    color: '#AAA',
    fontSize: 12,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  eth: {
    color: '#00ff88',
    fontSize: 14,
    fontWeight: 'bold',
  },
  usd: {
    color: '#AAA',
    fontSize: 12,
  },
  loadMoreButton: {
    marginTop: 15,
    backgroundColor: '#6A0DAD',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#6A0DAD',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default LastActivities;
