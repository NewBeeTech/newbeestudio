/**
 * Created by hwh on 16/11/16.
 */
//import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {RECEIVE_DATA,CLEARN_DATA,RECEIVE_NOTI_DATA,NOTI_LOAD_MORE,LOADMORE,SETREAD} from '../action/action'
// 引入各reducers
function posts(state={},action){
  console.log(action)
  switch (action.type){
    case LOADMORE:
      return{
        ...state,
        loadMore:action.loadMore
      }
    case RECEIVE_DATA:
      return {...state,data:action.data,loadMore:false}
    case RECEIVE_NOTI_DATA:
      return {...state,data:action.data,nextMax:action.nextMax,loadMore:false,hasNext:1}
    case NOTI_LOAD_MORE:
      return{
        ...state,
        data:[
            ...state.data,
            ...action.data
        ],
        nextMax:action.nextMax,
        hasNext:action.hasNext
      }
    case CLEARN_DATA:
      return{
      }
    case SETREAD :
      return {
        ...state,
        data:state.data.map((item, index)=>{
          console.log('item',item);
          if(item.id === action.id){
            return {
              ...item,
              is_read: 1
            }
          }
          return item
        })
      }
    default:
      return state
  }
}
// 状态入口
const appReducers = combineReducers({
  posts
});

export default appReducers;