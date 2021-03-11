import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import FilmList from './FilmList';


class Favorites extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
        <FilmList 
          films={this.props.favoritesFilm}
          navigation={this.props.navigation}
          favoriteList={true}
        />
    )
  }
}


const mapStateToProps= state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites);