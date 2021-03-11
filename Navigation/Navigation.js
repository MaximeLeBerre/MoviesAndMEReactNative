import React from 'react';
import { Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Search from '../components/search';
import FilmDetails from '../components/filmDetails'
import Favorites from '../components/favorites';
import Test from '../components/Test'
import styles from '../styles/app.style';



const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions : {
      title: "Rechercher"
    }
  },
  FilmDetails: {
    screen: FilmDetails,
    
  }
});


const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris'
    }
  },
  FilmDetails: {
    screen: FilmDetails
  }
});


const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen : SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image 
          source={require('../Images/ic_search.png')}
          style={styles.icon}
        />
      }
    }
  },
  Favorites: {
    screen : FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image 
          source={require('../Images/ic_favorite.png')}
          style={styles.icon}
        />
      }
    }
  }
} , {
  tabBarOptions:{
    showLabel: false,
    showIcon: true,
    activeBackgroundColor: '#DDDDDD',
    inactiveBackgroundColor: '#FFFFFF'
  }
})

export default createAppContainer(MoviesTabNavigator)