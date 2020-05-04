
$(_ => {
    //Contact Form
    const form = document.querySelector("form");
    const name = document.getElementById("form-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const feedbackDiv = document.getElementById("feedback");
    
    form.addEventListener("submit", element => {
        element.preventDefault();
        DisplayMessage();
        //Clearing Form Entries
        name.value ="";
        email.value ="";
        phone.value ="";
    });
    function DisplayMessage(){
        //Deleting div container contents
        feedbackDiv.innerHTML = "";
        //Creating and appending message
        let h1 = document.createElement("h1");
        h1.innerText = "Thank you for your message!";
        feedbackDiv.append(h1);
    }
    //End
});
    
    
    
    