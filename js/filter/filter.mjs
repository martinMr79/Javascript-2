const users = [{

    id: 0, 
    firstName: "Ola",

    id: 1,
    firstName: "Kari",
},
{
    id: 2, 
    firstName: "Ole",
},
{
    id: 3, 
    firstName: "Lily", 
},
{
    id: 4,
    firstName: "mona"
}

];  

const nameControl = document.getElementById('my-input')


nameControl.addEventListener('keyup', handleNameControlInput) 

function handleNameControlInput(event) {
    const inputValue = event.currentTarget.value.toLowerCase(); 
    const result = users.filter((user) => 
        user.firstName.toLowerCase().startsWith(inputValue), 
 );
    console.log(result);
}