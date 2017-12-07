/**
 * Created by hwh on 16/11/16.
 */
// action define
import Toast from 'antd-mobile/lib/toast'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const CLEARN_DATA = 'CLEARN_DATA'
export const RECEIVE_NOTI_DATA = 'RECEIVE_NOTI_DATA'
export const NOTI_LOAD_MORE = 'NOTI_LOAD_MORE'
export const LOADMORE = 'LOADMORE'
export const SETREAD = 'SETREAD'
export function Receive_data(data){
  return{
    type:RECEIVE_DATA,
    data:data
  }
}

export function Clearn_Data(){
  return {
    type:CLEARN_DATA
  }
}

export function Receive_Noti_Data(data,nextMax){
  return{
    type:RECEIVE_NOTI_DATA,
    data:data,
    nextMax:nextMax
  }
}

export function Load_More(bool) {
  return {
    type: LOADMORE,
    loadMore: bool
  }
}

export function SetRead(id){
  return {
    type: SETREAD,
    id:id
  }
}

export function Noti_Load_More(data,nextMax,hasNext){
  return{
    type:NOTI_LOAD_MORE,
    data:data,
    nextMax:nextMax,
    hasNext:hasNext
  }
}

export function fetchDataPost(url,callback){
  return async function(dispatch){
    try{
      let response = await window.fetch(url,{
        method:'GET'
      })
      let responseJson = await response.json()
      if(responseJson.code === 0){
        //Toast.success(responseJson.message)
        dispatch(Receive_data(responseJson.result))
        if (callback){
          callback(responseJson.result)
        }
      }else{
        Toast.fail(responseJson.message)
      }
    }catch (e){
      Toast.fail(e)
    }
  }
}

export function fetchNotification(url,callback){
  return async function(dispatch){
    try{
      let response = await window.fetch(url,{
        method:'GET'
      })

      let responseJson = await response.json()
      if(responseJson.code === 0){
        if(url.indexOf('max') !== -1){

          dispatch(Noti_Load_More(responseJson.result.data,responseJson.result.next_max,responseJson.result.has_next))
        }else{
          dispatch(Receive_Noti_Data(responseJson.result.data,responseJson.result.next_max))
        }
        if (callback){
          callback(responseJson.result)
        }
      }else{
          Toast.fail(responseJson.message)
      }
    }catch (e){
      Toast.fail(e)
    }
  }
}

export function fetchDataNonePost(url,callback){
  return async function(dispatch){
    try{
      let response = await window.fetch(url,{
        method:'GET'
      })
      let responseJson = await response.json()
      if (callback){
        callback(responseJson)
      }else{
        if(responseJson.code === 0){

        }else{
          Toast.fail(responseJson.message)
        }
      }
    }catch (e){
      Toast.fail(e)
    }
  }
}

