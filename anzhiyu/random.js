var posts=["2023/05/30/Brief-note-on-Data-Augmentation/","2023/05/30/Brief-note-on-Segment-Anything/","2023/07/19/Brief-note-on-heic-to-jpg/","2023/06/29/C-Collections/","2023/06/25/C-Concepts-for-OOP/","2023/06/18/C-Reference-Pointer-and-Array/","2023/06/16/ChatGPT-Prompt-Engineering-for-Developers/","2023/06/14/Computer-Network-Intro/","2023/06/14/Computer-Network-Physical-Layer/","2023/05/03/Deep-Learning-BCELoss/","2023/06/06/Deep-Learning-DCGAN/","2023/06/09/Deep-Learning-Diffusion-Models-Part-1/","2023/06/12/Deep-Learning-Diffusion-Models-Part-2/","2023/05/30/Deep-learning-Convolution-and-Transposed-Convolution/","2023/06/14/Francais-Voix-Passive/","2023/06/14/Francais-Condition-avec-Si/","2023/07/08/Game-Programming-in-C-Chapter-01-Game-Prgramming-Overview/","2023/05/07/Hexo-Theme-Project-Study-Part-1-Prerequisites/","2023/06/10/Java-Class/","2023/06/10/Java-Clean-Coding/","2023/06/14/Java-Collections/","2023/05/08/Hexo-Theme-Project-Study-Part-2-layout/","2023/06/10/Java-Control-Flow/","2023/06/10/Java-Debugging-and-Packaging-Applications/","2023/06/14/Java-Concurrency-and-Multi-threading/","2023/06/14/Java-Exceptions/","2023/06/14/Java-Generics/","2023/06/14/Java-Inheritance/","2023/06/14/Java-Excutive-Framework/","2023/06/14/Java-Interfaces/","2023/06/14/Java-Lambda-Expressions-and-Functional-Interfaces/","2023/06/14/Java-Refactoring-to-an-Object-oriented-Design/","2023/06/14/Java-Streams/","2023/06/10/Java-Types/","2023/06/14/Note-for-IELTS-Listening/","2023/06/14/Note-for-IELTS-Speaking/","2023/06/14/Note-for-IELTS-Writing-Part-1/","2023/06/14/Note-for-IELTS-Writing-Part-2/","2023/06/06/Note-on-Docker-Part-1/","2023/06/06/Note-on-Docker-Part-2/","2023/05/01/Note-on-Git-Part-1/","2023/05/01/Note-on-Git-Part-2/","2023/06/19/Note-on-Hugging-Face/","2023/06/14/Note-on-Introduction-to-Game-Design-Prototyping-and-Development/","2023/06/14/Note-on-Markdown/","2023/06/14/Note-on-Regular-Expression/","2023/06/14/Note-on-SQL/","2023/05/30/Structuring-Your-Project/","2023/06/25/To-do-List/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};