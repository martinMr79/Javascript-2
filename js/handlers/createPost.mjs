import { createPost } from "../api/posts/index.mjs";

/**
 * Stores user input as an object when form is submitted
 */

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // Send it to the API
      createPost(post);
    });
  }
}

//remember to add url to media input when filling out form 