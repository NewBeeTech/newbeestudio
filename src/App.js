import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd-mobile/dist/antd-mobile.min.css';
import Button from 'antd-mobile/lib/button';
import {connect} from 'react-redux'
//import ActionSheet from 'antd-mobile/lib/action-sheet';

import {fetchDataPost} from './action/action'

import TMNetEngine from './common/tmnetengine';



class App extends Component {
    onBtnClick() {
        //const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
        //ActionSheet.showActionSheetWithOptions({
        //    options: BUTTONS,
        //    cancelButtonIndex: BUTTONS.length - 1,
        //    destructiveButtonIndex: BUTTONS.length - 2,
        //    // title: '标题',
        //    message: '我是描述我是描述',
        //    maskClosable: true
        //}, (buttonIndex) => {
        //    console.log("buttonIndex" + TMNetWork.LOGIN_URL);
        //    ActionSheet.close();
        //});
      //console.log('TMAPP',TMAPP)
      //window.param()
      console.log('click')
      TMNetWork.urlSign('user/explore?',{},fetchDataPost)
    }

    componentWillReceiveProps (prevProps) {
      console.log('prevProps',prevProps.data)
    }

    componentDidMount(){
      window.browserHistory
      console.log('app componentDidMount');
      /*
      let aTMNetEngine = new TMNetEngine();
      let p ={channel:'ios_autoguru_V1.0',lat:'0',lng:'0',location_city_id:'110000',location_province_id:'110000',nonce_str:'qwer1231as',patch_version:'5.2.0',source:'ios',uid:'423654',versioncode:'32'};
      (async ()=>{
          let obj = await aTMNetEngine.fetch('app/patch',{body:JSON.stringify(p)});
          console.log('obj',obj);
      })()
      */
  }
    render() {
        return (
            <div className="App">
              {this.props.children}
            </div>
        );
    }
}

function select(state){
  return{
    data:state.posts.data
  }
}

export default connect(select)(App)
