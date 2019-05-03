Component({

  /**
   * 页面的初始数据
   */
  // 父组件传值
  properties: {
    follow: {
      type: Boolean
    }
  },
  data: {
    houseTabnumber:'house_tab0',
  },
  methods: {
    
    /*
      * 内部私有方法建议以下划线开头
      * triggerEvent 用于触发事件
      */
    change: function (e) {
      this.setData({
        houseTabnumber:e.currentTarget.dataset.number,
      })
      this.triggerEvent('ChageNumberpop', { houseTabnumber: this.data.houseTabnumber });
    } 
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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