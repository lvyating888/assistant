//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bigurl: app.bigurl,
    /*-- 页码 --*/ 
    page:1,
    hasMore: true,
    load: true,
    nodate: false,
    /*-- 分页end --*/
    floorstatus:false,
    /*--返回顶部--*/  
    bannerUrl: [
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
    searchall:false,
    searcharea:false,
    /*--  搜索条件 --*/
    houseTabnumber: 'house_tab0',
    change_area: 0,
    change_area_flag: 0,
    change_four: 0,
    checkedlis: [],
    typeOneList: [
      { "bigtitle": "物业类型", "list": [{ "data": "住宅" }, { "data": "商业" }, { "data": "别墅" }] },
      { "bigtitle": "装修", "list": [{ "data": "清水" }, { "data": "精装" }] },
      { "bigtitle": "售卖情况", "list": [{ "data": "预售" }, { "data": "在售" }, { "data": "售罄" }] }
    ],
    typeTwoList: [
      { "data": "不限" },
      { "data": "6000元以下/m²" },
      { "data": "6000-8000元/m²" },
      { "data": "8000-10000元/m²" },
      { "data": "10000-15000元/m²" },
      { "data": "15000-20000元/m²" },
      { "data": "20000元以上/m²" }
    ],
    typeThreeList: [
      {
        "data": "附件", "list":
          [{ "data": "不限" },
          { "data": "1公里以内" },
          { "data": "2公里以内" },
          { "data": "3公里以内" },
          { "data": "4公里以内" },
          { "data": "5公里以内" }]
      },
      {
        "data": "区域", "list":
          [{ "data": "全部区域" },
          { "data": "锦江区" },
          { "data": "青羊区" },
          { "data": "金牛区" },
          { "data": "武侯区" },
          { "data": "成华区" }]
      },
      {
        "data": "地铁", "list":
          [{
            "data": "1号线", "citylist": [{ "data": "成渝立交" },
            { "data": "大面铺1" },
            { "data": "连山坡" },
            { "data": "界牌" },
            { "data": "成都行政学院" },
            { "data": "军区总医院" },
            { "data": "武侯立交站" },
            { "data": "武青南路站" },
            { "data": "双凤桥" },
            { "data": "龙桥路" }
            ]
          },
          {
            "data": "2号线", "citylist": [{ "data": "成渝立交" },
            { "data": "大面铺2" },
            { "data": "连山坡" },
            { "data": "界牌" },
            { "data": "成都行政学院" },
            { "data": "军区总医院" },
            { "data": "武侯立交站" },
            { "data": "武青南路站" },
            { "data": "双凤桥" },
            { "data": "龙桥路" }
            ]
          },
          {
            "data": "3号线", "citylist": [{ "data": "成渝立交" },
            { "data": "大面铺3" },
            { "data": "连山坡" },
            { "data": "界牌" },
            { "data": "成都行政学院" },
            { "data": "军区总医院" },
            { "data": "武侯立交站" },
            { "data": "武青南路站" },
            { "data": "双凤桥" },
            { "data": "龙桥路" }
            ]
          },
          {
            "data": "4号线", "citylist": [{ "data": "成渝立交" },
            { "data": "大面铺4" },
            { "data": "连山坡" },
            { "data": "界牌" },
            { "data": "成都行政学院" },
            { "data": "军区总医院" },
            { "data": "武侯立交站" },
            { "data": "武青南路站" },
            { "data": "双凤桥" },
            { "data": "龙桥路" }
            ]
          },
          {
            "data": "5号线", "citylist": [{ "data": "成渝立交" },
            { "data": "大面铺5" },
            { "data": "连山坡" },
            { "data": "界牌" },
            { "data": "成都行政学院" },
            { "data": "军区总医院" },
            { "data": "武侯立交站" },
            { "data": "武青南路站" },
            { "data": "双凤桥" },
            { "data": "龙桥路" }
            ]
          },
          {
            "data": "6号线", "citylist": [{ "data": "成渝立交" },
            { "data": "大面铺6" },
            { "data": "连山坡" },
            { "data": "界牌" },
            { "data": "成都行政学院" },
            { "data": "军区总医院" },
            { "data": "武侯立交站" },
            { "data": "武青南路站" },
            { "data": "双凤桥" },
            { "data": "龙桥路" }
            ]
          }
          ]
      }
    ],
    /*--  搜索条件end --*/
  },
  /*-- 返回顶部 --*/ 
  goTop(){}, 
  onPageScroll:function(e){
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  /*-- 返回顶部end --*/
  /*-- 搜索条件方法 --*/
  _changeTypeone: function (e) {
    this.setData({
      bigindex: e.detail.bigindex,
      smindex: e.detail.smindex
    });
    var bigChecked = this.data.typeOneList[this.data.bigindex].list;
    if (bigChecked[this.data.smindex].checkout == true) {
      bigChecked[this.data.smindex].checkout = false;
    } else {
      for (var j = 0; j < bigChecked.length; j++) {
        bigChecked[j].checkout = false;
      }
      bigChecked[this.data.smindex].checkout = true;
    }
    this.setData({
      typeOneList: this.data.typeOneList
    });
  },
  _changeTypeTwo: function (e) {
    this.setData({
      change_two: e.detail.change_two
    });
    var bigchange_two = this.data.typeTwoList[this.data.change_two];
    if (bigchange_two.checkout == true) {
      bigchange_two.checkout = false;
    } else {
      for (var i = 0; i < this.data.typeTwoList.length; i++) {
        this.data.typeTwoList[i].checkout = false;
      }
      bigchange_two.checkout = true;
    }
    this.setData({
      typeTwoList: this.data.typeTwoList
    });
    //console.log(this.data.typeTwoList)
  },
  _change_area_one: function (e) {
    this.setData({
      change_area_one: e.detail.change_area_one
    });
    for (var j = 0; j < this.data.typeThreeList[this.data.change_area].list.length; j++) {
      var city_two = this.data.typeThreeList[this.data.change_area].list[j];
      city_two.checked = false;
      this.data.typeThreeList[this.data.change_area].list[this.data.change_area_one].checked = true;
    }
    this.setData({
      typeThreeList: this.data.typeThreeList
    });
  },
  change_four: function (e) {
    this.setData({
      change_four: e.detail.change_four
    });
  },
  change_area_two: function (e) {
    this.setData({
      change_area_two: e.detail.change_area_two
    });

    var city_two = this.data.typeThreeList[this.data.change_area].list[this.data.change_four];

    if (city_two.citylist[this.data.change_area_two].checked) {
      var data = this.data.change_four + "-" + this.data.change_area_two;
      for (var i = 0; i < this.data.checkedlis.length; i++) {
        if (data == this.data.checkedlis[i]) {
          this.data.checkedlis.splice(i, 1)
        }
      }
      city_two.citylist[this.data.change_area_two].checked = false;
    } else {
      this.data.checkedlis.push(
        this.data.change_four + "-" + this.data.change_area_two
      )
      city_two.citylist[this.data.change_area_two].checked = true;
    }
    this.setData({
      checkedlis: this.data.checkedlis,
      typeThreeList: this.data.typeThreeList
    });
    // console.log(this.data.checkedlis)
  },
  change_area: function (e) {
    if (e) {
      this.setData({
        change_area: e.detail.change_area,
      });
    }
    if (this.data.change_area_flag == '' || this.data.change_area_flag !== 'flag' + this.data.change_area) {
      for (var i = 0; i < this.data.typeThreeList.length; i++) {
        if (i !== this.data.typeThreeList.length - 1) {
          for (var j = 0; j < this.data.typeThreeList[i].list.length; j++) {
            var city_two = this.data.typeThreeList[i].list[j];
            city_two.checked = false;
          }
        } else {
          for (var j = 0; j < this.data.typeThreeList[i].list.length; j++) {
            var city_two = this.data.typeThreeList[i].list[j];
            for (var h = 0; h < city_two.citylist.length; h++) {
              city_two.citylist[h].checked = false;
            }
          }
        }
      }
    }
    this.setData({
      change_area_flag: 'flag' + this.data.change_area,
    })
    this.setData({
      typeThreeList: this.data.typeThreeList
    });
  }, 
  page: function (index,id){
    var that = this;
    index = index ? index : that.data.page;
    if (!that.data.hasMore) {
      return;
    }
    wx.request({
      url: that.data.bigurl + "/fang/popular.json",
      method: 'post',
      header: {
        'Cookie': `JSESSIONID=${app.globalData.sessionId};`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        'available':id,
        'pageNowaday':index},
      success: function (res) {
        var data = res.data;
        if (data.popular.dataDetails.length == 0) {
          //暂无数据
          that.setData({
            nodate: true,
            load: false
          })
        } else {
          that.setData({
            nodate: false
          })
          for (var i = 0; i < data.popular.dataDetails.length; i++) {
            if (data.popular.dataDetails[i].characteristics != '') {
              data.popular.dataDetails[i].characlis = data.popular.dataDetails[i].characteristics.split(' ')
            }
          }
          /*-- 判断分页或是否分页 --*/ 
          if (index > 1) {
            if (data.popular.pageNowaday == data.popular.pageTotal) {
              that.setData({
                hasMore: false,
                load: false
              })
            } else {
              that.setData({
                load: true
              })
            }
            that.data.rmdata.dataDetails = that.data.rmdata.dataDetails.concat(data.popular.dataDetails);
          }else if(data.popular.pageTotal==1){
            that.setData({
              rmdata: data.popular,
              hasMore: false,
              load: false
            })
          }else{
            that.setData({
              rmdata: data.popular,
            })
          }
          /*-- 判断分页或是否分页end --*/
          that.setData({
            rmdata: that.data.rmdata,
            nodate: false,
          })
          console.log(that.data.rmdata)

        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    for (var i = 0; i < that.data.typeOneList.length; i++) {
      var smlis = that.data.typeOneList[i].list
      for (var j = 0; j < smlis.length; j++) {
        smlis[j].checkout = false;
      }
    }
    that.setData({
      typeOneList: that.data.typeOneList
    });
    for (var i = 0; i < that.data.typeTwoList.length; i++) {
      that.data.typeTwoList[i].checkout = false;
    }
    that.setData({
      typeTwoList: that.data.typeTwoList
    });
    that.change_area();

    that.setData({
      id: options.id ? options.id:0,
      type: options.type ? options.type:''
    })
    wx.setNavigationBarTitle({
      title: options.title ? options.title:'',
    });
    // console.log(this.data.type)
    if (this.data.type=='all'){
      this.setData({
        searchall:true
      })
    } else if (this.data.type == 'area'){
      this.setData({
        searcharea: true
      })
    }
    /*-- 加载第一页数据 --*/
    that.page(1,this.data.id)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    that.data.page++;
    if (!that.data.hasMore) {
      return;
    }
    this.page(that.data.page, this.data.id)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})