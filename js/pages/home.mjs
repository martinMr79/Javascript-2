import * as listeners from "./api/posts/index.mjs"


function router() {
    const path = location.pathname;
  
    switch (path) {
      case '/profile/login/index.html':
        listeners.setLoginFormListener()
        return;
      case '/profile/register/index.html':
        listeners.setRegisterFormListener()
        return;
      case '/post/create/index.html':
        listeners.setCreatePostFormListener()
        return;
      case '/post/edit/index.html':
        listeners.setUpdatePostListener()
        return;
      case '/profile/edit/index.html':
        listeners.setUpdateProfileListener()
        return;
    }
  }


async function testTemplate() {
const posts = await postMethods.getPosts()
const post = posts.pop()
const container = document.querySelector("#posts")
   templates.renderPostTemplates(posts, container)



  }

testTemplate()

post.getPosts().then(console.log)


 //  for (let i = 0; i < Posts.length; i++) {
 //   posts.innerHTML += `<P>fdfdfdf</p>`
 //  }