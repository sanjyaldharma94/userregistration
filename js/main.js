var people = [
{
   username: "dharma",
  password : "Password0"
},
{
	username: "alex",
	password: "Password1"
},
{
	username: "chris",
	password: "Password2"
},
{   username: "nick",
	password: "Password3"
},
{
	username: "courtney",
	password: "Password4"
},
{   username: "sam",
	password: "Password5"
}
];
function submitForm(){
	//when submit is clicked we want to save the user input
	var userInput = document.getElementById('username').value;
	var password = document.getElementById('password').value;
    //Using for loop to loop through the object array
  for(i = 0; i < people.length; i++){
   console.log(people[i]);
 
	   //giving a condition to match the username and password
		if(userInput === people[i].username && password === people[i].password) {
			console.log(userInput + " is logged in");
           document.write("Welcome to our Website");     
		}  
    //remove the log in form and display the registration form
    else {	
 document.body.removeChild(document.getElementById('forms'));
  var newDiv = document.createElement('div');
              var form = document.createElement('form');
           var label = document.createElement('label');
              label.textContent="NewUser: ";
             var input = document.createElement('input');
                          input.type="text";
                           input.id="newUser";
           var label1 = document.createElement('label1');
              label1.textContent="Password: ";
            var input1 = document.createElement('input');
                          input1.type="text";
                           input1.id="newPassword";
          //creating a new register button
             var newBtn =  document.createElement('button');
		          newBtn.className ="btn btn-large btn-primary";
                newBtn.textContent = "Register Now";
                     newBtn.id = "registerBtn";
                 label.appendChild(input);
                 label1.appendChild(input1);
                  form.appendChild(label);
                  form.appendChild(label1);
                newDiv.appendChild(form);
                newDiv.appendChild(newBtn);
             document.getElementById('info').appendChild(newDiv);
             //document.body.appendChild(newDiv);
      console.log("you are not in the system");
      alert("Register Below");
    
     // document.getElementById('forms').reset();
};
};

// newBtn.addEventListener('click', newBtnFunction,);
 //function newBtnFunction() {
 	//document.getElementById('form2').style.display="block";
 	//console.log("lets get started");
 
//function newBtnFunction(){
  //document.write("Welcome!");




