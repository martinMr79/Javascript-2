import{API_SOCIAL_URL} from "../constants.mjs";

const action = "/auth/register";
const method = "POST";



export async function register(name, email, password, ) {
  try {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify({
      email: email, 
      password: password,  
      name: name,
          
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