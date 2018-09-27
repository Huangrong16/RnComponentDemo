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
export default class LifecycleComponent extends Component{
  constructor(props){
      super(props);
      console.log('---constructor---')
      this.state = {
        count : 0,
      }
  }
  //组件被装载前
  componentWillMount(){
      console.log('---componentWillMount---')
  }
  //组件被装载完成后，例如，进行网络请求
  componentDidMount(){
      console.log('---componentDidMount---')
  }

  //组件收到新的props时
  componentWillReceiveProps(nextProps){
      console.log('---componentWillReceiveProps---')
  }

  //组件是不是要更新
  shouldComponentUpdate(nextProps, nextState) {
      console.log('---shouldComponentUpdate---')
      //能够决定当前组件是否需要重新渲染
      return true;
  }

  //组件更新前
  componentWillUpdate(nextProps, nextState){
      console.log('---componentWillUpdate---')
  }

    //UI渲染
    render() {
        console.log('---render---')
        //return不带（）会报错
        return(
            <View>
                <Text
                    style={{fontSize:20,backgroundColor:'red'}}
                    onPress={()=>{
                      this.setState({
                          count:this.state.count+1
                      })
                    }}
                >点击啊{this.props.name}</Text>
                <Text
                    style={{fontSize:20}}
                >点击了{this.state.count}次</Text>
            </View>

    );
    }

  //组件更新后
  componentDidUpdate(preProps, preState){
      console.log('---componentDidUpdate---')
  }

  //组件被卸载，例如，回收/释放资源
  componentWillUnmount(){
      console.log('---componentWillUnmount---')
  }
}
