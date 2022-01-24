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





function employeeSys(EmployeeID,FullName,Department,Level){
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department= Department;
    this.Level = Level;
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
    
    document.write(`<p> Employee Name: ${this.FullName}. Employee Salary is ${employeeSys.prototype.Salary(min,max)}$ (Range is ${min} - ${max})</p>`)
}
Employee01.render();
Employee02.render();
Employee03.render();
Employee04.render();
Employee05.render();
Employee06.render();
Employee07.render();