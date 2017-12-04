function submitForm(){
//creating an object array
var members = [
{
  username: "matt",
  password: "Password1"
},
{
  username: "chris",
  password: "Password2"
},
{
  username: "sam",
  password: "Password3"
},
{
  username: "courtney",
  password: "Password4"
},
{
  username: "lisa",
  password: "Password5"
}
];
 //calling a function to save the userinput and run a for loop with some conditions
 
  //saving the userInput values on click of log in button
  var userName = document.getElementById('username').value;
  var userPassword = document.getElementById('password').value;
   //
  //lets run a for loop to loop through the object array
  for(var i = 0; i < members.length; i++){
    //displaying the property and value of object array in console
   // console.log(members[i]);
    //lets use if/else statement to compare the userinput with the existing data
    if(userName===members[i].username && userPassword===members[i].password){
      console.log(userName);
      console.log(userPassword);
      //remove the form and display"Welcome to the website"
      document.write("Welcome to Our Website");
      //this return statement helps the for loop to stop when it finds a correct match
       return
      //if the above conditions do not meet then the function will do this
     } else {
      //alert("Sorry You are not in the system");
      //prompt("Do you wish to register?");
      //create a new Div
         var newDiv = document.createElement('div');
         //giving class name to the div so as to facilitate styling
         newDiv.className = "registrationForm";
         //creating a form to append into the div
         var form = document.createElement('form');
         //create 2 label & input fields
         var label =document.createElement('label');
           label.textContent = "New Username :"
         var input = document.createElement('input');
             input.className="form-control"
          var label2 = document.createElement('label');
             label2.textContent = "New Password :"
          var input2 = document.createElement('input');
            input2.className="form-control";
          //creating a button
          var registerBtn = document.createElement('button');
            registerBtn.className= "btn btn-lg btn-primary";
            registerBtn.textContent = "Register Now";
            registerBtn.id="newBtn";
            //now appending the items to the respective places
            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(label2);
            form.appendChild(input2);
            form.appendChild(registerBtn);
//appending the form into new Div
            newDiv.appendChild(form);
            //appending the new div to the existing div in html
            document.getElementById('info').innerHTML = newDiv;  
            
    }        
    };
  }
 document.getElementById("btn").addEventListener('click', submitForm, false);
  
  /*function newUser(){
    console.log("You are registered");
    document.write("You are registered");
  }*/
