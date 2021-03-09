import React from 'react';
import { View, Button, TextInput, FlatList, Text, ActivityIndicator} from 'react-native';
import films from '../Helpers/filmData';
import styles from '../styles/app.style';
import FilmItem from './filmItem';
import {getFilmFromSearchApi} from '../API/TMDBApi';

class Search extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      films : [],
      isLoading : false, 
    }
    this.searchedText = "",
    this.page = 0,
    this.totalPages= 0
  }

  _displayLoading(){
    if(this.state.isLoading){
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" />
      </View>
    }
  }

  _loadFilms(){
    this.setState({isLoading : true})
    if (this.searchedText.length > 0) {
      getFilmFromSearchApi(this.searchedText, this.page+1).then(data => 
        {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films : [
              ...this.state.films, ...data.results
            ], 
            isLoading: false 
          })
        }
      )}
  }

  _searchTextInputChanged(text){
    this.searchedText = text;
  }

  _searchFilms(){
    this.page= 0 
    this.totalPages = 0
    this.setState({films : []}, this._loadFilms())
    
  }

  render(){
    return(
      <View style={ styles.main_container}>
        <TextInput onSubmitEditing={()=> this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.TextInput} placeholder="Titre du film"></TextInput>
        <Button style={styles.Button} title="Rechercher" onPress={() => this._searchFilms()}></Button>
        <FlatList 
          data={this.state.films} 
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {if(this.page < this.totalPages){
            this._loadFilms()
          }}}
          renderItem={({item}) => <FilmItem film={item}/>}/>
          {this._displayLoading()}
      </View>


    )
  }
}


export default Search;