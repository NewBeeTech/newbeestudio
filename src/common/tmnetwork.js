import {urlEncode} from '../tool/tool.js'

class TMNetWork{
    static API_VERSION (){
        return 'api5.3';
    }
    static API_HOST (){
        return process.env.NODE_ENV === 'development' ? 'api2.baichebao.cn' : 'api.qcds.com';
    }
    static URL (){
        return "http://" + TMNetWork.API_HOST() + '/' + TMNetWork.API_VERSION() + '/';
    }
    static async urlSign (api,param,action,callback) {
      //console.log('await',await window.TMAPP.mCallFunction('native_sign',param))
      let cbData = await window.TMAPP.newMCallFunction('native_sign',param)
      let url = TMNetWork.URL() + api  + urlEncode(cbData)
      console.log('fetch-url',url)
      window.dispatch(action(url,callback))
    }
    static LOGIN_URL = TMNetWork.URL() + 'LOGIN_URL';

}

export default TMNetWork;