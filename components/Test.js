import React from 'react'
import { StyleSheet, View, Platform, Animated } from 'react-native'

class Test extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      topPosition : new Animated.Value(0)
    }
  }

  componentDidMount(){
    Animated.timing(
      this.state.topPosition,
      {
        toValue: 100,
        duration: 3000
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View style={[styles.subview_container, {top: this.state.topPosition}]}>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subview_container: {
    ...Platform.select({
      ios : {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'yellow'
      }
    }),
    width: 100, 
    height: 100 
  }
})

export default Test