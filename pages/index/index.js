//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bigurl: app.bigurl,
    rmdatafalg:true,
    rmdata:[],
    ysdatafalg: true,
    ysdata: [],
    newdatafalg:true,
    newdata:[],    
    bannerUrl:[
      {
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      },
      {
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      },
      {
        url: 'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        linkUrl: ''
      }
    ],
    title: [
      {
        "title": "成都2019购房指南重磅上线，限量免费领取名额 "
      },
      {
        "title": "商城采购资生堂护肤用品，欢迎选购！"
      },
      {
        "title": "商城采购资生堂护肤用品，欢迎选购！"
      }
    ] ,
  },
  _hidepop() {
    this.popads.hidepop_fun();
    wx.showTabBar()
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that=this;
    //获得popup 弹出框组件判断是否显示
    that.popads = this.selectComponent("#popads");
    if (that.popads.data.show) {
      wx.hideTabBar()
    } else {
      wx.showTabBar()
    }
    /*-- 获取热门推荐数据 --*/ 
    wx.request({
      url: this.data.bigurl +"/fang/popular.json?available=1",
      method: 'post',
      header: {
        'Cookie': `JSESSIONID=${app.globalData.sessionId};`
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        if (data.popular.dataDetails.length==0){
          that.setData({
            rmdatafalg:false,
          })
        }else{
          that.setData({
            rmdatafalg:true,
            rmdata: data.popular
          })
        }
        
      }
    })
    /*-- 获取 预售推荐 数据 --*/
    wx.request({
      url: this.data.bigurl + "/fang/popular.json?available=2",
      method: 'post',
      header: {
        'Cookie': `JSESSIONID=${app.globalData.sessionId};`
      },
      success: function (res) {
        var data = res.data;
        if (data.popular.dataDetails.length == 0) {
          that.setData({
            ysdatafalg: false,
          })
        } else {
          that.setData({
            ysdatafalg: true,
            ysdata: data.popular
          })
        }
      }
    })
    /*-- 获取 最新开盘 数据 --*/
    wx.request({
      url: this.data.bigurl + "/fang/popular.json?available=3",
      method: 'post',
      header: {
        'Cookie': `JSESSIONID=${app.globalData.sessionId};`
      },
      success: function (res) {
        var data = res.data;
        if (data.popular.dataDetails.length == 0) {
          that.setData({
            newdatafalg: false,
          })
        } else {
          that.setData({
            newdatafalg: true,
            newdata: data.popular
          })
        }
        
      }
    })
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (that.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /*--跳转到热门楼盘--*/
  gormlp: function (e) {
    console.log(e)
    wx.switchTab({
      url: '/pages/buildHouse/buildHouse'
    })
  },
  /*--跳转到置业顾问--*/
  gozygw:function(e){
    console.log(e)
    wx.switchTab({
      url: '/pages/houseAdviser/houseAdviser'
    })
  } 
})
