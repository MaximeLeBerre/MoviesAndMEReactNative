import React from 'react';
import { View, Button, TextInput, FlatList, Text} from 'react-native';
import films from '../Helpers/filmData';
import styles from '../styles/app.style';
import FilmItem from './filmItem';

class Search extends React.Component{

  render(){
    return(
      <View style={ styles.main_container}>
        <TextInput style={styles.TextInput} placeholder="Titre du film"></TextInput>
        <Button style={styles.Button} title="Rechercher" onPress={() => {}}></Button>
        <FlatList 
          data={films} 
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}/>
      </View>
    )
  }
}


export default Search;