function showData(){
    let student = {
        name: "Ravi",
        age: 22,
        course: "JavaScript"
    };
    
    let jsonData = JSON.stringify(student);
    let obj = JSON.parse(jsonData);
    
    document.getElementById("output1").innerHTML = "Name: " + obj.name + "<br>Course: " + obj.course;
} 