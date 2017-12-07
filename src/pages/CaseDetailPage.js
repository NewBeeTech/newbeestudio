/**
 * Created by hwh on 2017/11/16.
 */

import React, {Component} from 'react'
import * as styles from './caseDetailPage.css'

import {connect} from 'react-redux'
//import ActionSheet from 'antd-mobile/lib/action-sheet';
import { Navbar, Nav, NavItem,Button,Row,Col,Grid} from 'react-bootstrap'; // 导航组件

class caseDetailPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      dash:{
        toutu:'http://qufenqipublicrw.oss-cn-hangzhou.aliyuncs.com/fe/yihe/dash_toutu.jpg',
        QCode:require('../assets/img/dash_2weima.png'),
        sheji:require('../assets/img/dash_sheji.png'),
        gongqi:require('../assets/img/dash_gongqi.jpg'),

        jiaofuneirong:["交付内容：",<br/>,"源代码 （套）： 4套（H5，PC，后台，API）",<br/>,"产品（套）：3套（微信，PC，后台）",<br/>,"说明文档 （份）：1份",<br/>," 细节调整（次）：2次"],
        itemArray:[{itemTitle:'社交',itemSubtitle:'行业类型'},
          {itemTitle:'H5 后台',itemSubtitle:'产品类型'},
          {itemTitle:'4人',itemSubtitle:'投入人员'},
          {itemTitle:'30天',itemSubtitle:'开发时间'}
        ],
        title:'「那小子必须死联谊」',
        subtitle:'基于陌生两性社交的线下服务，进行男女比例1:1的联谊活动'
      },
      jijiu:{
        toutu:'http://qufenqipublicrw.oss-cn-hangzhou.aliyuncs.com/fe/yihe/WechatIMG3446.jpeg',
        QCode:require('../assets/img/jijiu2weima.png'),
        sheji:require('../assets/img/jijiuxuqiu.png'),
        gongqi:require('../assets/img/jijiugongqi.jpg'),
        jiaofuneirong:["交付内容：",<br/>,"源代码 （套）： 1套（小程序）",<br/>,"产品（套）：1套（小程序）",<br/>,"说明文档 （份）：1份",<br/>," 细节调整（次）：2次"],
        itemArray:[{itemTitle:'医疗行业',itemSubtitle:'行业类型'},
          {itemTitle:'小程序系统',itemSubtitle:'产品类型'},
          {itemTitle:'3人',itemSubtitle:'投入人员'},
          {itemTitle:'6天',itemSubtitle:'开发时间'}
        ],
        title:'「急救指南」',
        subtitle:'为用户提供心脏骤停和常见意外的应急教程，以及提供简单的求助功能'
      },
      qcds:{
        toutu:'http://qufenqipublicrw.oss-cn-hangzhou.aliyuncs.com/fe/campbell_boulanger_348386.jpg',
        QCode:require('../assets/img/qcds_2weima.png'),
        weixin:require('../assets/img/qcds_weixin.png'),
        sheji:require('../assets/img/qcds_sheji.png'),
        gongqi:require('../assets/img/qcds_gongqi.jpg'),
        jiaofuneirong:["交付内容：",<br/>,"源代码 （套）： 6套（小程序，H5，iOS，安卓，后台，API）",<br/>,"产品（套）：5套（小程序，微信端，iOS，安卓，后台）",<br/>,"说明文档 （份）：1份",<br/>," 细节调整（次）：5次"],
        itemArray:[{itemTitle:'汽车后市场',itemSubtitle:'行业类型'},
          {itemTitle:'全套',itemSubtitle:'产品类型'},
          {itemTitle:'10人',itemSubtitle:'投入人员'},
          {itemTitle:'60天',itemSubtitle:'开发时间'}
        ],
        title:'「汽车大师」',
        subtitle:'一款汽车问答产品，服务于汽车后市场。为百万车主解决用车修车养车问题。目前总用户量500w，微信小程序上线2月用户量达70w'
      },

      shishicai:{
        toutu:'http://qufenqipublicrw.oss-cn-hangzhou.aliyuncs.com/fe/bethan_abra_401788.jpg',
        jietu1:require('../assets/img/shishicai_jietu1.jpg'),
        jietu2:require('../assets/img/shishicai_jietu2.jpg'),
        jietu4:require('../assets/img/shishicai_jietu4.jpeg'),
        jietu3:require('../assets/img/shishicai_jietu3.jpg'),
        gongqi:require('../assets/img/shishicai_gongqi.png'),
        jiaofuneirong:["交付内容：",<br/>,"源代码 （套）： 1套（PC）",<br/>,"产品（套）：1套（PC）",<br/>,"说明文档 （份）：1份",<br/>," 细节调整（次）：1次"],
        itemArray:[{itemTitle:'彩票行业',itemSubtitle:'行业类型'},
          {itemTitle:'web、后台',itemSubtitle:'产品类型'},
          {itemTitle:'5人',itemSubtitle:'投入人员'},
          {itemTitle:'60天',itemSubtitle:'开发时间'}
        ],
        title:'「时时彩私人平台」',
        subtitle:'时时彩是一种在线即开型彩票玩法属于 基诺型彩票，由 福利彩票发行管理中心负责承销。'
      },
      yingxiong:{
        toutu:'http://qufenqipublicrw.oss-cn-hangzhou.aliyuncs.com/fe/timg-1122233.jpeg',
        QCode:require('../assets/img/yingxiong_2weima.jpeg'),
        sheji:require('../assets/img/yingxiong_sheji.png'),
        gongqi:require('../assets/img/yingxiong_gongqi.png'),
        jiaofuneirong:["交付内容：",<br/>,"源代码 （套）： 1套（H5）",<br/>,"产品（套）：1套（微信端）",<br/>,"说明文档 （份）：1份",<br/>," 细节调整（次）：1次"],
        itemArray:[{itemTitle:'电竞培训',itemSubtitle:'行业类型'},
          {itemTitle:'H5',itemSubtitle:'产品类型'},
          {itemTitle:'5人',itemSubtitle:'投入人员'},
          {itemTitle:'20天',itemSubtitle:'开发时间'}
        ],
        title:'「英雄训练营」',
        subtitle:'面向英雄联盟和王者荣耀的线上电竞培训平台'
      },
      hso:{
        toutu:'http://qufenqipublicrw.oss-cn-hangzhou.aliyuncs.com/fe/freestocks_org_126848.jpg',
        QCode:require('../assets/img/hso_2weima.jpg'),
        sheji:require('../assets/img/hso_sheji.png'),
        sheji2:require('../assets/img/hso_sheji2.jpeg'),
        gongqi:require('../assets/img/hso_gongqi.png'),
        homeLink:'http://www.hsohealth.com',
        jiaofuneirong:["交付内容：",<br/>,"源代码 （套）： 4套（Web，H5，后台，API）",<br/>,"产品（套）：3套（PC，H5，后台）",<br/>,"说明文档 （份）：1份",<br/>," 细节调整（次）：3次"],
        itemArray:[
            {itemTitle:'医疗',itemSubtitle:'行业类型'},
          {itemTitle:'PC、H5、后台',itemSubtitle:'产品类型'},
          {itemTitle:'7人',itemSubtitle:'投入人员'},
          {itemTitle:'90天',itemSubtitle:'开发时间'}
        ],
        title:'「H.S.O. 健康管理」',
        subtitle:'为患者提供病后/术后管理以及健康险销售'
      }
    }
  }
  render(){
    let type = this.props.location.query.type
    let data = this.state[type]
    console.log('sands',type)
    if(!data){
      return false
    }
    return (
        <div className="casebackContainer">

          <div className="detailTopBanner" style={{backgroundImage: `url(${data.toutu})`,backgroundRepeat:'no-repeat'}}>
            <img className="maskImg" src={require('../assets/img/Mask@3x.png')}/>

          </div>
          <div className="caseTopContent">

            <p className="caseTopTitle">{data.title}
            </p>

            <div className="caseTopSubTitle">
              {data.subtitle}
              {/*<div className="caseTopSubTitleBack"></div>*/}
              {/*<span className="caseTopSubTitle">1个月打造智能急救上报小程序</span>*/}
            </div>
          </div>



          <div className="caseItemContainer">

            {data.itemArray.map((item,index)=>{
              return(
                  <div key={item.itemTitle} className="caseItemContentContainer">
                    <div className="caseItemTextContainer">
                      <div className="caseItemTitle">{item.itemTitle}</div>
                      <div className="caseItemSubTitle">{item.itemSubtitle}</div>
                    </div>
                    {index !== data.itemArray.length-1 && <div className="caseItemline"/>}
                  </div>
              )
            })}
          </div>

          {type === 'shishicai' &&
          <div className="caseContentContainer">
            <div className="caseContentTitle">作品展示</div>
            <p className="caseContent">为保证项目私密性，只展示页面截图</p>
            <img className="xuqiu" src={data.jietu1} style={{marginTop:50}}/>
            <img className="xuqiu" src={data.jietu2} style={{marginTop:50}}/>
            <img className="xuqiu" src={data.jietu3} style={{marginTop:50}}/>
            <img className="xuqiu" src={data.jietu4} style={{marginTop:50}}/>

            {/*<img className="QRCode" src={data.QCode}/>*/}
            {/*{data.weixin && <p className="caseContent">微信扫描下方二维码查看{data.title}</p>}*/}

            {/*{data.weixin && <img className="QRCode" src={data.weixin}/>}*/}
          </div>
          }


          {type !== 'shishicai' &&
          <div className="caseContentContainer">
            <div className="caseContentTitle">作品展示</div>
            {data.homeLink && <span>官网链接：<a>{data.homeLink}</a></span>}
            <p className="caseContent">微信扫描下方二维码查看{data.title}</p>
            <img className="QRCode" src={data.QCode}/>
            {data.weixin && <p className="caseContent">微信扫描下方二维码查看{data.title}</p>}

            {data.weixin && <img className="QRCode" src={data.weixin}/>}
          </div>
          }


          {type !== 'shishicai' &&
          <div className="caseContentContainer">
            <div className="caseContentTitle">需求文档</div>
            <p className="caseContent">与需求方反复沟通后产出的设计稿与需求文档</p>
            <img className="xuqiu" src={data.sheji}/>
            {data.sheji2 && <img className="xuqiu" src={data.sheji2} style={{marginTop:50}}/>}

          </div>
          }


          <div className="caseContentContainer">
            <div className="caseContentTitle">工期</div>
            {/*<p className="caseContent">小程序开发工时为6天，审核周期为3~5天。</p>*/}
            <img className="gongqi" src={data.gongqi}/>
          </div>


          <div className="caseContentContainer">
            <div className="caseContentTitle">交付内容</div>
            <p  className="caseContent">
              {data.jiaofuneirong}
            </p>
          </div>




        </div>
    )
  }
}


function select(state){
  return {
    nextMax:state.posts.nextMax,
    data:state.posts.data,
    loadMore:state.posts.loadMore,
    hasNext:state.posts.hasNext
  }
}

export default connect(select)(caseDetailPage)

