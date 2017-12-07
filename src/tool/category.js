/**
 * Created by hwh on 16/12/15.
 */
import React, {Component} from 'react'
Date.prototype.Format = function(fmt) {
  var o = {
    "M+" : this.getMonth()+1,         //月份
    "d+" : this.getDate(),          //日
    "h+" : this.getHours(),          //小时
    "m+" : this.getMinutes(),         //分
    "s+" : this.getSeconds(),         //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S" : this.getMilliseconds()       //毫秒
  };

  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}

Object.assign(Component.prototype,{
  NoneDataView(){
    return(
        <div style={{display:'flex',width:'100%',height:'100%',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <img src={this.props.noImg} style={{width:160,height:160}}/>
          <div style={{marginTop:10,color:'#999999'}}>{this.props.noTitle}</div>
        </div>
    )
  }
})