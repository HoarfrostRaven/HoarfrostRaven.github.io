var posts=["2023/05/30/Brief-note-on-Data-Augmentation/","2023/05/30/Brief-note-on-Segment-Anything/","2023/05/03/Deep-Learning-BCELoss/","2023/06/06/Deep-Learning-DCGAN/","2023/05/30/Deep-learning-Convolution-and-Transposed-Convolution/","2023/06/06/Docker-学习笔记-Part-1/","2023/05/01/Git-学习笔记-Part-1/","2023/06/06/Docker-学习笔记-Part-2/","2023/05/01/Git-学习笔记-Part-2/","2023/05/07/Hexo-主题项目研究-Part-1-Prerequisites/","2023/05/30/Structuring-Your-Project/","2023/05/08/Hexo-主题项目研究-Part-2-layout/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};