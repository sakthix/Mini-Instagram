const posts = [
    {
      name: "SANKAR_G",
      username: "thesankarg",
      location: "Nagerkovil",
      avatar: "img/sankar dp.jpg",
      post: "img/sankar post.jpg",
      comment: "Exactly. I mean if it's a joke it's a really silly one..!",
      likes: 210,
    },
    {
      name: "sakthix",
      username: "Luckey_smiler_",
      location: "tenkasi",
      avatar: "img/sakthi dp.jpg",
      post: "img/sakthi post-1.jpg",
      comment: "Now, can we go back to some basics? Absolute mewling!!!!!!",
      likes: 45,
    },
    {
        name: "Maris",
        username: "far_maris.03",
        location: "chennai",
        avatar: "img/maris-dp.jpg",
        post: "img/maris-post.jpg",
        comment: "Exactly. I mean if it's a joke it's a really silly one..!",
        likes: 210,
    },
  ];

  function mainSectionFunction(){
    posts.forEach((posts)=>{
      document.getElementById('main-section').innerHTML +=
      `
      <section class="post-section">
          <div class="user-details">
              <img src="${posts.avatar}" alt="">
                <div class="user-description">
                    <h3> ${posts.name}</h3>
                      <p>${posts.location}</p>
                </div>
          </div>
          <img class="post-img" src="${posts.post}" alt="">
          <div class="user-interaction">
              <img src="img/icon-heart.png" alt="">
              <img src="img/icon-comment.png" alt="">
              <img src="img/icon-dm.png" alt="">
          </div>
          <h4 class="likes">${posts.likes} Likes</h4>
          <p class="comment"><span> ${posts.username}</span> &nbsp;${posts.comment}</p>
          </section>
      `
    });
  }

  mainSectionFunction();