 console.log("Hello World");
 console.warn("This is a warning!")
 console.error('This is an error')
 var number1=56;
 var number2=43;
 console.log(number1+number2);
 var marks={
    ravi:89,
    toby:13,
    shubham:43,
 }
 console.log(marks);
 //boolean
 var a= true;
 var b= false;
 console.log(a,b);
//undefined
var und;
console.log(und);
//null
var blackhole=null;
console.log(blackhole);
//arr
var arr=["Bmw","RangeRover","Mercedesbenz","Marutiwagonar"]
console.log(arr);
//operators
//arithmetic
var h=67;
var g=80;
console.log("The value of h+g is",h+g);
console.log("The value of h-g is",h-g);
console.log("The value of h*g is",h*g);
console.log("The value of h/g is",h/g);
//Assignment 
var c=g;
c-=23;
console.log(c);
c+=57;
console.log(c);
c*=21;
console.log(c);
c/=12;
console.log(c);
//comparison
var x=68;
var j=79;
console.log(x==j);
w=78;
a=21;
console.log(w>=a);
r=567;
g=767;
console.log(r>g);
//logical
var e=09;
var k=02;
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);
console.log(true&&true);
console.log(false||false);
console.log(true||false);
console.log(false||true);
summ=(a,b)=>{
    return a+b;
}
login = ()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set interval fired</b>"
    console.log("I am your log")
}
//setTimeout and setInterval
setTimeout(login,4000);
setInterval(login,4000);



