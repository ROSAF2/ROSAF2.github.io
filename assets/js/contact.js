
$(_ => {
    //Contact Form
    document.querySelector(".button.contactPage").addEventListener("click", element => {
        element.preventDefault();
        
        let name = document.getElementById("form-name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        
        if(name !== "" && email !== "" && phone !== "" ){
            //Deleting div container contents
            document.getElementById("feedback").innerHTML = "";
            //Creating and appending message
            let h1 = document.createElement("h1");
            h1.innerText = "Thank you for your message!";
            document.getElementById("feedback").append(h1);
            //Clearing Form Entries
            document.getElementById("form-name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("phone").value ="";
         }else{
             alert("Fill all the fields.");
         }
    });
    //End
    });
    
    
    
    