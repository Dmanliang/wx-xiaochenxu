// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_login: "登录",
    text_register: "注册",
    loading_login: false,
    loading_register: false,
  },

  // 当用户提交表单回调这个函数
  onbindsubmit: function(event) {
    console.log("username---->" + event.detail.value.username),
    console.log("passwrod---->" + event.detail.value.password)
  },

  clickRegister: function(event) {
    this.setData({
      loading_register: !this.data.loading_register,
      text_register: "Register"
    })
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