Component({  
  data: {
    seachval: '',
    
  },
  // 父组件传值
  properties: {
    propA: {
      type: String
    },
    showclose:{
      type:Boolean
    }
  }
  , methods: {
      /*--清空input事件--*/
      clearInput: function (res) {
        this.setData({
          seachval: '',
          propA:'',
          showclose: false,
        });
      }, 
      // 搜索值
      getSeachval: function (e) {
          var val = e.detail.value;
          this.setData({
            seachval: val
          });
          // console.log(this.data.seachval)
          this.triggerEvent('getSeachval', { seachval: this.data.seachval });
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