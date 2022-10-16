const nameControl = document.getElementById('my-input')


nameControl.addEventListener('keyup', handleNameControlInput) 

function handleNameControlInput(event) {
    const inputValue = event.currentTarget.value.toLowerCase(); 
    const result = users.filter((user) => 
        user.firstName.toLowerCase().startsWith(inputValue), 
 );
    console.log(result);
}