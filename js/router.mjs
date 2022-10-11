import * as listeners from "./handlers/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case '/profile/login/':
      listeners.setLoginFormListener()
      return;
    case '/profile/register/':
      listeners.setRegisterFormListener()
      return;
    case '/post/create/':
      listeners.setCreatePostFormListener()
      return;
    case '/post/edit/':
      listeners.setUpdatePostListener()
      return;
    case '/profile/edit/':
      listeners.setUpdateProfileListener()
      return;
  }
}



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