/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HelloComponent from './HellpComponent'
import LifecycleComponent from './LifecycleComponent'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {
            remove : false,
        }
    }

  render() {
    var view = this.state.remove?null:<LifecycleComponent/>
    var text = this.state.remove?"加载进来":"卸载掉"
    return (
      <View style={styles.container}>
          <Text
              style={{fontSize: 20}}
              onPress={()=>{
                this.setState({
                    remove:!this.state.remove
                })
              }}
          >{text}</Text>
        {view}
        <HelloComponent
          name={"小明"}
        />
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
