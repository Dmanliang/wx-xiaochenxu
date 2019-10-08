// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageUrl: ["http://img.kaiyanapp.com/4c223bf6756ed7185a36578739548443.jpeg?imageMogr2/quality/60/format/jpg",
      "http://img.kaiyanapp.com/74de057be52356ef10ea6e9ce8e3604f.jpeg?imageMogr2/quality/60/format/jpg",
      "http://img.kaiyanapp.com/117ee8871128660a9776997eee3e2c77.jpeg?imageMogr2/quality/60/format/jpg",
      "http://img.kaiyanapp.com/7050f9ee1b5a562bfb49023c07da8344.jpeg?imageMogr2/quality/60/format/jpg",
      "http://img.kaiyanapp.com/e2a9c5e7de30492c7121b6123af0e471.jpeg?imageMogr2/quality/60/format/jpg",
      "http://img.kaiyanapp.com/f064c00a2a23e5ee3ff71a4fb74e033d.jpeg?imageMogr2/quality/60/format/jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    circular:true,
    interval: 2000,
    duration: 1000
  },

  clickItem :function(event){
    console.log("--------------->"+event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})