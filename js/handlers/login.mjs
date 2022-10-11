import { login } from "/js/api/auth/login.mjs";

/**
 * Stores user input as an object when form is submitted
 */

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // Send it to the API
      login(profile);
    });
  }
}
