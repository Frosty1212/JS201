// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.

var employees = ['Susan', 'Anthony', 'Bill'];
var employeeOfTheMonth = ['Bill'];
function recognizeEmployees(emp, empMonth) {
    let newArray = ''
    for(let i = 0; i < emp.length; i++) {
        for(let j = 0; j < empMonth.length; j++) {
            if(emp[i] ==  empMonth[j]){
                newArray +=`Outstanding job ${empMonth[j]}! `;
            }else(emp[i] !==  empMonth[j]); {
                newArray += `Great job ${emp[i]}, `;
            }
        }
    }return newArray
}
console.log(recognizeEmployees(employees, employeeOfTheMonth))

