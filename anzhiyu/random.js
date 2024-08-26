var posts=["2024/08/24/hello-world/","2024/08/24/编程笔记——C/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };