function AddNumbers(){
    let a=500;
    let b=200;
    //Does not need console.log anymore:  console.log(a+b);
    document.getElementById('heading-two').innerText= (a+b)

    document.getElementById('para1').innerHTML= "<h1> New Heading One</h1>"
}


//Taking away Function call  AddNumbers(); 
function getInput(){
    let username= document.getElementById('username').value;
    document.getElementById('heading-three').innerText= "Hello " + username+"!";
}


document.getElementById('btn1').addEventListener('click', getInput)


let fName= "Harry";
let password= 'Potter';
document.getElementById('form1').addEventListener('click',function(event) {
   if( document.getElementById('firstname').value == fName){
    console.log('success')
   }
   else{
    event.preventDefault();
   }
})