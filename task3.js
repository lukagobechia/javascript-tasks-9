class Employee {

    constructor(id,firstName,lastName,hours,salaryPerHours, daysWorked){
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.salaryPerHours = salaryPerHours
        this.hours = hours
        this.daysWorked = daysWorked
    }
    
    calculateSalary(){
        const totaSalary = this.hours * this.salaryPerHours;
        const tax = 0.21;
        const monthlySalart = (totaSalary - totaSalary*tax) * this.daysWorked 
        return monthlySalart;
    }

    getEmployeesInfo(){
        console.log(
            `Id: ${this.id}\nFirst Name: ${this.firstName}\nLast Name: ${this.lastName}\nSalary: ${this.calculateSalary()}$`
          );
    }
}

const emp1 = new Employee(15345647, 'Nick', 'Jonas',8,50, 20)

emp1.getEmployeesInfo();