// your code goes here
const multiply = (a,b) => a * b;

function calculate(){
    let answer = multiply(5,5);
    
    document.getElementById("output1").innerHTML = 
    "Multiplication Result: " + answer;
}

function showSquares(){
    let numbers = [1,2,3,4,5];
    let squares = numbers.map(num => num * num);
    
    document.getElementById("output2").innerHTML = "Squares: " + squares.join(", ");
}

function showObject(){
    
    let name = "Rahul";
    let age = 23;
    let student = {name,age};
    
    document.getElementById("output3").innerHTML = "Name: " + student.name + "<br>Age: " + student.age;
}

function showStudent(){
    let key = "marks";
    let student = { name: "Anitha",[key]: 95
    };
    document.getElementById("output4").innerHTML = "Student Marks: " + student.marks;
}