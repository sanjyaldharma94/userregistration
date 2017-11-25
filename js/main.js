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
	username: "Chris",
	password: "Password2"
},
{   username: "Nick",
	password: "Password3"
},
{
	username: "Courtney",
	password: "Password4"
},
{   username: "Sam",
	password: "Password5"
}
];
function submitForm(){
	//when submit is clicked we want to save the user input
	var userInput = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	//Using for loop to 
	for(i= 0; i < people.length; i++) {
		if(userInput === people[i].username && password === people[i].password) {
			console.log(userInput + " is logged in");
			document.body.removeChild(document.getElementById('forms'));
           document.write("Welcome to our Website");
           return;
		} else {
			
			 var newDiv = document.createElement('div');
              var form = document.createElement('form');
           var label = document.createElement('label');
              label.textContent="NewUser: ";
                    var input = document.createElement('input');
                          input.type="text";
                           input.id="newUser";
                           var newBtn =  document.createElement('button');
		      newBtn.className ="btn btn-large btn-default";
                newBtn.textContent = "Register Now";
                     newBtn.id = "registerBtn";
                 label.appendChild(input);
                  form.appendChild(label);
                newDiv.appendChild(form);
                newDiv.appendChild(newBtn);
             document.body.appendChild(newDiv);
             
           // document.body.appendChild(newBtn);
           //  document.body.appendChild(newDiv);
      console.log("you are not in the system");
};
};
};
/*
//document.body.appendChild(document.getElementById('form2'))
 //newBtn.addEventListener('click', newBtnFunction, false);
 function newBtnFunction() {
 	document.getElementById('form2').style.display="block";
 	console.log("lets get started");
 };
};
return;
};


}*/
