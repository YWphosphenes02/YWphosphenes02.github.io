var posts=["2024/08/12/GitHub Pages托管启用方法/","2024/08/02/假如在春天，一个旅人/","2024/07/25/编程笔记——C/","2024/08/13/个人Blog框架介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };