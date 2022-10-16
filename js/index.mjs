//import router from  "./router.mjs";

import * as listeners from "./handlers/index.mjs";

//router();

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/index.html") {
  listeners.setLoginFormListener();
} else if (path === "/profile/register/index.html") {
  listeners.setRegisterFormListener();
}
//else if (path === "/post/create/index.html") {
//  listeners.setCreatePostFormListener();
//}
else if (path === "/post/edit/index.html") {
  listeners.setUpdatePostListener();
  post.updatePost()
} else if (path === "/profile/edit/index.html") {
  listeners.setUpdateProfileListener();
} else if (path === "/posts/index.html") {
  listeners.setCreatePostFormListener();
  displayPosts();
  post.createPost();
}

async function displayPosts() {
  const posts = await postMethods.getPosts();
  //const post = posts.pop();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

//post.removePost()
//post.updatePost()
//post.getPost()
// post.getPosts().then(console.log);
