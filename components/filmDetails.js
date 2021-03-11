import React from 'react';
import {View, Text, Share, Platform, ActivityIndicator, Image, TouchableOpacity,} from 'react-native';
import styles from '../styles/app.style';
import {getFilmDetailFromApi, getUrlForBannerOfFilmDetails} from '../API/TMDBApi';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux';
import EnlargeShrink from '../Animation/EnlargeShrink'


class FilmDetails extends React.Component{

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    // On accède à la fonction shareFilm et au film via les paramètres qu'on a ajouté à la navigation
    if (params.film != undefined && Platform.OS === 'ios') {
      return {
          // On a besoin d'afficher une image, il faut donc passe par une Touchable une fois de plus
          headerRight: <TouchableOpacity
                          style={styles.share_touchable_headerrightbutton}
                          onPress={() => params.shareFilm()}>
                          <Image
                            style={styles.share_image}
                            source={require('../Images/ic_share.ios.png')} />
                        </TouchableOpacity>
      }
    }
}

  constructor(props){
    super(props);
    this.state = {
      film : undefined,
      isLoading : false
    }
  }

  _updateNavigationParams(){
    this.props.navigation.setParams({
      shareFilm: this._shareFilm,
      film: this.state.film
    })
  }

  componentDidMount(){
    const favoritesFilmIndex = this.props.favoritesFilm.findIndex(
      item => item.id === this.props.navigation.state.params.id)
     if(favoritesFilmIndex !== -1){
        this.setState({
          film: this.props.favoritesFilm[favoritesFilmIndex]
        }, () => {this._updateNavigationParams()})
        return
     }


     



    getFilmDetailFromApi(this.props.navigation.state.params.id).then(data => {
        this.setState({
          film : data,
          isLoading: false
        }, () => {this._updateNavigationParams()})
      })
  }

  _shareFilm = () => {
    const {film} = this.state

    Share.share({
      title: film.title,
      message: film.overview
    })
  }

  _displayFloatingActionButton(){
    const {film} = this.state

    if(film  !== undefined && Platform.OS === 'android'){
      return(
        <TouchableOpacity
          style={styles.share_touchable_floatingactionbutton}
          onPress={() => this._shareFilm()}
        >
          <Image
            style={styles.share_image}
            source={require('../Images/ic_share.android.png')}

          />          
        </TouchableOpacity>
      )
    }
  }

  _toggleFavorite(){
    const action = {
      type : "TOGGLE_FAVORITE",
      value : this.state.film
    }
    this.props.dispatch(action)
  }

  _displayFavoriteImage() {
    var sourceImage = require("../Images/ic_favorite_border.png")
    var shouldEnlarge = false
    if(this.props.favoritesFilm.findIndex(item => item.id === this.state.film.id) !== -1){
       sourceImage = require("../Images/ic_favorite.png")
       shouldEnlarge = true
    }
    return(
      <EnlargeShrink
        shouldEnlarge={shouldEnlarge}>
        <Image source={sourceImage} style={styles.favorite_image_animation} />
      </EnlargeShrink>
      
    )
  }

  _displayFilm(){
    const  film   = this.state.film;
    if(film != undefined){
      return(
        <ScrollView style={styles.ScrollView_container}>
          <Image
            style={styles.image_details}
            source={{uri: getUrlForBannerOfFilmDetails(film.backdrop_path)}}
          />
          <Text style={styles.title_text_details}>{film.title}</Text>
          <TouchableOpacity style={styles.favorite_container} onPress={() => this._toggleFavorite()}>{this._displayFavoriteImage()}</TouchableOpacity> 
          <Text style={styles.description_text_details}>{film.overview}</Text>
          <Text style={styles.default_text_details}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text_details}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text_details}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text_details}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text_details}>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text style={styles.default_text}>Companie(s) : {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
        </ScrollView>
      )
    }
  }

  _displayLoading(){
    if(this.state.isLoading){
      <View style={styles.loading_container_details}>
        <ActivityIndicator size="large" />
      </View>
    }
  }

  render(){
    return(
      <View style={styles.FilmDetails}>
        {this._displayLoading()}
        {this._displayFilm()}
        {this._displayFloatingActionButton()}
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return  {
    favoritesFilm : state.favoritesFilm
  }
};

export default connect(mapStateToProps)(FilmDetails);