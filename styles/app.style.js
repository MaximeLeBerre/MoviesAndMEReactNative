import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  main_container:{
    flex: 1
    
  },
  TextInput: {
    marginLeft: 5,
    marginRight: 5, 
    height: 50, 
    borderColor: '#000000', 
    borderWidth: 1, 
    paddingLeft: 5
  },
  Button:{
    height : 50
  },
  main_container_film: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  },
  loading_container_details: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  },
  FilmDetails: {
    flex: 1,
  },
  ScrollView_container : {
    flex: 1,
  },
  image_details: {
    height: 169,
    margin: 5
  },
  title_text_details: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center'
  },
  description_text_details: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text_details: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_container : {
    alignItems : 'center'
  },
  favorite_image : {
    width : 40,
    height: 40
  },
  favorite_image_animation : {
    flex: 1,
    width : null,
    height: null
  },
  icon: {
    width: 30,
    height: 30
  },
  list: {
    flex: 1
  },
  share_touchable_floatingactionbutton: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center'
  },
  share_image: {
    width: 30,
    height: 30
  }
})