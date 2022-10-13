import * as listeners from "./handlers/index.mjs";
import { removePost } from "./api/posts/delete.mjs"
import * as post from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

export default function router() {
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



//removePost(5960)
post.getPosts().then(console.log)
post.getPost(1).then(console.log) 
//*************************//

//if (path === "/profile/login/index.html") {
  //listeners.setLoginFormListener();
//} else if (path === "/profile/register/index.html") {
  //listeners.setRegisterFormListener();
//} else if ( path === "/post/create/index.html") {
 // listeners.setCreatePostFormListener()
//} else if (path === "/post/edit/index.html") {
 // listeners.setUpdatePostListener()
//} else if (path ==="/profile/edit/index.html") {
//  listeners.setUpdateProfileListener()
//}


async function testTemplate() {
    const posts = await postMethods.getPosts()
     const post = posts.pop()
    const container = document.querySelector("#posts")
    templates.renderPostTemplates(posts, container)
}

testTemplate()