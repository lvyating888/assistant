Component({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    typelis_flag:'',
    typelis_flaglis:'',
    typelis_city:0,
    change_four:0,
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        "id": 111,
        "name": "价格不限"
      },
      {
        "id": 123,
        "name": "价格由高到低"
      },
      {
        "id": 333,
        "name": "价格由低到高"
      },
      
    ]
  },
  // 父组件传值
  properties: {
    typeOne: {
      type: Array
    },
    typeTwoList:{
      type: Array
    },
    typeThreeList:{
      type: Array
    },
    areafalg:{
      type:Boolean
    }
  },
  methods: {

    /*
      * 内部私有方法建议以下划线开头
      * triggerEvent 用于触发事件
      */
    change: function (e) {
      this.setData({
        bigindex: e.currentTarget.dataset.bigindex,
        smindex: e.currentTarget.dataset.smindex,
      })
      this.triggerEvent('changeTypeone', 
        {
          bigindex: this.data.bigindex,
          smindex: this.data.smindex, 
          }
        );
    },
    change_tab: function (e) {
      if (this.data.typelis_flaglis == e.currentTarget.dataset.typelis_flag || !e.currentTarget.dataset.typelis_flag){
        this.setData({
          typelis_flag:'',
          typelis_flaglis: '',
        })
      }else{
        this.setData({
          typelis_flag: e.currentTarget.dataset.typelis_flag,
          typelis_flaglis: e.currentTarget.dataset.typelis_flag,
        })
      }
    },
    change_two: function (e) {
      this.setData({
        change_two: e.currentTarget.dataset.change_two,
      })
      this.triggerEvent('changeTypeTwo',
        {
          change_two: this.data.change_two,
        }
      );
    },
    change_three: function (e) {
      this.setData({
        typelis_city: e.currentTarget.dataset.typelis_city,
      })
      this.triggerEvent('change_area',
        {
          change_area: this.data.typelis_city,
        }
      );
    },
    change_four:function(e){
      this.setData({
        change_four: e.currentTarget.dataset.change_four,
      })
      this.triggerEvent('change_four',
        {
          change_four: this.data.change_four,
        }
      );
    },
    change_area_one: function (e) {
      this.setData({
        change_area_one: e.currentTarget.dataset.change_area_one,
      })
      this.triggerEvent('change_area_one',
        {
          change_area_one: this.data.change_area_one,
        }
      );
    },
    change_area_two: function (e) {
      this.setData({
        change_area_two: e.currentTarget.dataset.change_area_two,
      })
      this.triggerEvent('change_area_two',
        {
          change_area_two: this.data.change_area_two,
        }
      );
    },
    bindPickerChange: function (e) {
      var id = this.data.objectArray[e.detail.value].id
      this.setData({
        select_index: e.detail.value,
        select_id: id
      })
      console.log(id,this.data.objectArray[e.detail.value].name)
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