var TMAPP = {};
TMAPP.mInCallBack = function(_mFunctionName,_mData) {
    if (_mData === 'null') {
        TMAPP[_mFunctionName](null);
    }else{
        TMAPP[_mFunctionName](JSON.parse(window.Base64.decode(_mData)));
    }
}
TMAPP.mCallFunction = function(_mFunctionName,_mData,_mCallBack) {
    TMAPP.registerFunction(_mFunctionName,_mCallBack);
    if (typeof window.tmControl === 'undefined') {
        window.location.href="tm:jscall:"+_mFunctionName+":"+window.Base64.encode(JSON.stringify(_mData));
    }else{
        window.tmControl.invokeNative("tm:jscall:"+_mFunctionName+":"+window.Base64.encode(JSON.stringify(_mData)));
    }
}

TMAPP.newMCallFunction = function(_mFunctionName,_mData){
  return new Promise((resolve,reject)=>{
    TMAPP.registerFunction(_mFunctionName,resolve);
    if (typeof window.tmControl === 'undefined') {
      window.location.href="tm:jscall:"+_mFunctionName+":"+window.Base64.encode(JSON.stringify(_mData));
    }else{
      window.tmControl.invokeNative("tm:jscall:"+_mFunctionName+":"+window.Base64.encode(JSON.stringify(_mData)));
    }
  })
}


TMAPP.callFunction = function (_mFunctionName,_mData,_mCallBack) {
    this.mCallFunction(_mFunctionName,_mData,_mCallBack);
}
TMAPP.registerFunction = function (_mFunctionName,_mCallBack){
    TMAPP[_mFunctionName] = _mCallBack;
}

export default TMAPP;