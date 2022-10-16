import { register } from "../api/auth/register.mjs";

/**
 * Stores user input as an object when form is submitted
 */

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", handleSubmit)
  }
}


async function handleSubmit(evt) {
  evt.preventDefault()
  const form = evt.target;
  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries()) 

  const email = profile["email"];
  const password = profile["password"];

  if (email && password) {
    const result = await register(email, password)
    //location.href = "/posts/index.html";
   
  }

}