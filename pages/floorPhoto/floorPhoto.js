// pages/floorPhoto/floorPhoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabArry:[{
      id:"1",title:"效果图",number:5,imgs:[
        'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
        'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg'
      ]
    },{
        id: "2", title: "实景图", number: 5, imgs: [
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg'
        ]
    },{
        id: "3", title: "交通图", number: 5, imgs: [
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg'
        ]
      }, {
        id: "4", title: "配套图", number: 5, imgs: [
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg'
        ]
      }, {
        id: "5", title: "户型图", number: 5, imgs: [
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg',
          'https://www.71big.com/heqing/zhaojingwang/common/images/banner1.jpg'
        ]
      }],
      tab_number:0,
  },
  //图片点击事件
  imgYu: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeTab_lis: function (e) {
    this.setData({
      tab_number: e.detail.number
    })
    // console.log(this.data.tab_number)
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