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

employeeSys.prototype.Salary = function (min,max) {
    let salaryWithoutTax = Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
    let Tax = salaryWithoutTax * 0.075;
    let salary = salaryWithoutTax - Tax;
    return Math.floor(salary)
}

// function countEmp(){
//     for(let i = 0;i<employees.length;i++){
//         if()
//     }







// }


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


function render(){
    for(let i = 0;i<employeeSys.allEmployees.length;i++){
        var employees = employeeSys.allEmployees[i]
        // employees['imgUrl'] = imgUrl || `./assets/${employees.FullName.split(' ').slice(0, -1).join(' ')}.jpg` 
        console.log(employees)
    }

    let levelName = ['Junior','Mid-Senior','Senior']
    let min,max;
    if (employees.Level == levelName[0]){
        min = 500;
        max = 1000;
    }
      else if(employees.Level == levelName[1]){
        min = 1000;
        max = 1500;
    }
        else if(employees.Level == levelName[2]){
        min = 1500;
        max = 2000;
    }

    for(let i = 0 ; i<5;i++){
        let departments = ["Administration","Marketing","Development","Finance","Total"]
        let count = 0;
        let trEL = document.createElement('tr')
        tableEl.appendChild(trEL)
        for(let j = 0 ; j<4; j++){
            let tdEl = document.createElement('td')
            trEL.appendChild(tdEl)
            if(j === i){
                tdEl.textContent = departments[i]
            }
            else if(j===1){
                for(let k = 0;k<employees.length;k++){
                        if(employees['Department'] == departments[i]){
                            let count = count + 1;
                        }
                        let tdEl = document.createElement('td');
                        trEL.appendChild(tdEl);
                        tdEl.textContent = count;

                }
            }
            else if (j===2){
                





            }









        }











}
render()



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
gettingItem()









