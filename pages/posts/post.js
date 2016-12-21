Page({
  data:{
    posts_key:{}
  },
  process:function(){

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var posts_content=[
      {
      date:"sep 19 2016",
      title:"正式虾肥蟹壮时",
      author_img:"/images/avatar/1.png",
      post_img:"/images/post/crab.png",
      content:"库克在评论中就可再生能源和税务改革以及知识产权改革等问题表达了他的看法",
      view_num:"112",
      collect_num:"96"
      },
      {
      date:"sep 19 2016",
      title:"正式虾肥蟹壮时",
      author_img:"/images/avatar/1.png",
      post_img:"/images/post/cat.png",
      content:"库克在评论中就可再生能源和税务改革以及知识产权改革等问题表达了他的看法",
      view_num:"112",
      collect_num:"96"
      }
    ]
      
    this.setData({posts_key:posts_content})
    console.log("onload")
  },
  onReady:function(){
    // 页面渲染完成
    console.log("onReady")
  },
  onShow:function(){
    // 页面显示
    console.log("onShow")
  },
  onHide:function(){
    // 页面隐藏
    console.log("onHide")
  },
  onUnload:function(){
    // 页面关闭
    console.log("onUnload")
  }
})