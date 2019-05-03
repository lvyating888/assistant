// pages/checkIn/checkRegister/checkRegister.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serc:[
      "../images/add.jpg","../images/add.jpg"
    ],
    floor_data:[
      {"id":"1","companyname":"天来汇景一区1"},
      { "id": "2", "companyname": "天来汇景一区2" },
      { "id": "3", "companyname": "天来汇景一区3" },
      { "id": "4", "companyname": "天来汇景一区4" },
      { "id": "5", "companyname": "天来汇景一区" },
      { "id": "6", "companyname": "天来汇景一区" },
      { "id": "7", "companyname": "天来汇景一区" },
      { "id": "8", "companyname": "天来汇景一区" }
    ],
    popflag:false,
    dataOther:false,
    compIndex_flag:'',
    compIndex:"",
    change_comp:"",
    close_btn_falg:false
  },
  onReady: function () {
    //获得popup组件
    this.registerPop = this.selectComponent("#registerPop");
  },
  showpop(){
    this.setData({
      popflag:true
    })
  },
  hidepopfun() {
    this.setData({
      popflag: false
    })
  },
  show_othercomp(){
    this.setData({
      popflag: false,
      dataOther:true,
    })
  },
  hide_close_btn(){
    for (var i = 0; i < this.data.floor_data.length; i++) {
      this.data.floor_data[i].checked = false;
    }
    this.setData({
      change_comp: "",
      close_btn_falg: false,
      floor_data:this.data.floor_data
    })
  },
  _changeComp: function (e) {
    this.setData({
      compIndex: e.detail.index,
      
    });
    if (this.data.compIndex !== "" && this.data.compIndex_flag === this.data.compIndex){
      this.data.floor_data[this.data.compIndex].checked = false;
    }else{
      for (var i = 0; i < this.data.floor_data.length; i++) {
        this.data.floor_data[i].checked = false;
      }
      this.data.floor_data[this.data.compIndex].checked = true;
    }
    this.setData({
      floor_data: this.data.floor_data,
      compIndex_flag: e.detail.index,
      change_comp: this.data.floor_data[this.data.compIndex].companyname,
      close_btn_falg: this.data.floor_data[this.data.compIndex].companyname!==''? true:false,
    })
    this.hidepopfun();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      for(var i=0;i<this.data.floor_data.length;i++){
        this.data.floor_data[i].checked=false;
      }
      this.setData({
        floor_data: this.data.floor_data,
      })
  },
 test:function(e){
   var id = e.target.id;
   var that=this;
   var serc = that.data.serc
   wx.chooseImage({
     count: 1,
     sizeType: ['original', 'compressed'],
     sourceType: ['album', 'camera'],
     success(res) {
        
       // tempFilePath可以作为img标签的src属性显示图片
       serc[id] = res.tempFilePaths[0]
       
       that.setData({
         serc: serc
       })
       
     }
   })
 },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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