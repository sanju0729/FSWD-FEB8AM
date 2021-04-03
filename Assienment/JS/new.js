class age{
    constructor(age){
        this.age=age

    }
}

class EmployeeName extends age{
    constructor(Employeecode,name,age){
        super(age);
        this.Employeecode=Employeecode
        this.name=name

    }
}

let c1 = new EmployeeName(101,"sanju",24 )

console.log(c1);