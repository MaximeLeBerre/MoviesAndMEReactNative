import React from 'react'
import {  View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/app.style'
import {getUrlForPoster} from '../API/TMDBApi'

class FilmItem extends React.Component {

  _displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      // Si la props isFilmFavorite vaut true, on affiche le 🖤
      return (
        <Image
          style={styles.favorite_image}
          source={require('../Images/ic_favorite.png')}
        />
      )
    }
  }

  render() {
    const { film , displayDetailForFilm } = this.props
    return (
      <TouchableOpacity 
        onPress={() => displayDetailForFilm(film.id)}
        style={styles.main_container_film}>
        <Image
          style={styles.image}
          source={{uri: getUrlForPoster(film.poster_path)}}/>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
          {this._displayFavoriteImage()}
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FilmItem;