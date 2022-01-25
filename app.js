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
    this.imgUrl = `./assets/${this.FullName.split(' ').slice(0, -1).join(' ')}.jpg`;
}

const Employee01 = new employeeSys(1000,'Ghazi Samer',['Administration'],['Senior'])
const Employee02 = new employeeSys(1001,'Lana Ali',['Finance'],['Senior'])
const Employee03 = new employeeSys(1002,'Tamara Ayoub',['Marketing'],['Senior'])
const Employee04 = new employeeSys(1003,'Safi Walid',['Administration'],['Mid-Senior'])
const Employee05 = new employeeSys(1004,'Omar Zaid',['Development'],['Senior'])
const Employee06 = new employeeSys(1005,'Rana Saleh',['Development'],['Junior'])
const Employee07 = new employeeSys(1006,'Hadi Ahmad',['Finance'],['Mid-Senior'])


employeeSys.prototype.Salary = function (min,max) {

        let salaryWithoutTax = Math.floor(Math.random() * (max - min) + min); 
        //The maximum is exclusive and the minimum is inclusive
        let Tax = salaryWithoutTax * 0.075;
        let salary = salaryWithoutTax - Tax;
    return Math.floor(salary)
}

employeeSys.prototype.render = function(){
    let x = ['Junior','Mid-Senior','Senior']
    let min,max;
    if (this.Level == x[0]){
        min = 500;
        max = 1000;
    }
      else if(this.Level == x[1]){
        min = 1000;
        max = 1500;
    }
        else if(this.Level == x[2]){
        min = 1500;
        max = 2000;
    };
    let employeeSection = document.getElementById('CardSection');
    // employeeSection.style.marginLeft = '20px'
    // employeeSection.style.marginTop = '20px'
    // employeeSection.style.padding = '10px 10px'

    let divEl = document.createElement('div');
    divEl.style.padding = "20px 0";
    divEl.style.height= "auto";
    divEl.style.width = "250px";

    employeeSection.appendChild(divEl)

    let IdCard = document.createElement('div');
    IdCard.style.backgroundColor = "#C0D8C0";
    IdCard.style.height= "auto";
    IdCard.style.width = "200px";
    IdCard.style.borderRadius = "10%";
    divEl.appendChild(IdCard)

    let imgEl = document.createElement('img');
    IdCard.appendChild(imgEl);
    imgEl.setAttribute('src',this.imgUrl);
    imgEl.setAttribute('alt',this.FullName);
    imgEl.style.width ="150px"
    imgEl.style.height ="auto"
    imgEl.style.padding = "15px 25px"
    imgEl.style.borderRadius = "50%"


    let infoEl = document.createElement('p');
    IdCard.appendChild(infoEl)
    infoEl.textContent = (`Name: ${this.FullName}. - Id:${this.EmployeeID}. Department: ${this.Department} - Level: ${this.Level}  (${employeeSys.prototype.Salary(min,max)}$) `)
    infoEl.style.padding = '5px 15px '
    infoEl.style.textAlign = 'center'


    // document.write(`<p> Employee Name: ${this.FullName}. Employee Salary is ${employeeSys.prototype.Salary(min,max)}$ (Range is ${min} - ${max})</p>`)
}
Employee01.render();
Employee02.render();
Employee03.render();
Employee04.render();
Employee05.render();
Employee06.render();
Employee07.render();

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
    newEmployee.render();
    console.log(newEmployee)

    }
