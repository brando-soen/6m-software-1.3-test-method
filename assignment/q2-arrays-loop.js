/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson", "David"]

function printStudentNames(){
    

    // use for loop
    
    for (let b = 0; b < studentList.length; b++) {
        console.log(studentList[b]);
    }
    

    // use forEach() Method
    /**    
    let index = 0;
    studentList.forEach(myFunction);
    function myFunction(item, index) {
        console.log(item);
    }
    */ 

}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}