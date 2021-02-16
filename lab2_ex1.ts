let employeeList: string[] = ["anna" , "roisin" , "ben"];

function addEmployee(employee: string):number {
    employeeList.push(employee);
    console.log("Employee " + employee + "has been added.")
    return employeeList.length;
}

function listAllEmployees(){
    employeeList.forEach(function(i){
        console.log(i);
    });
}

//////////////////////////////////////////

let numEmps: number = 0;
numEmps = addEmployee("Deirdre");

console.log("Number of employees now is: " + numEmps)

listAllEmployees();