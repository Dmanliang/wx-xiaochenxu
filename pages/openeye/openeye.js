// pages/openeye/openeye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsData: [{
        "id": 55172,
        "title": "好好的自行车公路赛为何演变成这样？",
        "slogan": "这位老兄，你骑跑偏了知道吗？",
        "description": "看 Vittorio Brumotti 在意大利小镇利维尼奥撒个野。花式骑车很精彩，可好担心他找不到回家的路啊！From Tinkoff Team",
        "image": "http://img.kaiyanapp.com/4c223bf6756ed7185a36578739548443.jpeg?imageMogr2/quality/60/format/jpg",
        "icon": "http://img.kaiyanapp.com/fa20228bc5b921e837156923a58713f6.png"
      },
      {
        "id": 57039,
        "title": "来自美国太空旅行的花样死法",
        "slogan": "宇航员是一项危险的职业！",
        "description": "这支趣味短片来自美国明尼苏达州的 MAKE 工作室，给我们带来了宇航员的「危险生活」，一言不合就上天…… From makevisual",
        "image": "http://img.kaiyanapp.com/74de057be52356ef10ea6e9ce8e3604f.jpeg?imageMogr2/quality/60/format/jpg",
        "icon": "http://img.kaiyanapp.com/fa20228bc5b921e837156923a58713f6.png"
      },
      {
        "id": 14336,
        "title": "魔术解密：关于小球的 7 种技巧",
        "slogan": "人人都是魔术师，你学会了吗？",
        "description": "这期 Evan Era 给我们传授了 7 个常见的魔术技巧，想知道魔术师是怎么做到的吗？一起来学习一下吧！From EvanEraTV\n",
        "image": "http://img.kaiyanapp.com/117ee8871128660a9776997eee3e2c77.jpeg?imageMogr2/quality/60/format/jpg",
        "icon": "http://img.kaiyanapp.com/fa20228bc5b921e837156923a58713f6.png"
      },
      {
        "id": 56817,
        "title": "Friday night！一起放松一下 ",
        "slogan": "原来十根手指可以做出这么多变化",
        "description": "终于可以离开办公室，享受美好的周末夜晚。不过再精彩的夜生活也吸引不了我，因为我的注意力从头到尾全放在他手上！还是第一次知道，原来十只手指头可以做出这么多种变化……",
        "image": "http://img.kaiyanapp.com/7050f9ee1b5a562bfb49023c07da8344.jpeg?imageMogr2/quality/60/format/jpg",
        "icon": "http://img.kaiyanapp.com/fa20228bc5b921e837156923a58713f6.png"
      },
      {
        "id": 57256,
        "title": "创意拼贴 MV：「尚未出世的死亡与生命」",
        "slogan": "成长就是这样，混混沌沌却也惊喜常常",
        "description": "葡萄牙女歌手 Paula Cavalciuk「Morte E Vida Uterina」的 MV 讲述了一个正在走向成熟的女孩的不知所措，但面对成人世界，她必须找到内心的力量。From Daniel Bruson",
        "image": "http://img.kaiyanapp.com/e2a9c5e7de30492c7121b6123af0e471.jpeg?imageMogr2/quality/60/format/jpg",
        "icon": "http://img.kaiyanapp.com/fa20228bc5b921e837156923a58713f6.png"
      },
      {
        "title": "看法国滑翔伞大师玩转天空",
        "slogan": "这才是真正的「放飞自我」",
        "description": "Jean 是有十多年经验的法国滑翔伞专家，他飞跃了葡萄牙、法国与南非，拍摄而成这条短片，为的就是要「让所有人都能体验到飞行的自由」。 BGM 来自瑞典民谣组合 First Aid Kit 的「My Silver Lining」。From Jean-Baptiste CHANDELIER",
        "image": "http://img.kaiyanapp.com/f064c00a2a23e5ee3ff71a4fb74e033d.jpeg?imageMogr2/quality/60/format/jpg",
        "icon": "http://img.kaiyanapp.com/fa20228bc5b921e837156923a58713f6.png"
      }
    ]
  },
  
  btnItemAction:function(e){
    var title = e.currentTarget.dataset.pid;
    var indf = e.currentTarget.dataset.indd;
    // wx.showToast({
    //   title: titles,
    // })
    console.log(title)
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