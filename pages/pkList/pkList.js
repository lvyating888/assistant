// pages/pkList/pkList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: '1', title: '1号房1号房1号房1号房1号房1号房1号房1号房1号房1号房1号房1号房',cdate:'2018-11-11' ,area:'高新区'},
      { name: '2', title: '1号房', cdate: '2018-11-11', area: '高新区' },
      { name: '3', title: '1号房', cdate: '2018-11-11', area: '高新区' },
      { name: '4', title: '1号房', cdate: '2018-11-11', area: '高新区' },
      { name: '5', title: '1号房', cdate: '2018-11-11', area: '高新区'  },
      { name: '6', title: '1号房', cdate: '2018-11-11', area: '高新区' },
      { name: '7', title: '1号房', cdate: '2018-11-11', area: '高新区'},
    ] ,
    arrli:[]
  },

  //设置checbox最多被选中三个  
  checkboxChange: function (e) {
    var value = e.currentTarget.dataset.value;
    var index = e.currentTarget.dataset.index
    if (this.data.items[e.currentTarget.dataset.index].checked){
      for (var i = 0; i < this.data.arrli.length; i++) {
        if (value == this.data.arrli[i].value) {
          this.data.arrli.splice(i, 1)
        }
      }
      this.data.items[index].checked = false;
    }else{
      if (this.data.arrli.length<2){
        this.data.arrli.push({ value: value});
        this.data.items[index].checked = true;
      }else{
        wx.showToast({
          title: '只能添加两个',
          duration: 2000,
          icon: 'none'
        })
      } 
    }
    this.setData({
      items:this.data.items,
      arrli: this.data.arrli
    });
    console.log(this.data.arrli.length)
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //新建数组全部设置为没被选中  
    for (var i = 0; i < this.data.items.length; i++) {
      this.data.items[i].checked = false;
    }
    this.setData({
      items: this.data.items,
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