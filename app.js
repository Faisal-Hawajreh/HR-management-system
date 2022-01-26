'use strict';
// -Employee ID
// -Full Name
// -Department:
// Administration
// Marketing
// Development
// Finance

// -Level:
// Junior
// Mid-Senior
// Senior

// -Image URL
// -Salary





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
    // let levelName = ['Junior','Mid-Senior','Senior']
    // if (this.Level == levelName[0]){
    //     min = 500;
    //     max = 1000;
    // }
    // else if(this.Level == levelName[1]){
    //     min = 1000;
    //     max = 1500;
    // }
    //     else if(this.Level == levelName[2]){
    //     min = 1500;
    //     max = 2000;
    // }

    let salaryWithoutTax = Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
    let Tax = salaryWithoutTax * 0.075;
    let salary = salaryWithoutTax - Tax;
    return Math.floor(salary)
}


function render(){


    let employeeSection = document.getElementById('CardSection')
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


    let divEl = document.createElement('div')
    divEl.className = "divEl";
    employeeSection.appendChild(divEl)

    let IdCard = document.createElement('div')
    IdCard.className = "IdCard";
    divEl.appendChild(IdCard)

    let imgEl = document.createElement('img');
    IdCard.appendChild(imgEl);
    imgEl.className = "imgEl";
    // imgEl.setAttribute('src',employees.imgUrl);
    imgEl.setAttribute('src', employees.imgUrl);
    imgEl.setAttribute('alt', employees.FullName);

    let infoEl = document.createElement('p');
    IdCard.appendChild(infoEl)
    infoEl.className = "infoEl";
    infoEl.textContent = (`Name: ${employees.FullName}. - Id:${employees.EmployeeID}.  Department: ${employees.Department} - Level: ${employees.Level} (${employeeSys.prototype.Salary(min,max)}$) `)
    // document.write(`<p> Employee Name: ${this.FullName}. Employee Salary is ${employeeSys.prototype.Salary(min,max)}$ (Range is ${min} - ${max})</p>`)
}
render()

// Employee01.render();
// Employee02.render();
// Employee03.render();
// Employee04.render();
// Employee05.render();
// Employee06.render();
// Employee07.render();

const employeeIdGenerator = function(){
    let NewEmpId = 1000 + Math.floor(Math.random()*1000);
    return NewEmpId;
};


let newEmployeeForm = document.getElementById('newEmployeeForm');
newEmployeeForm.addEventListener('submit',addNewEmployee)

function addNewEmployee(event){

    event.preventDefault();
    let FullName = event.target.FullName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let imgUrl = event.target.imgUrl.value;
    // console.log(FullName,Department,Level,imgUrl)
    let EmployeeID = employeeIdGenerator();

    let newEmployee = new employeeSys(EmployeeID,FullName,Department,Level,imgUrl);

    render();
    gettingItem();
    // console.log(newEmployee)

}

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
