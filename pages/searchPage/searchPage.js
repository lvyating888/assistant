Page({

  /**
   * 页面的初始数据
   */
  data: {
    propA:'',
    showclose:false,
    seachval:'',
    getDataVal:"",
    houseTabnumber:'house_tab0',
    change_area:0,
    change_area_flag:0,
    change_four:0,
    checkedlis:[],
    typeOneList:[
      { "bigtitle": "物业类型", "list": [{ "data": "住宅" }, { "data": "商业" }, { "data": "别墅" }]},
      { "bigtitle": "装修", "list": [{ "data": "清水" }, { "data":"精装"}] },
      { "bigtitle": "售卖情况", "list": [{ "data": "预售" }, { "data": "在售" }, { "data":"售罄"}] }
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
      { "data": "附件", "list": 
        [{ "data": "不限" }, 
        { "data": "1公里以内" }, 
        { "data": "2公里以内" }, 
        { "data": "3公里以内" },
        { "data": "4公里以内" },
        { "data": "5公里以内" }] },
      {
        "data": "区域", "list":
          [{ "data": "全部区域" },
          { "data": "锦江区" },
          { "data": "青羊区" },
          { "data": "金牛区" },
          { "data": "武侯区" },
          { "data": "成华区" }] },
      {
        "data": "地铁", "list":
          [{ "data": "1号线","citylist":[{"data":"成渝立交"},
           {"data": "大面铺1" },
           {"data": "连山坡" },
           {"data": "界牌" },
           {"data": "成都行政学院" },
           {"data": "军区总医院" },
           {"data": "武侯立交站" },
           {"data": "武青南路站" },
           {"data": "双凤桥"},
           {"data": "龙桥路"}
          ]},
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
              ]},
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
              ]},
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
              ]},
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
              ]},
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
              ]}
    ]
  },
  /*--时实获取input的值--*/ 
  getSeachval: function (e) {
    if(e){
      this.setData({
        seachval: e.detail.seachval
      })
    }
    if (this.data.seachval !== '') {
      this.setData({
        showclose: true,
      })
    } else {
      this.setData({
        showclose: false,
      })
    }
    //console.log(this.data.seachval)
  },
  /*-- 点击确定搜索按钮事件 --*/
  getDataVal: function (e){
    var that=this;
    if(e){
      that.setData({
        getDataVal: e.detail.getDataVal
      });
    }
    console.log(this.data.getDataVal)
    if (that.data.getDataVal!=""){
      //console.log('111')
    }
  }, 
  /* 点击将值传到input */
  setval:function(e){
    this.setData({
      propA: e.currentTarget.dataset.val,
      seachval: e.currentTarget.dataset.val,
    }) 
    this.getSeachval()
  },
  _ChageNumberpop: function (e) {
    this.setData({
      houseTabnumber: e.detail.houseTabnumber
    })
  },
  _changeTypeone: function (e){
      this.setData({
        bigindex: e.detail.bigindex,
        smindex: e.detail.smindex
      });
      var bigChecked = this.data.typeOneList[this.data.bigindex].list;
      if (bigChecked[this.data.smindex].checkout == true){
        bigChecked[this.data.smindex].checkout = false;
      }else{
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
  _change_area_one: function (e){
    this.setData({
      change_area_one: e.detail.change_area_one
    });
    for (var j = 0; j < this.data.typeThreeList[this.data.change_area].list.length; j++) {
      var city_two = this.data.typeThreeList[this.data.change_area].list[j];
      city_two.checked = false;
      this.data.typeThreeList[this.data.change_area].list[this.data.change_area_one].checked=true;
    }
    this.setData({
      typeThreeList: this.data.typeThreeList
    });
  },
  change_four:function(e){
    this.setData({
      change_four: e.detail.change_four
    });
  },
  change_area_two: function (e){
    this.setData({
      change_area_two: e.detail.change_area_two
    });
   
    var city_two = this.data.typeThreeList[this.data.change_area].list[this.data.change_four];
    
    if (city_two.citylist[this.data.change_area_two].checked){
      var data = this.data.change_four + "-" + this.data.change_area_two;
      for (var i = 0; i < this.data.checkedlis.length;i++){
        if (data == this.data.checkedlis[i]){
          this.data.checkedlis.splice(i, 1)
        }
      }
      city_two.citylist[this.data.change_area_two].checked = false;
    }else{
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
  change_area: function (e){
    if(e){
      this.setData({
        change_area: e.detail.change_area,
      });
    }
    if (this.data.change_area_flag == '' || this.data.change_area_flag !== 'flag' + this.data.change_area ){
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
      change_area_flag:'flag'+this.data.change_area,
    })
    this.setData({
      typeThreeList: this.data.typeThreeList
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var i = 0; i < this.data.typeOneList.length;i++){
      var smlis = this.data.typeOneList[i].list
      for (var j = 0; j < smlis.length; j++){
        smlis[j].checkout=false;
      }
    }
    this.setData({
      typeOneList: this.data.typeOneList
    });
    for (var i = 0; i < this.data.typeTwoList.length; i++) {
      this.data.typeTwoList[i].checkout = false;
    }
    this.setData({
      typeTwoList: this.data.typeTwoList
    });
    this.change_area();
    //console.log(this.data.typeThreeList)
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})