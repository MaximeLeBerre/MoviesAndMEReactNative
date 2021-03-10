import {createStackNavigation, createAppContainer} from 'react-navigation';
import Search from '../components/search'

const SearchStackNavigator = createStackNavigation({
  Search: {
    screen: Search,
    navigationoptions : {
      title: 'Rechercher'
    }
  }
})

export default createAppContainer(SearchStackNavigator);
