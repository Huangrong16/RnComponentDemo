/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/**
 * 方式一：ES6方式创建组件（推荐）
 * 传参数示例
 */
//导出组件
export default class HelloComponent extends Component{
  //UI渲染
  render() {
    //return不带（）会报错
    return(
        <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{this.props.name}!</Text>
    );
  }
}

/**
 * 方式二：ES5方式创建组件
 */
/*var HelloComponent=React.createClass({
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello React Native!</Text>
    }
})
module.exports=HelloComponent;*/

/**
 * 方式三：函数式创建组件
 * 无状态，无法使用this，传参数示例
 */
/*function HelloComponent(props) {
  return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello.{props.name}!</Text>
}
module.exports=HelloComponent;*/
