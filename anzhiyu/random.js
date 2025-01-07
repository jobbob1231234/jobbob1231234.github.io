var posts=["2025/01/07/hello-world/","2025/01/07/mytest/","2025/01/07/mytest1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };