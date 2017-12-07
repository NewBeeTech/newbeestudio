/**
 * Created by hwh on 17/5/18.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'
import './homePage.css'

import {connect} from 'react-redux'
//import ActionSheet from 'antd-mobile/lib/action-sheet';
import { Navbar, Nav, NavItem,Button,Row,Col,Grid} from 'react-bootstrap'; // 导航组件
class NotificationPage extends Component{
  constructor(props){
    super(props)
    this.state = {
      alertViewShow: false,
      isMiddleWindow:window.innerWidth < 992
    }
  }

  componentDidMount(){
    console.log('clientWidth',document.documentElement.clientWidth,window.innerWidth,window.devicePixelRatio)
    window.addEventListener('resize',(e)=>this._onWindowResize(e))
  }
  //监听视口尺寸改变
  _onWindowResize(e){
    let window_width = e.target.innerWidth
    if(e.target.devicePixelRatio >= 3){
      window_width = window_width / 3 * 2
    }
    if(window_width < 992){ // bootstrap: < md
      this.setState({
        isMiddleWindow: true
      })
    }else{
      this.setState({
        isMiddleWindow: false
      })
    }
    console.log('resize',e.target.innerWidth)
  }

  _renderContent2(){ //contentDiv2响应式需要单独处理
    return (
        <div className='contentDiv2_middle'>
          <div className='homeContentTitle' style={{marginTop:50}}>专业的产品经理，帮您打造更好的产品</div>
          <div className='homeContent' style={{marginTop:10}}>给您的想法提供更适合的产品解决方案</div>
          <img style={{width:'40%',marginTop:20,marginBottom:20}} src={require('../assets/img/yirenweiben.png')}/>
          <ul className='content2_middle_list'>
            <li><span>产品咨询</span>
              <p className='homeSubContent'>经验丰富的产品经理会为你梳理出和现阶段匹配的产品需求</p>
            </li>
            <li><span>媒体推广</span>
              <p className='homeSubContent'>将项目推荐合作媒体进行宣传推广</p>
            </li>
            <li><span>技术分享</span>
              <p className='homeSubContent'>专业的行内技术大拿进行技术知识分享</p>
            </li>

          </ul>
        </div>
    )
  }

  render(){
    const {homeData} = this.state
    return(
        <div className='homeBackDiv'>
          <div className='topDiv'>
            <img src={require('../assets/img/breather-168754@3x.png')} style={{width:'100%'}}/>
            <img className="maskImg" src={require('../assets/img/Mask@3x.png')} style={{width:'100%'}}/>

            <div className='contentDiv' style={{top:window.innerWidth <= 700 ? '10%' : '25%' }}>
              <img className="logo" style={{width:window.innerWidth <= 700 ? 70:100,height:window.innerWidth <= 700 ? 70:100}} src={require('../assets/img/Group@3x.png')}/>
              <div className='title' style={{marginTop:'3%',fontSize:window.innerWidth <= 700 ? '1em' : '1.6em'}}>新蜂工作室,更好的开发服务</div>
              <div className='content' style={{marginTop:'3%',fontSize:window.innerWidth <= 700 ? '0.2em' : '1em'}}>微信、网页、App、运营管理后台产品策划开发</div>
              <div className='home_button' style={{marginTop:'3%'}}  onClick={()=>{
                this.setState({
                alertViewShow:!this.state.alertViewShow
                })
              }}>
                立即联系我们
              </div>
            </div>
          </div>
          <div className='contentDiv1'>
            <div className='homeContentTitle' style={{marginTop:50}}>我们的承诺</div>
            <div className='homeContent' style={{marginTop:15}}>靠谱的服务是所有项目成功的必要条件</div>
            <Grid style={{marginTop:50}}>
              <Row>
                <Col xs={12} md={4}>
                  <img src={require('../assets/img/index-promise01@2x.png')}/>
                  <div className='homeSubTitle' style={{marginTop:30}}>项目按时交付</div>
                  <div className='homeSubContent' style={{marginTop:15}}>遵守时间约定，项目实时跟进</div>
                </Col>
                <Col xs={12} md={4}>
                  <img  src={require('../assets/img/index-promise02@2x.png')}/>
                  <div className='homeSubTitle' style={{marginTop:30}}>代码质量保障</div>
                  <div className='homeSubContent' style={{marginTop:15}}>代码规范检查，多方测试验收</div>
                </Col>
                <Col xs={12} md={4} >
                  <img src={require('../assets/img/index-promise03@2x.png')}/>
                  <div className='homeSubTitle' style={{marginTop:30}}>价格公允透明</div>
                  <div className='homeSubContent' style={{marginTop:15}}>按需报价，提供更高性价比</div>
                </Col>
              </Row>
            </Grid>
            <div>
            </div>
          </div>
          <div>
          </div>

          {this.state.isMiddleWindow ? this._renderContent2() :
              <div className='contentDiv2'>
                <div className='homeContentTitle' style={{marginTop:50}}>专业的产品经理，帮您打造更好的产品</div>
                <div className='homeContent' style={{marginTop:15}}>给您的想法提供更适合的产品解决方案</div>
                <div className='circleContainer'>
                  <div className='pulse'></div>
                  <div className='pulse1'></div>
                  <div className='pulse2'></div>
                  <div className='circleContent'>产品为本</div>
                </div>
                <div className='centerContent'>
                  <div className='leftContent'>
                    <div className='homeContentTitle' style={{marginTop:50}}>产品咨询</div>
                    <div className='homeContent' style={{marginTop:15}}>经验丰富的产品经理会为你梳理出和现阶段匹配的产品需求</div>
                  </div>
                  <div className='rightContent'>
                    <div className='homeContentTitle' style={{marginTop:50}}>产品设计</div>
                    <div className='homeContent' style={{marginTop:15}}>结合产品使用人群和使用场景设计出更好用的产品原型</div>
                  </div>
                </div>
                <div className='bottomContent'>
                  <div className='homeContentTitle' style={{marginTop:50}}>团队建议</div>
                  <div className='homeContent' style={{marginTop:15}}>用精益创业的理念，教你如何小步快跑，快速迭代，降低试错成本</div>
                </div>
              </div>
          }

          <div className='contentDiv3'>
            <div className='homeContentTitle'>连接的力量</div>
            <div className='homeContent'  style={{marginTop:15}}>我们相信连接的力量，连接正在改变世界</div>
            <Grid>
              <Row>
                <Col xs={12} md={6} style={{marginTop:40}}>
                  <img style={{width:'50%'}} src={require('../assets/img/index-logo-wall@2x.png')}/>
                </Col>
                <Col xs={12} md={6} style={{marginTop:40}}>
                  <div style={{color:'#333333',fontSize:'1.2em',textAlign:this.state.isMiddleWindow ? 'center' : 'left'}}>代码质量保障</div>
                  <ul className={this.state.isMiddleWindow?'listContentCenter':'listContent'} style={{textAlign:this.state.isMiddleWindow ? 'center' : 'left'}}>
                    <li><span>基金对接：项目与投资方对接，及时有效的获得资金支持</span></li>
                    <li><span>媒体推广：将项目推荐合作媒体进行宣传推广</span></li>
                    <li><span>技术分享 ：专业的行内技术大拿进行技术知识分享</span></li>
                    <li><span>项目路演推荐：向合作孵化器推荐项目满足您的融资需求</span></li>
                    <li><span>行业数据分享：收集提供行业发展信息让您更快了解市场</span></li>
                  </ul>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className='contentDiv4'>
            <div className='homeContentTitle'>四步完成您的产品</div>
            <div className='homeContent' style={{marginTop:15}}>4步服务流程，简单、快速、保质完成您的产品</div>
            <Grid>
              <Row>
                <Col xs={6} sm={6} md={3} style={{marginTop:40}}>
                  <div>
                    <img style={{width:'50%'}} src={require('../assets/img/step-icon-01@2x.png')}/>
                  </div>
                  <img style={{width:'30%'}} src={require('../assets/img/icon-01@2x.png')}/>
                  <div style={{color:'#333333',fontSize:'1.2em'}}>产品咨询</div>
                  <p style={{marginTop:15,color:'#727681',fontSize:'0.8em',lineHeight: '1.8em',height:20}}>通过产品咨询，产品经理会为您梳理需求提供产品解决方案以及原型设计</p>
                </Col>
                <Col xs={6} sm={6} md={3} style={{marginTop:40}}>
                  <div>
                    <img style={{width:'50%'}} src={require('../assets/img/step-icon-02@2x.png')}/>
                  </div>
                  <img style={{width:'30%'}} src={require('../assets/img/icon-02@2x.png')}/>
                  <div style={{color:'#333333',fontSize:'1.2em'}}>UI设计</div>
                  <p style={{marginTop:15,color:'#727681',fontSize:'0.8em',lineHeight: '1.8em'}}>设计师根据产品特性和用户属性进行UI设计，提升产品体验</p>
                </Col>
                <Col xs={6} sm={6} md={3} style={{marginTop:40}}>
                  <div>
                    <img style={{width:'50%'}} src={require('../assets/img/step-icon-03@2x.png')}/>
                  </div>
                  <img style={{width:'30%'}} src={require('../assets/img/icon-03@2x.png')}/>
                  <div style={{color:'#333333',fontSize:'1.2em'}}>产品开发</div>
                  <p style={{marginTop:15,color:'#727681',fontSize:'0.8em',lineHeight: '1.8em'}}>根据产品需求和原型，工程师进入开发阶段，规范的代码保障项目质量</p>
                </Col>
                <Col xs={6} sm={6} md={3} style={{marginTop:40}}>
                  <div>
                    <img style={{width:'50%'}} src={require('../assets/img/step-icon-04@2x.png')}/>
                  </div>
                  <img style={{width:'30%'}} src={require('../assets/img/icon-04@2x.png')}/>
                  <div style={{color:'#333333',fontSize:'1.2em'}}>测试上线</div>
                  <p style={{marginTop:15,color:'#727681',fontSize:'0.8em',lineHeight: '1.8em'}}>通过内部测试和第三方专业测试及时发现修复bug，顺利部署上线</p>
                </Col>
              </Row>
            </Grid>
          </div>

          <div className="contentDiv5">
            <div style={{color:'#333333',fontSize:'1.4em'}}>成功案例</div>
            <div style={{position:'relative',left:'5%',marginTop:15,color:'#666666',fontSize:'1em',width:'90%',textAlign:'center'}}>专属的产品经理＋顶尖开发团队＋严密测试＝您的产品</div>
            <Grid>
              <Row>
                <Col xs={12} sm={6} md={6} style={{marginTop:40}}>
                  <Link to={{pathname:'caseDetail',query:{type:'dash'}}} className="caseImgContainer" style={{borderRadius:20}}>
                    <img className="caseImg" style={{width:'70%'}} src={require('../assets/img/dash_caseImg.png')}/>
                    <img className="caseMask" style={{width:'70%'}} src={require('../assets/img/Rectangle.png')}/>
                    <img className="lookIcon" src={require('../assets/img/ShapeCopy@3x.png')}/>
                  </Link>                  <div className='caseContainer'>
                    <div>
                      <div style={{fontSize:'1em',color:'#333333'}}>那小子必须死联谊</div>
                      <div style={{fontSize:'0.8em',color:'#999999'}}>社交联谊</div>
                    </div>
                    <div className='signContainer'>
                      <div>App</div>
                      <div>H5</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} style={{marginTop:40}}>
                  <Link to={{pathname:'caseDetail',query:{type:'hso'}}} className="caseImgContainer">
                    <img className="caseImg" style={{width:'70%'}} src={require('../assets/img/yunyingguanlipingtai.png')}/>
                    <img className="caseMask" style={{width:'70%'}} src={require('../assets/img/Rectangle.png')}/>
                    <img className="lookIcon" src={require('../assets/img/ShapeCopy@3x.png')}/>
                  </Link>                  <div className='caseContainer'>
                    <div>
                      <div style={{fontSize:'1em',color:'#333333'}}>HSO运营管理后台</div>
                      <div style={{fontSize:'0.8em',color:'#999999',textAlign:'left'}}>管理后台</div>
                    </div>
                    <div className='signContainer'>
                      <div>Web</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} style={{marginTop:40}}>
                  <Link to={{pathname:'caseDetail',query:{type:'qcds'}}} className="caseImgContainer">

                    <img className="caseImg" style={{width:'70%'}} src={require('../assets/img/qcds_caseImg.png')}/>
                    <img className="caseMask" style={{width:'70%'}} src={require('../assets/img/Rectangle.png')}/>
                    <img className="lookIcon" src={require('../assets/img/ShapeCopy@3x.png')}/>
                  </Link>
                  <div className='caseContainer'>
                    <div>
                      <div style={{fontSize:'1em',color:'#333333'}}>汽车大师</div>
                      <div style={{fontSize:'0.8em',color:'#999999',textAlign:'left'}}>汽车问答</div>
                    </div>
                    <div className='signContainer'>
                      <div>H5</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} style={{marginTop:40}}>
                  <Link to={{pathname:'caseDetail',query:{type:'jijiu'}}} className="caseImgContainer">
                    <img className="caseImg" style={{width:'70%'}} src={require('../assets/img/jijiu.png')}/>
                    <img className="caseMask" style={{width:'70%'}} src={require('../assets/img/Rectangle.png')}/>
                    <img className="lookIcon" src={require('../assets/img/ShapeCopy@3x.png')}/>
                  </Link>


                  <div className='caseContainer'>
                    <div>
                      <div style={{fontSize:'1em',color:'#333333'}}>急救小程序</div>
                      <div style={{fontSize:'0.8em',color:'#999999',textAlign:'left'}}>公益</div>
                    </div>
                    <div className='signContainer'>
                      <div>H5</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} style={{marginTop:40}}>
                  <Link to={{pathname:'caseDetail',query:{type:'shishicai'}}} className="caseImgContainer">
                    <img className="caseImg" style={{width:'70%'}} src={require('../assets/img/shishicai_case.png')}/>
                    <img className="caseMask" style={{width:'70%'}} src={require('../assets/img/Rectangle.png')}/>
                    <img className="lookIcon" src={require('../assets/img/ShapeCopy@3x.png')}/>
                  </Link>
                  <div className='caseContainer'>
                    <div>
                      <div style={{fontSize:'1em',color:'#333333'}}>时时彩</div>
                      <div style={{fontSize:'0.8em',color:'#999999',textAlign:'left'}}>彩票</div>
                    </div>
                    <div className='signContainer'>
                      <div>App</div>
                      <div>H5</div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} style={{marginTop:40}}>
                  <Link to={{pathname:'caseDetail',query:{type:'yingxiong'}}} className="caseImgContainer">
                    <img className="caseImg" style={{width:'70%'}} src={require('../assets/img/yingxiongxunlianying.png')}/>
                    <img className="caseMask" style={{width:'70%'}} src={require('../assets/img/Rectangle.png')}/>
                    <img className="lookIcon" src={require('../assets/img/ShapeCopy@3x.png')}/>
                  </Link>
                  <div className='caseContainer'>
                    <div>
                      <div style={{fontSize:'1em',color:'#333333'}}>英雄训练营</div>
                      <div style={{fontSize:'0.8em',color:'#999999',textAlign:'left'}}>知识付费</div>
                    </div>
                    <div className='signContainer'>
                      <div>H5</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <div className='contentDiv6'>
            <div className='homeContentTitle' style={{width:'70%',margin:'auto'}}>马上提交需求，我们会在24小时内联系您，并提供产品咨询和项目报价！</div>
            <div className='home_button' onClick={()=>{
              this.setState({
                alertViewShow:true
                })
            }} style={{marginTop:10}}>立即联系我们</div>
          </div>
          {this.state.alertViewShow && this._alertView()}
        </div>
    )
  }

  _alertView(){
    return(
        <div className={window.innerWidth > 600 ? 'alertView_bigScreen' : 'alertView_middleScreen'}>
          <div className='alertContentDiv'>
            <div style={{fontSize:15,color:'#333333'}}>您可以通过电话和邮件与我们联系</div>
            <div style={{fontSize:15,color:'#333333',marginTop:'10%'}}>电话：13520322933</div>
            <div style={{fontSize:15,color:'#333333',marginTop:'%4'}}>邮箱：xwensan@gmail.com</div>
            <div  className='home_button' style={{marginTop:'4%'}} onClick={()=>{
                this.setState({
                alertViewShow:!this.state.alertViewShow
                })
              }}>确定</div>
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

export default connect(select)(NotificationPage)