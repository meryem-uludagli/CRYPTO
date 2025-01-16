import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import FeedScreen from '../screens/feedScreen/FeedScreen';
import PdpScreen from '../screens/pdpScreen/PdpScreen';
import PerfilScreen from '../screens/perfilScreen/PerfilScreen';
import RankingScreen from '../screens/rankingScreen/RankingScreen';
import CarteiraScreen from '../screens/carteiraScreen/CarteiraScreen';
import {CARTERIA, FEED, PDP, PERFIL, RANKING} from '../utils/routes';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#7d7d7d',
        headerShown: false,
      }}>
      <Tab.Screen
        name={FEED}
        component={FeedScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/logo.png')}
              style={{width: 26, height: 29, marginTop: 15}}
            />
          ),
        }}
      />

      <Tab.Screen
        name={PDP}
        component={PdpScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/wallet.png')}
              style={{width: 40, height: 40, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CARTERIA}
        component={CarteiraScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/Frame.png')}
              style={{width: 40, height: 40, marginTop: 15}}
            />
          ),
        }}
      />

      <Tab.Screen
        name={RANKING}
        component={RankingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/rank.png')}
              style={{width: 40, height: 40, marginTop: 15}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PERFIL}
        component={PerfilScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user.png')}
              style={{width: 40, height: 40, marginTop: 15}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
