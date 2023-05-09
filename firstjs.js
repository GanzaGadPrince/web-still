var btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    var one=parseInt(document.getElementById("one").value);
    var two=parseInt(document.getElementById("two").value);
    var sub= one-two;
console.log(sub);
})
var greet=document.getElementById("greet");
greet.addEventListener('click',(e)=>{
    e.preventDefault();
    var gret;
    var time=parseInt(document.getElementById("time").value);
    if(time>=0 && time<12){
        gret="Good Morning";
    }else if(time>=12 && time<17){
        gret="Good Afternoon";
    }else if(time>=17 && time<24){
        gret= "Good Evening";
    }
    else{
        gret="please input time below 24h and above 0h";
    }
alert(gret);
})
var myDiv = document.getElementById("root");
var p= document.createElement("p");
p.innerHTML= "man city";
p.className="man city"
myDiv.append(p);






var btn=document.getElementById("btn");
var email=document.getElementById("email");
var password=document.getElementById("password");
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    var email_value=document.getElementById("one").value;
    var email_length=email_value.length;
    
    if(email_length<6){
        email.classList.add("active");
    }
    var pass_value=document.getElementById("two").value;
    var pass_length=pass_value.length;
    else if(pass_length<6){
        password.classList.add("active");
    }
})
