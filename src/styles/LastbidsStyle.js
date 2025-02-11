import {StyleSheet} from 'react-native';

const LastbidsStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'left',
  },

  bidList: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Bileşenleri sarmak için wrap kullanmak
    justifyContent: 'space-between', // Elemanları daha düzgün yerleştir
  },
  bidItem: {
    backgroundColor: '#1E1E2A', // Daha zengin bir arka plan rengi
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16, // Daha geniş iç boşluk
    borderRadius: 12, // Köşe yuvarlatma
    marginBottom: 15, // Aralarındaki mesafeyi arttır
    width: '100%', // Elemanlar tam genişlikte olacak şekilde ayarlandı
  },

  avatar: {
    width: 45, // Avatar boyutunu büyüt
    height: 45,
    borderRadius: 22.5, // Yuvarlak avatar
    marginRight: 12, // Sağ boşluk
  },
  bidInfo: {
    flex: 1,
    justifyContent: 'space-between', // Sağ ve sol kısımlara yer bırakmak için
  },
  bidder: {
    color: 'white',
    fontSize: 16, // Daha okunabilir yazı boyutu
    fontWeight: 'bold',
    marginBottom: 4, // Kullanıcı ismini biraz daha belirgin yap
  },
  username: {
    color: '#6E44FF', // Daha açık gri
    fontSize: 14,
    marginBottom: 4, // Altında biraz boşluk bırak
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
});

export default LastbidsStyle;
