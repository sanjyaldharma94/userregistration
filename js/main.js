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
 function submitForm(){
  //saving the userInput values on click of log in button
  var userName = document.getElementById('username').value;
  var userPassword = document.getElementById('password').value;
   //
  //lets run a for loop to loop through the object array
  for(var i = 0; i < members.length; i++){
    //displaying the property and value of object array in console
   // console.log(members[i]);
    //lets use if/else statement to compare the userinput with the existing data
    if(userName == members[i].username && userPassword == members[i].password){
      console.log(userName);
      console.log(userPassword);
      //remove the form and display"Welcome to the website"
      document.write("Welcome to Our Website");
      //return statement stops the loop but i am not sure whats happening here;
      return;
    } else {
         var newDiv = document.createElement('div');
    }
  }
 }
