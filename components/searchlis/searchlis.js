Component({  
  data: {
    seachval: '',
  },
  // 父组件传值
  properties: {
    propA: {
      type: String
    }
  }
  , methods: {
      
      // 搜索值
      getSeachval: function (e) {
        wx.navigateTo({
          url: '/pages/searchPage/searchPage',
        })
      },
      /*搜索事件*/
      getSeachData:function(e){
        this.triggerEvent('getDataVal', { getDataVal: this.data.seachval });
      } 
    },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    
    
  },
  
})