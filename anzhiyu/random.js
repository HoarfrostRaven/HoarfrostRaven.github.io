var posts=["2023/05/30/Structuring-Your-Project/","2023/05/01/Git 学习笔记/","2023/05/03/PyTorch-深度学习——nn-BCELoss/","2023/05/23/hello-world/","2023/05/07/学习设计-Hexo-主题（1）—— Prerequisites/","2023/05/30/深度学习——Data-Augmentation/","2023/05/30/深度学习——Segment-Anything-笔记/","2023/05/30/深度学习——卷积与转置卷积/","2023/05/08/学习设计-Hexo-主题（2）——layout/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};