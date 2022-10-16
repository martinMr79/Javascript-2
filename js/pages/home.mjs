import * as listeners from "./api/posts/index.mjs"





async function testTemplate() {
const posts = await postMethods.getPosts()
const post = posts.pop()
const container = document.querySelector("#posts")
   templates.renderPostTemplates(posts, container)



  }

testTemplate()

post.getPosts().then(console.log)

