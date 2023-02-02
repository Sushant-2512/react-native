import {Text, View, StyleSheet, Image, FlatList,ScrollView} from 'react-native';

import Film from './Film.jsx';

const data = [
  {
    id: 1,
    name: 'Fast and Furious',
    about: 'Hobbs & shows',
    type: 'movie',
    rating: '8.6',
    url: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
  },
  {
    id: 2,
    name: 'The Godfather',
    about: 'funny',
    type: 'movie',
    rating: '9.5',
    url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
  },
  {
    id: 3,
    name: 'The Dark knight',
    about: 'horror',
    type: 'movie',
    rating: '10',
    url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
  },
  {
    id: 4,
    name: 'Inception',
    about: 'abnormal',
    type: 'web series',
    rating: '10',
    url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
  },

  {
    id: 5,
    name: 'Forest Gump',
    about: 'Horror',
    type: 'web series',
    rating: '10',
    url: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg',
  },
  {
    id: 6,
    name: 'The Matrix',
    about: 'abnormal',
    type: 'web series',
    rating: '10',
    url: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',
  },
  {
    id: 7,
    name: 'God Fellas',
    about: 'funny',
    type: 'movie',
    rating: '10',
    url: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg',
  },
  {
    id: 8,
    name: 'Inception',
    about: 'abnormal',
    type: 'web series',
    rating: '10',
    url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
  }
];
const Films = () => {
  return (
    <View style={{flex:1}}>
      <Text style={styles.month}>August</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Film movie={item} />}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  month: {
    marginLeft: 10,
    fontWeight: 'bold',
    textDecorationStyle: 'solid',
    fontSize: 30,
    color: 'black',
  },
});

export default Films;
