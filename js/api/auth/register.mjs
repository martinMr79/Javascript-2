import{API_SOCIAL_URL} from "../constants.mjs";

const action = "/auth/register";
const method = "POST";



export async function register(email, name, banner, avatar, password) {
  try {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify({
      email: email, 
      name: name,      
      banner: banner, 
      avatar: avatar,
      password: password,

    });

  const response = await fetch(registerURL, {
        headers: {
            "content-Type": "application/json"
        },
        method: method,
        body: body,
    });
    
  const result = await response.json();
  alert("You are now registered")
  

} catch (error) {
  console.log(error); 
}

}