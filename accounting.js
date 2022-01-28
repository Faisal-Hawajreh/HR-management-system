'use strict';

function employeeSys(EmployeeID,FullName,Department,Level,imgUrl){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.imgUrl = imgUrl;

    employeeSys.allEmployees.push(this);
    // this.imgUrl = `./assets/${this.FullName.split(' ').slice(0, -1).join(' ')}.jpg`;
}

employeeSys.allEmployees = [];

const Employee01 = new employeeSys(1000,'Ghazi Samer',['Administration'],['Senior'],'assets/Ghazi.jpg')
const Employee02 = new employeeSys(1001,'Lana Ali',['Finance'],['Senior'],'assets/Lana.jpg')
const Employee03 = new employeeSys(1002,'Tamara Ayoub',['Marketing'],['Senior'],'assets/Tamara.jpg')
const Employee04 = new employeeSys(1003,'Safi Walid',['Administration'],['Mid-Senior'],'assets/Safi.jpg')
const Employee05 = new employeeSys(1004,'Omar Zaid',['Development'],['Senior'],'assets/Omar.jpg')
const Employee06 = new employeeSys(1005,'Rana Saleh',['Development'],['Junior'],'assets/Rana.jpg')
const Employee07 = new employeeSys(1006,'Hadi Ahmad',['Finance'],['Mid-Senior'],'assets/Hadi.jpg')




function Salary(min,max) {
    let salaryWithoutTax = Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
    let Tax = salaryWithoutTax * 0.075;
    let salary = salaryWithoutTax - Tax;
    return Math.floor(salary)
}



let tableSection = document.getElementById('tableSection');

let tableEl = document.createElement('table');
tableEl.className = "table"
tableSection.appendChild(tableEl)

let trEL = document.createElement('tr');
tableEl.appendChild(trEL)

let thEl_1 = document.createElement('th')
trEL.appendChild(thEl_1)
thEl_1.textContent = "Department"

let thEl_2 = document.createElement('th')
trEL.appendChild(thEl_2)
thEl_2.textContent = "Number of Employees"

let thEl_3 = document.createElement('th')
trEL.appendChild(thEl_3)
thEl_3.textContent = "Total Salary"

let thEl_4 = document.createElement('th')
trEL.appendChild(thEl_4)
thEl_4.textContent = "Avarage"




// function Counting(){
//     let Count;
//     let departments = ["Administration","Marketing","Development","Finance","Total"]
//     for(let i = 0;i<employeeSys.allEmployees.length;i++){
//         var employees = employeeSys.allEmployees[i]
//     }

//     for(let k = 0;k<employees.length;k++){
//         if(employees['Department'] == departments[k]){
//             let Count = Count + 1; 
//         }
//         console.log(Count)
        
//     }
//     console.log(employees)
//     // console.log(Count)
//         // let tdEl = document.createElement('td');
//         // trEL.appendChild(tdEl);
//         // tdEl.textContent = Count;
// }
// Counting()


function render(){
    for(let i = 0;i<employeeSys.allEmployees.length;i++){
        let employees = employeeSys.allEmployees[i]
        console.log(employees.Level)
    }


    for(let i = 0 ; i<5;i++){
        var departments = ["Administration","Marketing","Development","Finance","Total"]

        let trEL = document.createElement('tr')
        tableEl.appendChild(trEL)
        for(let j = 0 ; j<4; j++){

            if(j === 0){
                let tdEl = document.createElement('td')
                trEL.appendChild(tdEl)
                tdEl.textContent = departments[i]
            }
            else if(j===1){
                let Count = 0 ;
                let totalEmployees = 0;
                let tdEl = document.createElement('td');
                trEL.appendChild(tdEl);
                if(i!=4){
                    for(let k = 0;k<employeeSys.allEmployees.length;k++){
                        let employees = employeeSys.allEmployees[k]
                        if(employees.Department == departments[i]){
                            Count = Count + 1;
                            tdEl.textContent = Count;
                        }
                    }
                }
                else{
                    for(let k = 0;k<employeeSys.allEmployees.length;k++){
                        let employees = employeeSys.allEmployees[k]
                        if(employees.Department !== departments[4]){
                            totalEmployees = totalEmployees + 1;}
                            tdEl.textContent = totalEmployees;
                    }
                }
            }

            else if (j===2){
                let totalSalaryDep = 0;
                let totalSalary = 0;
                let min,max;
                let levelName = ['Junior','Mid-Senior','Senior']
                let tdEl = document.createElement('td');
                trEL.appendChild(tdEl);

                if(i!=4){
                    for(let k = 0;k<employeeSys.allEmployees.length;k++){
                        let employees = employeeSys.allEmployees[k]

                        if(employees.Department == departments[i]){
                            if (employees.Level == levelName[0]){
                                min = 500;
                                max = 1000;
                                totalSalaryDep = totalSalaryDep + Salary(min,max)
                                // tdEl.textContent = totalSalaryDep
                            }
                            else if(employees.Level == levelName[1]){
                                min = 1000;
                                max = 1500;
                                totalSalaryDep = totalSalaryDep + Salary(min,max)
                                // tdEl.textContent = totalSalaryDep
                            }
                            else if(employees.Level == levelName[2]){
                                min = 1500;
                                max = 2000;
                                totalSalaryDep = totalSalaryDep + Salary(min,max)
                                // tdEl.textContent = totalSalaryDep
                            }
                        }
                    }
                    tdEl.textContent = totalSalaryDep
                }

                else{
                    for(let k = 0;k<employeeSys.allEmployees.length;k++){
                        let employees = employeeSys.allEmployees[k]

                        if(employees.Department !== departments[4]){
                            if (employees.Level == levelName[0]){
                                min = 500;
                                max = 1000;
                                totalSalary = totalSalary + Salary(min,max)
                                // tdEl.textContent = totalSalary
                            }
                            else if(employees.Level == levelName[1]){
                                min = 1000;
                                max = 1500;
                                totalSalary = totalSalary + Salary(min,max)
                                // tdEl.textContent = totalSalary
                            }
                            else if(employees.Level == levelName[2]){
                                min = 1500;
                                max = 2000;
                                totalSalary = totalSalary + Salary(min,max)
                                // tdEl.textContent = totalSalary
                            }
                        }
                    }
                    tdEl.textContent = totalSalary
                }

                
            }
            else if (j===3){
                let Count = 0 ;
                let totalEmployees = 0;
                let totalSalaryDep = 0;
                let totalSalary = 0;
                let min,max;
                let levelName = ['Junior','Mid-Senior','Senior']
                let tdEl = document.createElement('td');
                trEL.appendChild(tdEl);

                if(i!=4){
                    for(let k = 0;k<employeeSys.allEmployees.length;k++){
                        let employees = employeeSys.allEmployees[k]

                        if(employees.Department == departments[i]){
                            Count = Count + 1;
                            if (employees.Level == levelName[0]){
                                min = 500;
                                max = 1000;
                                totalSalaryDep = totalSalaryDep + Salary(min,max)
                            }
                            else if(employees.Level == levelName[1]){
                                min = 1000;
                                max = 1500;
                                totalSalaryDep = totalSalaryDep + Salary(min,max)
                            }
                            else if(employees.Level == levelName[2]){
                                min = 1500;
                                max = 2000;
                                totalSalaryDep = totalSalaryDep + Salary(min,max)
                            }
                        }
                    }
                    let AvgSalaryDep = totalSalaryDep/Count;
                    tdEl.textContent = Math.ceil(AvgSalaryDep);
                }

                else{
                    for(let k = 0;k<employeeSys.allEmployees.length;k++){
                        let employees = employeeSys.allEmployees[k]

                        if(employees.Department !== departments[4]){
                            totalEmployees = totalEmployees + 1;

                            if (employees.Level == levelName[0]){
                                min = 500;
                                max = 1000;
                                totalSalary = totalSalary + Salary(min,max)
                                // tdEl.textContent = totalSalary
                            }
                            else if(employees.Level == levelName[1]){
                                min = 1000;
                                max = 1500;
                                totalSalary = totalSalary + Salary(min,max)
                                // tdEl.textContent = totalSalary
                            }
                            else if(employees.Level == levelName[2]){
                                min = 1500;
                                max = 2000;
                                totalSalary = totalSalary + Salary(min,max)
                                // tdEl.textContent = totalSalary
                            }
                        }
                    }
                    let avgTotalSalary = totalSalary/totalEmployees;
                    tdEl.textContent = Math.ceil(avgTotalSalary) 
                }

                
            }
        }
    }
}
render();



function settingItem(){
    let data = JSON.stringify(employeeSys.allEmployees);
    localStorage.setItem(newEmployee,data);
}
 

function gettingItem(){
    let stringObj = localStorage.getItem('newEmployee');
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null){
        employeeSys.allEmployees = parsObj}  
}
gettingItem();